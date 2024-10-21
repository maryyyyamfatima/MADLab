import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
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
  // Function to render category buttons
  const renderCategoryButton = (name: string, icon: string) => (
    <TouchableOpacity style={styles.categoryButton}>
      <Image source={{ uri: icon }} style={styles.icon} />
      <ThemedText style={styles.categoryButtonText}>{name}</ThemedText>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Category Buttons */}
      <View style={styles.categoryContainer}>
        {renderCategoryButton("Fruits", "https://img.icons8.com/ios-filled/50/000000/apple.png")}
        {renderCategoryButton("Vegetables", "https://img.icons8.com/ios-filled/50/000000/carrot.png")}
        {renderCategoryButton("Bakery", "https://img.icons8.com/ios-filled/50/000000/croissant.png")}
        {renderCategoryButton("Milk", "https://img.icons8.com/ios-filled/50/000000/milk-carton.png")}
      </View>

      {/* Product List */}
      <FlatList
        data={products}
        numColumns={2} // Display products in a 2-column grid layout
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View 
            style={[
              styles.card,
              index % 2 !== 0 ? styles.staggeredCard : null, // Add top padding to odd-indexed items (second column)
            ]}
          >
            <Image
              source={{ uri: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg' }} // Placeholder image
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  categoryButton: {
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 4,
  },
  categoryButtonText: {
    fontSize: 14,
    color: '#333',
  },
  card: {
    flex: 1,
    margin: 8,
    borderRadius: 20,
    backgroundColor: '#F8F9FA',
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  staggeredCard: {
    marginTop: 40, // Increase the top margin for a more pronounced staggered effect
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 12,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  productName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  category: {
    fontSize: 14,
    color: '#777',
  },
  stock: {
    marginTop: 6,
    fontSize: 13,
  },
  inStock: {
    color: 'green',
  },
  outOfStock: {
    color: 'red',
  },
});

export default ListDisplay;
