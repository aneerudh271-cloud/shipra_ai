import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppProvider} from './src/context/AppContext';

// Import screens
import HomeScreen from './src/screens/HomeScreen';
import AIScreen from './src/screens/AIScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import AboutScreen from './src/screens/AboutScreen';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <AppProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarActiveTintColor: '#007AFF',
              tabBarInactiveTintColor: '#8E8E93',
              tabBarStyle: {
                backgroundColor: '#fff',
                borderTopWidth: 1,
                borderTopColor: '#f0f0f0',
                paddingBottom: 5,
                height: 60,
              },
              headerStyle: {
                backgroundColor: '#007AFF',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}>
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: 'Shipra AI',
                tabBarLabel: 'Home',
              }}
            />
            <Tab.Screen
              name="AI"
              component={AIScreen}
              options={{
                title: 'AI Assistant',
                tabBarLabel: 'AI Chat',
              }}
            />
            <Tab.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                title: 'My Profile',
                tabBarLabel: 'Profile',
              }}
            />
            <Tab.Screen
              name="Settings"
              component={SettingsScreen}
              options={{
                title: 'Settings',
                tabBarLabel: 'Settings',
              }}
            />
            <Tab.Screen
              name="About"
              component={AboutScreen}
              options={{
                title: 'About',
                tabBarLabel: 'About',
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </AppProvider>
  );
};

export default App;