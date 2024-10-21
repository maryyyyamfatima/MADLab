import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { ThemedView } from '@/src/components/ThemedView';
import useFetchData from '@/hooks/useFetchData';
import ListDisplay from '@/src/components/ListDisplay';
import CustomNavBar from '@/src/components/CustomNavBar';

export default function HomeScreen() {
  const { products, loading, refresh } = useFetchData();

  return (
    <ThemedView style={styles.container}>
      <CustomNavBar />
      
        <ListDisplay products={products} />
      
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5F5F5',
  },
});

