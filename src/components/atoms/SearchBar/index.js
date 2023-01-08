import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const SearchBar = ({searchText, setSearchText}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search..."
        style={styles.input}
        value={searchText}
        onChangeText={text => setSearchText(text)}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
    padding: 5,
    borderRadius: 10,
    color: '#000',
    borderWidth: 1,
  },
});
