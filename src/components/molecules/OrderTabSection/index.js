import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View, Image} from 'react-native';
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

const InProgres = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingTop: 8,
        paddingHorizontal: 24,
        backgroundColor: 'white',
        flex: 1,
      }}>
      <ItemListFood
        rating={3}
        image={FoodDummy1}
        onPress={() => navigation.navigate('OrderDetail')}
        type="in-progress"
        items={3}
        price="2.000.000"
        name="Bayam Cabut"
      />
      <ItemListFood
        rating={3}
        image={FoodDummy2}
        onPress={() => navigation.navigate('OrderDetail')}
        type="in-progress"
        items={3}
        price="2.000.000"
        name="Bayam Cabut"
      />
      <ItemListFood
        rating={3}
        image={FoodDummy3}
        onPress={() => navigation.navigate('OrderDetail')}
        type="in-progress"
        items={3}
        price="2.000.000"
        name="Bayam Cabut"
      />
      <ItemListFood
        rating={3}
        image={FoodDummy4}
        onPress={() => navigation.navigate('OrderDetail')}
        type="in-progress"
        items={3}
        price="2.000.000"
        name="Bayam Cabut"
      />
      <ItemListFood
        rating={3}
        image={FoodDummy5}
        onPress={() => navigation.navigate('OrderDetail')}
        type="in-progress"
        items={3}
        price="2.000.000"
        name="Bayam Cabut"
      />
    </View>
  );
};

const Pastorder = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingTop: 8,
        paddingHorizontal: 24,
        backgroundColor: 'white',
        flex: 1,
      }}>
      <ItemListFood
        rating={3}
        image={FoodDummy4}
        onPress={() => navigation.navigate('OrderDetail')}
        type="past-order"
        items={3}
        price="2.000.000"
        name="Bayam Cabut"
        date="Jun 12, 14:30"
      />
      <ItemListFood
        rating={3}
        image={FoodDummy3}
        onPress={() => navigation.navigate('OrderDetail')}
        type="past-order"
        items={3}
        price="2.000.000"
        name="Bayam Cabut"
        date="Jun 12, 14:30"
        status="Canceled"
      />
      <ItemListFood
        rating={3}
        image={FoodDummy1}
        onPress={() => navigation.navigate('OrderDetail')}
        type="past-order"
        items={3}
        price="2.000.000"
        name="Bayam Cabut"
        date="Jun 12, 14:30"
        status="Canceled"
      />
      <ItemListFood
        rating={3}
        image={FoodDummy2}
        onPress={() => navigation.navigate('OrderDetail')}
        type="past-order"
        items={3}
        price="2.000.000"
        name="Bayam Cabut"
        date="Jun 12, 14:30"
      />
      <ItemListFood
        rating={3}
        image={FoodDummy5}
        onPress={() => navigation.navigate('OrderDetail')}
        type="past-order"
        items={3}
        price="2.000.000"
        name="Bayam Cabut"
        date="Jun 12, 14:30"
        status="Canceled"
      />
    </View>
  );
};

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

const renderScene = SceneMap({
  1: InProgres,
  2: Pastorder,
});

const OrderTabSection = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Order'},
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

export default OrderTabSection;

const styles = StyleSheet.create({});
