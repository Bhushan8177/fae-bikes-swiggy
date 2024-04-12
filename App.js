import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { LogBox } from 'react-native';
import StackNavigator from './StackNavigator';
import { Provider } from 'react-redux';
import store from './store';

// Ignore log notification by message
LogBox.ignoreLogs(['Warning: ...']);

//Ignore all log notifications
LogBox.ignoreAllLogs();
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#eee' }}>
        <Provider store={store}>
        <StackNavigator />
        </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
