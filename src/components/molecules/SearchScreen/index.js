import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SearchBar} from '../../atoms';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <View style={styles.container}>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'red'},
});
