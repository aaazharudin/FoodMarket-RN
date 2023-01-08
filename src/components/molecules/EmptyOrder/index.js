import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap} from '../../atoms';
import {IlEmptyOrder} from '../../../assets';
import {useNavigation} from '@react-navigation/native';

const EmptyOrder = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.pages}>
      <IlEmptyOrder />
      <Gap height={30} />
      <Text style={styles.title}>Yeay! Completed</Text>
      <Gap height={6} />
      <Text style={styles.subtitle}>Sekarang kamu bisa order</Text>
      <Text style={styles.subtitle}> makanan untuk self-reward</Text>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button
          text="finds food"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
    </View>
  );
};

export default EmptyOrder;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {fontSize: 20, fontFamily: 'Poppins-Regular', color: '#020202'},
  subtitle: {fontSize: 14, fontFamily: 'Poppins-Light', color: '#8D92A3'},
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 80,
  },
});
