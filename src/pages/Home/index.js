import React, {useState} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../assets';
import {
  FoodCard,
  Gap,
  HomeProfile,
  HomeTabSection,
  SearchBar,
} from '../../components';

const Home = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <View style={styles.page}>
      <HomeProfile />
      <View>
        <View>
          <SearchBar searchText={searchText} setSearchText={setSearchText} />
        </View>
        <View />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.FoodCardContainer}>
            <Gap width={24} />
            <FoodCard image={FoodDummy1} />
            <FoodCard image={FoodDummy2} />
            <FoodCard image={FoodDummy3} />
            <FoodCard image={FoodDummy4} />
            <Gap width={24} />
          </View>
        </ScrollView>
      </View>
      <View style={styles.tabContainer} />
      <HomeTabSection />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: 'white'},
  FoodCardContainer: {flexDirection: 'row', marginVertical: 8},
  tabContainer: {flex: 0},
});
