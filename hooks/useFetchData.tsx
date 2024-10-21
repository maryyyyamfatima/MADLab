// hooks/useFetchData.tsx
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { API_URL } from '@/src/constants/api';

type ProductData = {
  id: number;
  category: string;
  name: string;
  inStock: boolean;
};

const useFetchData = () => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState(true);
  const STORAGE_KEY = '@product_data';

  // Fetch data from API
  const fetchProductData = async () => {
    try {
      const response = await fetch(API_URL);
      const data: ProductData[] = await response.json();
      setProducts(data);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error('Error fetching product data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Load data from AsyncStorage
  const loadStoredData = async () => {
    try {
      const storedData = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedData) {
        setProducts(JSON.parse(storedData));
      } else {
        fetchProductData();
      }
    } catch (error) {
      console.error('Error loading stored data:', error);
    }
  };

  useEffect(() => {
    loadStoredData();
  }, []);

  return { products, loading, refresh: fetchProductData };
};

export default useFetchData;
