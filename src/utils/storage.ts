// Simple in-memory storage for demo purposes
// In production, replace with AsyncStorage or similar

interface StorageData {
  [key: string]: string;
}

class MemoryStorage {
  private static data: StorageData = {};

  static setItem(key: string, value: string): void {
    try {
      this.data[key] = value;
    } catch (error) {
      console.error('Error saving data:', error);
    }
  }

  static getItem(key: string): string | null {
    try {
      return this.data[key] || null;
    } catch (error) {
      console.error('Error retrieving data:', error);
      return null;
    }
  }

  static removeItem(key: string): void {
    try {
      delete this.data[key];
    } catch (error) {
      console.error('Error removing data:', error);
    }
  }

  static clear(): void {
    try {
      this.data = {};
    } catch (error) {
      console.error('Error clearing data:', error);
    }
  }

  static getAllKeys(): string[] {
    return Object.keys(this.data);
  }
}

export class Storage {
  static setItem(key: string, value: string): void {
    MemoryStorage.setItem(key, value);
  }

  static getItem(key: string): string | null {
    return MemoryStorage.getItem(key);
  }

  static removeItem(key: string): void {
    MemoryStorage.removeItem(key);
  }

  static clear(): void {
    MemoryStorage.clear();
  }

  static getAllKeys(): string[] {
    return MemoryStorage.getAllKeys();
  }
}

export const StorageKeys = {
  USER_PROFILE: 'user_profile',
  APP_SETTINGS: 'app_settings',
  CHAT_HISTORY: 'chat_history',
  THEME: 'theme',
} as const;