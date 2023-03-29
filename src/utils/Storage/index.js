import AsyncStorage from 'react-native';
import {showMessage} from '../ShowMessage';

export const storeData = async (storageKey, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storageKey, jsonValue);
  } catch (e) {
    showMessage('Gagal Menyimpan di LocalStorage !!!');
  }
};

export const getData = async storageKey => {
  try {
    const value = await AsyncStorage.getItem(storageKey);
    return value != null ? JSON.parse(value) : null;
  } catch (e) {
    // error reading value
    showMessage('gagal mengambil data dari localstorage');
  }
};
