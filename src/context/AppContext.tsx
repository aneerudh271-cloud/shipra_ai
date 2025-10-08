import React, {createContext, useContext, useReducer, ReactNode} from 'react';
import {Storage, StorageKeys} from '../utils/storage';

interface User {
  name: string;
  email: string;
  bio: string;
  avatar?: string;
}

interface AppSettings {
  notifications: boolean;
  darkMode: boolean;
  soundEnabled: boolean;
  autoSave: boolean;
}

interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface AppState {
  user: User | null;
  settings: AppSettings;
  chatHistory: ChatMessage[];
  isLoading: boolean;
}

type AppAction =
  | {type: 'SET_USER'; payload: User}
  | {type: 'UPDATE_SETTINGS'; payload: Partial<AppSettings>}
  | {type: 'ADD_MESSAGE'; payload: ChatMessage}
  | {type: 'CLEAR_CHAT'}
  | {type: 'SET_LOADING'; payload: boolean}
  | {type: 'LOAD_DATA'; payload: Partial<AppState>};

const initialState: AppState = {
  user: null,
  settings: {
    notifications: true,
    darkMode: false,
    soundEnabled: true,
    autoSave: true,
  },
  chatHistory: [
    {
      id: '1',
      text: 'Hello! I\'m Shipra AI, your intelligent assistant. How can I help you today?',
      isUser: false,
      timestamp: new Date(),
    },
  ],
  isLoading: false,
};

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_USER':
      Storage.setItem(StorageKeys.USER_PROFILE, JSON.stringify(action.payload));
      return {...state, user: action.payload};

    case 'UPDATE_SETTINGS':
      const newSettings = {...state.settings, ...action.payload};
      Storage.setItem(StorageKeys.APP_SETTINGS, JSON.stringify(newSettings));
      return {...state, settings: newSettings};

    case 'ADD_MESSAGE':
      const newHistory = [...state.chatHistory, action.payload];
      if (state.settings.autoSave) {
        Storage.setItem(StorageKeys.CHAT_HISTORY, JSON.stringify(newHistory));
      }
      return {...state, chatHistory: newHistory};

    case 'CLEAR_CHAT':
      Storage.removeItem(StorageKeys.CHAT_HISTORY);
      return {...state, chatHistory: []};

    case 'SET_LOADING':
      return {...state, isLoading: action.payload};

    case 'LOAD_DATA':
      return {...state, ...action.payload};

    default:
      return state;
  }
}

interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  // Helper functions
  sendMessage: (text: string) => void;
  updateUser: (user: User) => void;
  updateSettings: (settings: Partial<AppSettings>) => void;
  clearChat: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({children}) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Load saved data on app start
  React.useEffect(() => {
    const loadSavedData = async () => {
      try {
        const savedUser = Storage.getItem(StorageKeys.USER_PROFILE);
        const savedSettings = Storage.getItem(StorageKeys.APP_SETTINGS);
        const savedChat = Storage.getItem(StorageKeys.CHAT_HISTORY);

        const loadedData: Partial<AppState> = {};

        if (savedUser) {
          loadedData.user = JSON.parse(savedUser);
        }

        if (savedSettings) {
          loadedData.settings = {...initialState.settings, ...JSON.parse(savedSettings)};
        }

        if (savedChat) {
          loadedData.chatHistory = JSON.parse(savedChat);
        }

        if (Object.keys(loadedData).length > 0) {
          dispatch({type: 'LOAD_DATA', payload: loadedData});
        }
      } catch (error) {
        console.error('Error loading saved data:', error);
      }
    };

    loadSavedData();
  }, []);

  const sendMessage = (text: string) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text,
      isUser: true,
      timestamp: new Date(),
    };

    dispatch({type: 'ADD_MESSAGE', payload: userMessage});

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: `I understand you said: "${text}". This is a demo response. In a real implementation, this would connect to an AI service.`,
        isUser: false,
        timestamp: new Date(),
      };
      dispatch({type: 'ADD_MESSAGE', payload: aiMessage});
    }, 1000);
  };

  const updateUser = (user: User) => {
    dispatch({type: 'SET_USER', payload: user});
  };

  const updateSettings = (settings: Partial<AppSettings>) => {
    dispatch({type: 'UPDATE_SETTINGS', payload: settings});
  };

  const clearChat = () => {
    dispatch({type: 'CLEAR_CHAT'});
  };

  const value: AppContextType = {
    state,
    dispatch,
    sendMessage,
    updateUser,
    updateSettings,
    clearChat,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};