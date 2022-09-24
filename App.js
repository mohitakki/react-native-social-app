import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import TopHeader from './src/components/molecules/TopHeader';
import TopTabBar from './src/components/molecules/TopTabBar';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopHeader />
      <View style={{
        flex:1,
        marginTop:10
      }} >
      <TopTabBar />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
