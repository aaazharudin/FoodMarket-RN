import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, TextInput, Gap, Button, Select} from '../../components';

const SignUpAddress = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Address" subTitle="Make is your valid" onBack={() => {}} />
      <View style={styles.container}>
        <TextInput label="Phone No." placeholder="Type your number" />
        <Gap height={16} />
        <TextInput label="Addres" placeholder="Type your addres" />
        <Gap height={16} />
        <TextInput label="House No." placeholder="Type Your House Number" />
        <Gap height={16} />
        <Select label="city" />
        <Gap height={24} />
        <Button
          text="Sign Up Now"
          onPress={() => navigation.replace('SuccessSignUp')}
        />
        <Gap height={24} />
      </View>
    </View>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
