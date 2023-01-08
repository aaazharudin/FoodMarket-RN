import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import Rating from '../Rating';
import {TouchableOpacity} from 'react-native-gesture-handler';

const FoodCard = ({image}) => {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={styles.conten}>
          <Text style={styles.text}>Sawi Hijau</Text>
          <Rating />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    overflow: 'hidden',
    marginRight: 24,
    marginBottom: 10,
  },
  image: {width: 200, height: 140, resizeMode: 'cover'},
  conten: {padding: 12},
  text: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#041107'},
});
