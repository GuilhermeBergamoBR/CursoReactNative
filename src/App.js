/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';

import Simples from './components/Simples';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <Simples texto="Amo a giiii" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  f20: {
    fontSize: 40,
  },
});

export default App;
