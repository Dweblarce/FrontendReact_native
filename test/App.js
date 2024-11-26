import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider, ProductProvider } from './context';
import LoginScreen from './components/LoginScreen';
import ProductListScreen from './components/ProductListScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="ProductList" component={ProductListScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;