/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { KycProvider, useKyc } from 'react-native-astra-sdk';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <KycProvider>
        <AppContent />
      </KycProvider>
    </SafeAreaProvider>
  );
}

function AppContent() {
  const { startKyc } = useKyc();

  return (
    <View style={styles.container}>

      <Text style={styles.textStyle}>Astra Kyc</Text>

      <Button
        title="Start"
        onPress={() =>
          startKyc({
            serverKey: '26a66f45-a3ba-4dd3-94b2-d979d1664fec',
            email: 'ahmadraza@gmail.com',
            reference: 'org-1763992475881',
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    fontSize: 30,
    marginBottom: 20,
  },
});

export default App;
