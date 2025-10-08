import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Linking,
} from 'react-native';

const AboutScreen: React.FC = () => {
  const handleEmail = () => {
    Linking.openURL('mailto:support@shipraai.com');
  };

  const handleWebsite = () => {
    Linking.openURL('https://shipraai.com');
  };

  const handlePrivacyPolicy = () => {
    Linking.openURL('https://shipraai.com/privacy');
  };

  const handleTermsOfService = () => {
    Linking.openURL('https://shipraai.com/terms');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>Shipra AI</Text>
          </View>
          <Text style={styles.version}>Version 1.0.0</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.description}>
            Shipra AI is an intelligent mobile assistant powered by advanced artificial intelligence.
            Designed to help you with daily tasks, answer questions, and provide intelligent conversations.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Features</Text>
          <View style={styles.featuresList}>
            <Text style={styles.feature}>• AI-powered conversations</Text>
            <Text style={styles.feature}>• Smart assistance and recommendations</Text>
            <Text style={styles.feature}>• Voice and text interactions</Text>
            <Text style={styles.feature}>• Personalized responses</Text>
            <Text style={styles.feature}>• Multi-language support</Text>
            <Text style={styles.feature}>• Offline capabilities</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Us</Text>
          <TouchableOpacity style={styles.contactButton} onPress={handleEmail}>
            <Text style={styles.contactButtonText}>📧 support@shipraai.com</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactButton} onPress={handleWebsite}>
            <Text style={styles.contactButtonText}>🌐 www.shipraai.com</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Legal</Text>
          <TouchableOpacity style={styles.linkButton} onPress={handlePrivacyPolicy}>
            <Text style={styles.linkButtonText}>Privacy Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkButton} onPress={handleTermsOfService}>
            <Text style={styles.linkButtonText}>Terms of Service</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.copyright}>
            © 2024 Shipra AI. All rights reserved.{'\n'}
            Built with ❤️ using React Native and TypeScript
          </Text>
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
  },
  header: {
    backgroundColor: '#fff',
    padding: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  version: {
    fontSize: 16,
    color: '#666',
  },
  section: {
    backgroundColor: '#fff',
    margin: 10,
    marginBottom: 20,
    borderRadius: 10,
    padding: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#007AFF',
    marginBottom: 15,
  },
  featuresList: {
    paddingLeft: 10,
  },
  feature: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    lineHeight: 22,
  },
  contactButton: {
    backgroundColor: '#f8f9fa',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  contactButtonText: {
    fontSize: 16,
    color: '#007AFF',
    textAlign: 'center',
  },
  linkButton: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  linkButtonText: {
    fontSize: 16,
    color: '#007AFF',
  },
  copyright: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default AboutScreen;