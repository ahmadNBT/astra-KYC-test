import React, { useState } from 'react';
import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
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

  const [serverKey, setServerKey] = useState('');
  const [email, setEmail] = useState('');
  const [reference, setReference] = useState('');

  const submit = () => {
    if (!serverKey || !email || !reference) {
      return;
    }

    startKyc({
      serverKey: serverKey,
      email: email,
      reference: reference,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Astra Kyc</Text>

      <TextInput
        style={styles.inputStyle}
        placeholder="serverKey"
        onChangeText={setServerKey}
        value={serverKey}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="reference"
        onChangeText={setReference}
        value={reference}
      />

      <Button title="Start" onPress={submit} color={''} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  textStyle: {
    color: 'white',
    fontSize: 30,
    marginBottom: 20,
  },
  inputStyle: {
    height: 50,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 5,
    padding: 10,
    color: 'white',
  },
});

export default App;
