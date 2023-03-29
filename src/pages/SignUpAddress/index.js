import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Gap, Header, Select, TextInput} from '../../components';
import {setLoading, signUpAction} from '../../redux/action';
import {useForm} from '../../utils';

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
    dispatch(setLoading(true));
    dispatch(signUpAction(data, photoReducer, navigation));
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
