import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IlSuccessOrder} from '../../assets';
import {Button, Gap} from '../../components';

const SuccessOrder = ({navigation}) => {
  return (
    <View style={styles.pages}>
      <IlSuccessOrder />
      <Gap height={30} />
      <Text style={styles.title}>You've Made Order</Text>
      <Gap height={6} />
      <Text style={styles.subtitle}>Just Stay at Home While We are</Text>
      <Text style={styles.subtitle}>Prepering your Best Foods</Text>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button
          text="Order Other Foods"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
      <Gap height={12} />
      <View style={styles.buttonContainer}>
        <Button
          text="View My Order"
          onPress={() => navigation.replace('MainApp', {screen: 'Order'})}
          color="#8D92A3"
          textColor="white"
        />
      </View>
    </View>
  );
};

export default SuccessOrder;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {fontSize: 20, fontFamily: 'Poppins-Regular', color: '#020202'},
  subtitle: {fontSize: 14, fontFamily: 'Poppins-Light', color: '#8D92A3'},
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 80,
  },
});
