import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { connect, Provider } from "react-redux";
import store from "./src/redux/store";
export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
      <Image
            style={{width: 100, height: 100, marginBottom:10}}
            source={{uri: 
            'https://blogger.zilog.tech/static/media/logo.436f1557.png'
        }}/>
        <Text>Boiler Plate React-Native, React Redux</Text>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
