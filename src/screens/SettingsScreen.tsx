import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Switch,
  Alert,
} from 'react-native';

const SettingsScreen: React.FC = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [autoSave, setAutoSave] = useState(true);

  const handleClearData = () => {
    Alert.alert(
      'Clear All Data',
      'This will remove all chat history and settings. This action cannot be undone.',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Clear', style: 'destructive', onPress: () => {
          Alert.alert('Success', 'All data has been cleared.');
        }},
      ]
    );
  };

  const handleExportData = () => {
    Alert.alert('Export Data', 'Data export feature will be available in the next update.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Settings</Text>

        {/* AI Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>AI Assistant</Text>

          <View style={styles.setting}>
            <Text style={styles.settingText}>Enable Notifications</Text>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ false: '#767577', true: '#007AFF' }}
            />
          </View>

          <View style={styles.setting}>
            <Text style={styles.settingText}>Dark Mode</Text>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ false: '#767577', true: '#007AFF' }}
            />
          </View>

          <View style={styles.setting}>
            <Text style={styles.settingText}>Sound Effects</Text>
            <Switch
              value={soundEnabled}
              onValueChange={setSoundEnabled}
              trackColor={{ false: '#767577', true: '#007AFF' }}
            />
          </View>
        </View>

        {/* Data Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Data & Privacy</Text>

          <View style={styles.setting}>
            <Text style={styles.settingText}>Auto-save Conversations</Text>
            <Switch
              value={autoSave}
              onValueChange={setAutoSave}
              trackColor={{ false: '#767577', true: '#007AFF' }}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleExportData}>
            <Text style={styles.buttonText}>Export Data</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.dangerButton} onPress={handleClearData}>
            <Text style={styles.dangerButtonText}>Clear All Data</Text>
          </TouchableOpacity>
        </View>

        {/* App Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>

          <TouchableOpacity style={styles.infoButton}>
            <Text style={styles.infoButtonText}>Version 1.0.0</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.infoButton}>
            <Text style={styles.infoButtonText}>Privacy Policy</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.infoButton}>
            <Text style={styles.infoButtonText}>Terms of Service</Text>
          </TouchableOpacity>
        </View>

        {/* Support */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support</Text>

          <TouchableOpacity style={styles.infoButton}>
            <Text style={styles.infoButtonText}>Help & FAQ</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.infoButton}>
            <Text style={styles.infoButtonText}>Contact Us</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.infoButton}>
            <Text style={styles.infoButtonText}>Rate App</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#007AFF',
    marginBottom: 15,
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingText: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  dangerButton: {
    backgroundColor: '#FF3B30',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  dangerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  infoButton: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  infoButtonText: {
    fontSize: 16,
    color: '#007AFF',
  },
});

export default SettingsScreen;