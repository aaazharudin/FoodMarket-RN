import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Button, Gap, Header, TextInput} from '../../components';
import {useForm} from '../../utils';
import Axios from 'axios';

const SignIn = ({navigation}) => {
  // menggunakan local state
  //const [email, setEmail] = useState('');
  //const [Password, setPassword] = useState('');

  //menggunakan custom HOOk
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const onSubmit = () => {
    console.log('form: ', form);
    Axios.post('http://foodmarket-backend.buildwithangga.id/api/login', form)
      .then(res => {
        console.log('succes', res);
      })
      .catch(err => {
        console.log('error', err);
      });
  };

  return (
    <View style={styles.page}>
      <Header title="Sign In" subTitle="Find Your best ever meal" />
      <View style={styles.container}>
        <TextInput
          label="Email Addres"
          placeholder="Type your emaol addres"
          value={form.email}
          onChangeText={value => setForm('email', value)}
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          placeholder="Type Your Password"
          value={form.Password}
          onChangeText={value => setForm('password', value)}
          secureTextEntry
        />
        <Gap height={24} />
        <Button text="Sign In" onPress={onSubmit} />
        <Gap height={16} />
        <Button
          text="Create New Account"
          color="#8D92A3"
          textColor="white"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

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
