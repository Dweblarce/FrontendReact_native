import React, { useContext } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ProductContext } from './context/ProductContext';

const ProductListScreen = () => {
  const navigation = useNavigation();
  const { products } = useContext(ProductContext);

  const renderItem = ({ item }) => (
    <View style={{ flex: 1, alignItems: 'center', margin: 10 }}>
      <Image source={{ uri: item.image }} style={{ width: 200, height: 200 }} />
      <Text>{item.title}</Text>
      <Text>${item.price}</Text>
      <Button title="Ver Detalles" onPress={() => navigation.navigate('ProductDetails', { productId: item.id })} />
    </View>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default ProductListScreen;