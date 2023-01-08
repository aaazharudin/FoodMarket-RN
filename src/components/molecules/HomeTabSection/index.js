import React from 'react';
import {
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  Image,
  ScrollView,
} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {
  FoodDummy1,
  FoodDummy2,
  FoodDummy3,
  FoodDummy4,
  FoodDummy5,
} from '../../../assets';
import ItemListFood from '../ItemListFood';
import {useNavigation} from '@react-navigation/native';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
      width: 0.7,
      marginLeft: 0.3,
    }}
    style={{
      backgroundColor: 'white',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#F2F2F2',
      borderBottomWidth: 1,
    }}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? '#020202' : '#8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const Daging = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        <ItemListFood
          type="product"
          name="Telur"
          price="200.000"
          rating={3}
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          type="product"
          name="Wortel"
          price="200.000"
          rating={3}
          image={FoodDummy2}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          type="product"
          name="Jengkol"
          price="200.000"
          rating={3}
          image={FoodDummy3}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          type="product"
          name="Daging kambing"
          price="200.000"
          rating={3}
          image={FoodDummy4}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          type="product"
          name="Daging ayam"
          price="200.000"
          rating={3}
          image={FoodDummy5}
          onPress={() => navigation.navigate('FoodDetail')}
        />
      </View>
    </ScrollView>
  );
};

const Sayur = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        <ItemListFood
          type="product"
          name="Alpukat"
          price="200.000"
          rating={3}
          image={FoodDummy4}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          type="product"
          name="Tomat"
          price="200.000"
          rating={3}
          image={FoodDummy3}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          type="product"
          name="cabe"
          price="200.000"
          rating={3}
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          type="product"
          name="wortel"
          price="200.000"
          rating={3}
          image={FoodDummy2}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          type="product"
          name="Bayam"
          price="200.000"
          rating={3}
          image={FoodDummy5}
          onPress={() => navigation.navigate('FoodDetail')}
        />
      </View>
    </ScrollView>
  );
};

const Bumbu = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        <ItemListFood
          type="product"
          name="Telur"
          price="200.000"
          rating={3}
          image={FoodDummy2}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          type="product"
          name="Slada"
          price="200.000"
          rating={3}
          image={FoodDummy5}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          type="product"
          name="Daging"
          price="200.000"
          rating={3}
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          type="product"
          name="Sawi"
          price="200.000"
          rating={3}
          image={FoodDummy3}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          type="product"
          name="vagatables Mix"
          price="200.000"
          rating={3}
          image={FoodDummy4}
          onPress={() => navigation.navigate('FoodDetail')}
        />
      </View>
    </ScrollView>
  );
};

const FrozenFood = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        <ItemListFood
          type="product"
          name="Telur"
          price="200.000"
          rating={3}
          image={FoodDummy2}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          type="product"
          name="Slada"
          price="200.000"
          rating={3}
          image={FoodDummy5}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          type="product"
          name="Daging"
          price="200.000"
          rating={3}
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          type="product"
          name="Sawi"
          price="200.000"
          rating={3}
          image={FoodDummy3}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          type="product"
          name="vagatables Mix"
          price="200.000"
          rating={3}
          image={FoodDummy4}
          onPress={() => navigation.navigate('FoodDetail')}
        />
      </View>
    </ScrollView>
  );
};

const Rempah = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        <ItemListFood
          type="product"
          name="Telur"
          price="200.000"
          rating={3}
          image={FoodDummy2}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          type="product"
          name="Slada"
          price="200.000"
          rating={3}
          image={FoodDummy5}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          type="product"
          name="Daging"
          price="200.000"
          rating={3}
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          type="product"
          name="Sawi"
          price="200.000"
          rating={3}
          image={FoodDummy3}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          type="product"
          name="vagatables Mix"
          price="200.000"
          rating={3}
          image={FoodDummy4}
          onPress={() => navigation.navigate('FoodDetail')}
        />
      </View>
    </ScrollView>
  );
};

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

const renderScene = SceneMap({
  1: Daging,
  2: Sayur,
  3: Bumbu,
  4: FrozenFood,
  5: Rempah,
});

const HomeTabSection = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Daging'},
    {key: '2', title: 'Sayuran'},
    {key: '3', title: 'Bumbu'},
    {key: '4', title: 'FrozenFood'},
    {key: '5', title: 'Rempah'},
  ]);
  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={renderTabBar}
      style={{backgroundColor: 'White'}}
    />
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({});
