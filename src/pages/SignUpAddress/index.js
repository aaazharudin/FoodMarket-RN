import axios from 'axios';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Gap, Header, Select, TextInput} from '../../components';
import {useForm, showMessage} from '../../utils';

const SignUpAddress = ({navigation}) => {
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: 'Yogyakarta',
  });
  const dispatch = useDispatch();
  const {registerReducer, photoReducer} = useSelector(state => state);

  const onSubmit = () => {
    console.log('form: ', form);
    const data = {
      ...form,
      ...registerReducer,
    };
    console.log('data Register: ', data);
    dispatch({type: 'SET_LOADING', value: true});
    axios
      .post('http://foodmarket-backend.buildwithangga.id/api/register', data)
      .then(res => {
        console.log('data success: ', res.data);
        if (photoReducer.isUploadPhoto) {
          const photoForUpload = new FormData();
          photoForUpload.append('file', photoReducer);
          axios
            .post(
              'http://foodmarket-backend.buildwithangga.id/api/user/photo',
              photoForUpload, // Replace dataPhoto with photoForUpload
              {
                headers: {
                  Authorization: `${res.data.data.token_type} ${res.data.data.access_token}`,
                  'Content-Type': 'multipart/form-data',
                },
              },
            )
            .then(resUpload => {
              console.log('success upload: ', resUpload);
            })
            .catch(err => {
              console.log('error: ', err);
            });
        }
        dispatch({type: 'SET_LOADING', value: false});
        showMessage('Register Success', 'success');
        navigation.replace('SuccessSignUp');
      })
      .catch(err => {
        //console.log('sign up error: ', err.response.data.message);
        dispatch({type: 'SET_LOADING', value: false});
        showMessage(err?.response?.data?.message);
      });
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <Header
          title="Address"
          subTitle="Make is your valid"
          onBack={() => {}}
        />
        <View style={styles.container}>
          <TextInput
            label="Phone No."
            placeholder="Type your number"
            value={form.phoneNumber}
            onChangeText={value => setForm('phoneNumber', value)}
          />
          <Gap height={16} />
          <TextInput
            label="Addres"
            placeholder="Type your addres"
            value={form.address}
            onChangeText={value => setForm('address', value)}
          />
          <Gap height={16} />
          <TextInput
            label="House No."
            placeholder="Type Your House Number"
            value={form.houseNumber}
            onChangeText={value => setForm('houseNumber', value)}
          />
          <Gap height={16} />
          <Select
            label="city"
            value={form.city}
            onSelectChange={value => setForm('city', value)}
          />
          <Gap height={24} />
          <Button text="Sign Up Now" onPress={onSubmit} />
          <Gap height={24} />
        </View>
      </View>
    </ScrollView>
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
