import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';

const DATA = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
  { id: '4', title: 'Item 4' },
  { id: '5', title: 'Item 5' },
];

const App = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState(DATA);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setData(DATA);
      setRefreshing(false);
    }, 1500); // 
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <TouchableOpacity>
      <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );

  const Header = () => (
    <View style={styles.header}>
      <Text style={styles.headerText}>Header</Text>
    </View>
  );

  const Footer = () => (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Footer</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={Header}
        ListFooterComponent={Footer}
        contentContainerStyle={styles.flatList}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        onRefresh={onRefresh} 
        refreshing={refreshing} 
      />
      {refreshing && (
        <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
container: {
    marginTop:30,
    flex: 1,
    padding: 20, 
  },
  header: {
    backgroundColor: 'green',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
  },
  footer: {
    marginTop:20,
    backgroundColor: 'darkgray',
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 20,
  },
  item: {
    marginTop:10,
    padding: 20,
    backgroundColor: 'skyblue', 
    borderRadius: 5, 
  },
  title: {
    fontSize: 18,
  },
  loadingIndicator: {
    position: 'absolute',
    top: '50%',
    left: '60%',
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
});

export default App;