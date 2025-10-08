import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';

interface HeaderProps {
  title: string;
  leftButton?: {
    title: string;
    onPress: () => void;
  };
  rightButton?: {
    title: string;
    onPress: () => void;
  };
}

const Header: React.FC<HeaderProps> = ({ title, leftButton, rightButton }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#007AFF" />
      <View style={styles.header}>
        {leftButton && (
          <TouchableOpacity style={styles.button} onPress={leftButton.onPress}>
            <Text style={styles.buttonText}>{leftButton.title}</Text>
          </TouchableOpacity>
        )}

        <Text style={styles.title}>{title}</Text>

        {rightButton && (
          <TouchableOpacity style={styles.button} onPress={rightButton.onPress}>
            <Text style={styles.buttonText}>{rightButton.title}</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#007AFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    flex: 1,
    textAlign: 'center',
  },
  button: {
    padding: 8,
    minWidth: 50,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default Header;