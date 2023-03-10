import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {FoodDummy5, IcBackWhite} from '../../assets';
import {Button, Counter, Rating} from '../../components';

const FoodDetail = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ImageBackground source={FoodDummy5} style={styles.cover}>
        <TouchableOpacity style={styles.back}>
          <IcBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.title}>Kangkung</Text>
              <Rating />
            </View>
            <Counter />
          </View>
          <Text style={styles.description}>
            Kangkung (Ipomoea spp.) merupakan salah satu sayuran daun yang
            paling populer di Asia Tenggara. Kangkung dikenal juga dengan 'swamp
            cabbage', 'water convolvulus', dan 'water spinach'. Tanaman kangkung
            berbunga dengan warna yang beragam dari putih sampai merah muda, dan
            batangnya dari warna hijau sampai ungu.
          </Text>
          <Text style={styles.label}> Olahan makanan </Text>
          <Text style={styles.description}>
            Kangkung Sambal Tempe, Tumis Kangkung Baso, Kangkung Teri Belacan,
            Cah Kangkung Udang
          </Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.labelTotal}>Total Price</Text>
            <Text style={styles.priceTotal}>Idr 4.000</Text>
          </View>
          <View style={styles.button}>
            <Button
              text="Order Now"
              textColor="#f4f3f1"
              onPress={() => navigation.navigate('OrderSummary')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  page: {flex: 1},
  cover: {height: 330, paddingTop: 26, paddingLeft: 22},
  back: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: -40,
    paddingTop: 26,
    paddingHorizontal: 16,
    flex: 1,
  },
  description: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
    marginBottom: 16,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  title: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202'},
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 4,
  },
  mainContent: {flex: 1},
  footer: {flexDirection: 'row', paddingVertical: 16, alignItems: 'center'},
  button: {width: 163},
  priceContainer: {flex: 1},
  labelTotal: {fontFamily: 'Poppins-Regular', fontSize: 13, color: '#8D92A3'},
  priceTotal: {fontSize: 18, fontFamily: 'Poppins-Regular', color: '#020202'},
});
