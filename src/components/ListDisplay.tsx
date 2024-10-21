import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { ThemedText } from '@/src/components/ThemedText';

type ProductData = {
  id: number;
  category: string;
  name: string;
  inStock: boolean;
};

type Props = {
  products: ProductData[];
};

const ListDisplay: React.FC<Props> = ({ products }) => {
  return (
    <FlatList
      data={products}
      numColumns={2} // Display products in a 2-column grid layout
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item, index }) => (
        <View 
          style={[
            styles.card,
            index % 2 === 0 ? styles.largeCard : styles.smallCard // Alternating size effect
          ]}
        >
          <Image
            source={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Ffood%2F&psig=AOvVaw3Jyn7riDxn_g8HMCyD7_i_&ust=1729592427034000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOjM2pKgn4kDFQAAAAAdAAAAABAE' }} // Placeholder image
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <ThemedText style={styles.productName}>{item.name}</ThemedText>
            <ThemedText style={styles.category}>{item.category}</ThemedText>
            <ThemedText
              style={[styles.stock, item.inStock ? styles.inStock : styles.outOfStock]}
            >
              {item.inStock ? 'In Stock' : 'Out of Stock'}
            </ThemedText>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 10,
    borderRadius: 15, // Rounded corners
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
  },
  largeCard: {
    height: 250, // Larger card height
  },
  smallCard: {
    height: 200, // Smaller card height
  },
  image: {
    width: '100%',
    height: 120, // Constrain image height
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 10, // Add padding to text container
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5, // Space between text items
  },
  category: {
    fontSize: 14,
    color: '#666',
  },
  stock: {
    fontSize: 12,
    marginTop: 5,
  },
  inStock: {
    color: 'green',
  },
  outOfStock: {
    color: 'red',
  },
});

export default ListDisplay;
