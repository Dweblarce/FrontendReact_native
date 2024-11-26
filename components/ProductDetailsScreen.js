import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { ProductContext } from './context/ProductContext';

const ProductDetailsScreen = () => {
  const { products } = useContext(ProductContext);
  const route = useRoute();
  const { productId } = route.params;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const findProduct = () => {
      const foundProduct = products.find(item => item.id === productId);
      setProduct(foundProduct);
      setLoading(false);
    };

    // Solo buscamos el producto si ya tenemos los productos cargados
    if (products.length > 0) {
      findProduct();
    }
  }, [products, productId]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <View>
          <Image source={{ uri: product.image }} style={{ width: 200, height: 200 }} />
          <Text>{product.title}</Text>
          <Text>{product.description}</Text>
          <Text>${product.price}</Text>
        </View>
      )}
    </View>
  );
};

export default ProductDetailsScreen;