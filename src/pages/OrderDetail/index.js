import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Header, ItemListFood, ItemsValue, Gap} from '../../components';
import {FoodDummy2} from '../../assets';

const OrderDetail = ({navigation}) => {
  return (
    <ScrollView>
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
        <ItemsValue label="Bayam Cabut" value="Idr.25.000.000" />
        <ItemsValue label="Driver" value="Idr. 50.000" />
        <ItemsValue label="Tax 10%" value="Idr. 25.000" valueColor="red" />
        <ItemsValue
          label="Total Price"
          value="Idr. 25.075.000"
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
      <View style={styles.content}>
        <Text style={styles.label}> Order Status; </Text>
        <ItemsValue label="#FM298769" value="Paid" valueColor="#1ABC9C" />
      </View>
      <View style={styles.button}>
        <Button
          text="Cancel My Order"
          onPress={() => navigation.replace('SuccessOrder')}
          color="#D9435E"
          textColor="white"
        />
      </View>
      <Gap height={40} />
    </ScrollView>
  );
};

export default OrderDetail;

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
