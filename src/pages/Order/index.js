import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {EmptyOrder, Header, OrderTabSection} from '../../components';

const Order = () => {
  const [isEmpty] = useState(false);
  return (
    <View style={styles.page}>
      {isEmpty ? (
        <EmptyOrder />
      ) : (
        <View style={styles.content}>
          <Header title="Yours Order" subTitle="Wait For The Best Meal" />
          <View style={styles.TabContainer}>
            <OrderTabSection />
          </View>
        </View>
      )}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  page: {flex: 1},
  content: {flex: 1},
  TabContainer: {flex: 1, marginTop: 24},
});
