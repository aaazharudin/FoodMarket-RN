import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ProfileDummy} from '../../assets';
import {ProfileTabSection} from '../../components/molecules';

const Profile = () => {
  return (
    <View style={styles.page}>
      <View style={styles.profiledetail}>
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <Image source={ProfileDummy} style={styles.photoContainer} />
          </View>
        </View>
        <Text style={styles.name}>Aziz Azharudin</Text>
        <Text style={styles.email}>udinese@gmail.com</Text>
      </View>
      <View style={styles.conten}>
        <ProfileTabSection />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {flex: 1},
  conten: {flex: 1, marginTop: 24},
  name: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
    textAlign: 'center',
  },
  email: {
    fontSize: 13,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
  photo: {alignItems: 'center', marginBottom: 16, marginTop: 26},
  profiledetail: {backgroundColor: 'white', paddingBottom: 26},
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0f0f0',
    padding: 24,
  },
});
