import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Rating from '../Rating';

const ItemListFood = ({
  image,
  onPress,
  items,
  rating,
  type,
  price,
  name,
  date,
  status,
}) => {
  const renderContent = () => {
    switch (type) {
      case 'product':
        // Item List Produk yang seperti Homepage
        return (
          <>
            <View style={styles.conten}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.price}>IDR.{price}</Text>
            </View>
            <Rating rating={rating} />
          </>
        );
      case 'order-summary':
        // item Order Summary
        return (
          <>
            <View style={styles.conten}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.price}>IDR.{price}</Text>
            </View>
            <Text style={styles.items}>{items} items</Text>
          </>
        );
      case 'in-progress':
        // item in Progress
        return (
          <>
            <View style={styles.conten}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.price}>
                {items} items . IDR {price}
              </Text>
            </View>
          </>
        );
      case 'past-order':
        // item past order
        return (
          <>
            <View style={styles.conten}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.price}>
                {items} items . IDR {price}
              </Text>
            </View>
            <View>
              <Text style={styles.date}> {date} </Text>
              <Text style={styles.states}> {status} </Text>
            </View>
          </>
        );
      default:
        // item Produk
        return (
          <>
            <View style={styles.conten}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.price}>IDR.{price}</Text>
            </View>
            <Rating />
          </>
        );
    }
  };
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        {renderContent()}
      </View>
    </TouchableOpacity>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 8,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12,
  },
  conten: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12,
    flex: 1,
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#020202',
  },
  price: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#8D92A3',
  },
  items: {fontSize: 13, fontFamily: 'Poppins-Regular', color: '#8D92A3'},
  date: {fontSize: 10, fontFamily: 'Poppins-Regular', color: '#8D92A3'},
  states: {fontSize: 10, fontFamily: 'Poppins-Regular', color: '#D9435E'},
});
