import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IcNext} from '../../../assets';

//Untuk Menu Yang ada di Profile
const ItemListMenu = ({text}) => {
  return (
    <View style={styles.icnext}>
      <Text style={styles.text}>{text}</Text>
      <IcNext />
    </View>
  );
};

export default ItemListMenu;

const styles = StyleSheet.create({
  icnext: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 7,
  },
  text: {fontFamily: 'Poppins-Regular', color: '#020202'},
});
