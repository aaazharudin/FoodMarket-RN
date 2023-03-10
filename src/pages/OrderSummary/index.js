import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Header, ItemListFood, ItemsValue} from '../../components';
import {FoodDummy2} from '../../assets';

const OrderSummary = ({navigation}) => {
  return (
    <View>
      <Header
        title="Payment"
        subTitle="You deserve better meal"
        onBack={() => {}}
      />
      <View style={styles.content}>
        <Text style={styles.label}>Item Ordered</Text>
        <ItemListFood
          type="order-summary"
          name="Bayam Cabut"
          price="200.000"
          image={FoodDummy2}
          items={666}
        />
        <Text> Detail Transaksi </Text>
        <ItemsValue label="Bayam Cabut" value="Idr.25.000" />
        <ItemsValue label="Driver" value="Idr. 3.000" />
        <ItemsValue label="Tax 10%" value="Idr. 500" valueColor="red" />
        <ItemsValue
          label="Total Price"
          value="Idr. 28.500"
          valueColor="#1ABC9C"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}> Deliver to; </Text>
        <ItemsValue label="Name" value="Aziz Azharudin" />
        <ItemsValue label="Phone No." value="081367710987" />
        <ItemsValue label="Address" value="Taman Palagan Asri " />
        <ItemsValue label="House No." value="Jalan Palagan Km 10, Sleman" />
        <ItemsValue label="City" value="Yogyakarta" />
      </View>
      <View style={styles.button}>
        <Button
          text="checkout now"
          textColor="#f4f3f1"
          onPress={() => navigation.replace('SuccessOrder')}
        />
      </View>
    </View>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24,
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#020202',
    marginBottom: 8,
  },
  button: {paddingHorizontal: 24, marginTop: 24},
});
