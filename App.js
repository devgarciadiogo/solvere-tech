import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CartProvider } from './CartContext'; // Altere para o caminho correto, se necessário
import AppNavigator from './AppNavigator'; // Corrigido para o caminho correto

const App = () => {
    return (
        <CartProvider>
            <NavigationContainer>
                <AppNavigator />
            </NavigationContainer>
        </CartProvider>
    );
};

export default App;
