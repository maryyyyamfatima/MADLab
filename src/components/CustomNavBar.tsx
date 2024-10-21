// src/components/CustomNavBar.tsx
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router'; // Import Link from expo-router
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';

const CustomNavBar: React.FC = () => {
  return (
    <ThemedView style={styles.navbar}>
      <ThemedText style={styles.title}>My App</ThemedText>
      <Link href="/search" asChild>
        <TouchableOpacity>
          <ThemedText style={styles.searchIcon}>🔍</ThemedText>
        </TouchableOpacity>
      </Link>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginTop: 20,
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  searchIcon: {
    fontSize: 24,
    color: '#fff',
    padding: 2,
  },
});

export default CustomNavBar;
