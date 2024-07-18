import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import { styles } from './styles';
import { Header } from '@/components/Header';
import { Separator } from '@/components/Separator';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';

import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PRODUCTS } from '@/data/products';
import { ProductItem } from '@/components/ProductItem';
import { theme } from '@/theme';

const Cart = () => {
    const [productIds, setProductIds] = useState<string[]>([]);
    const [alertMessage, setAlertMessage] = useState<string>('');
    const [total, setTotal] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        setIsLoading(true);
        const getProducts = async () => {
            const cartIdsString = await AsyncStorage.getItem('@Cart');

            if (cartIdsString) {
                const cartIds = JSON.parse(cartIdsString);
                setProductIds(cartIds);
                return;
            }

            setAlertMessage('Você ainda não adicionou nenhum produto no carrinho');
            setIsLoading(false);
        }

        getProducts();
    }, []);

    useEffect(() => {
        const calcularTotal = () => {
            let totalResult = 0;

            productIds.map(productId => {
                const product = PRODUCTS.filter(product => product.id === productId)[0];
                totalResult += product.price;
            });

            setTotal(totalResult);
        }

        calcularTotal();
    }, [productIds]);

    if(isLoading){
        <ActivityIndicator color={theme.colors.secondary} animating />
    }

    return (
        <Container>

            <Header
                title='Seu Carrinho'
                showCart={false}
            />

            <Separator />

            <View style={styles.containerItens}>
                {productIds.map(productId => {
                    const product = PRODUCTS.filter(product => product.id === productId)[0]

                    return (
                        <ProductItem key={product.id} data={product} />
                    )
                })}
            </View>

            <Separator />

            <View style={styles.containerTotal}>
                <Text style={styles.textTotal}>Total: </Text>
                <Text style={styles.total}>R${total.toFixed(2)}</Text>
            </View>

            <View style={styles.containerButtons}>
                <Button style={styles.button}>
                    <Text>Enviar Pedido</Text>
                    <Feather name="arrow-right-circle" size={24} color="black" />
                </Button>

                <TouchableOpacity onPress={() => router.back()}>
                    <Text style={styles.textBackButton}>Voltar ao Cardápio</Text>
                </TouchableOpacity>
            </View>

        </Container>
    );
}

export default Cart;