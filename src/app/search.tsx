// src/app/search.tsx
import React, { useState } from 'react';
import { StyleSheet, TextInput, FlatList } from 'react-native';
import { ThemedView } from '../components/ThemedView';
import { ThemedText } from '../components/ThemedText';
import useFetchData from '@/hooks/useFetchData'; // Import the hook to get Bitcoin prices

const SearchPage: React.FC = () => {
  const { prices } = useFetchData(); // Get the Bitcoin prices
  const [searchTerm, setSearchTerm] = useState('');

  // Filter the prices based on the search term
  const filteredPrices = prices.filter(price =>
    price.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.inputContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for Bitcoin prices..."
          placeholderTextColor="#888" // Customize the placeholder text color
          value={searchTerm}
          onChangeText={setSearchTerm} // Update searchTerm on input change
        />
      </ThemedView>

      {searchTerm.length > 0 ? (
        filteredPrices.length > 0 ? (
          <FlatList
            data={filteredPrices}
            keyExtractor={(item) => item.code}
            renderItem={({ item }) => (
              <ThemedText style={styles.priceItem}>
                {item.code}: {item.rate} {/* Display only code and rate */}
              </ThemedText>
            )}
          />
        ) : (
          <ThemedText>No results found.</ThemedText>
        )
      ) : (
        <ThemedText>Please enter a search term.</ThemedText>
      )}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  priceItem: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default SearchPage;
