import React from 'react';
import {MovieList} from './Movies.js';
import {View, Text, ScrollView} from 'react-native';
import {ProductList} from './Boats';

const App: () => React$Node = () => {
  return (
    <ScrollView>
      <Text>GETABOAT-For Sale</Text>
      <ProductList />
    </ScrollView>
  );
};
export default App;
