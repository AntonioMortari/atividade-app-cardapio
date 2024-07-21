import { View, Text, TouchableOpacity, ActivityIndicator, Pressable, Alert, ScrollView } from 'react-native';

import { styles } from './styles';
import { Header } from '@/components/Header';
import { Separator } from '@/components/Separator';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PRODUCTS } from '@/data/products';
import { ProductItem } from '@/components/ProductItem';
import { theme } from '@/theme';
import { Input } from '@/components/Input';

import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';

const Cart = () => {
    const [productIds, setProductIds] = useState<string[]>([]);

    const [alertMessage, setAlertMessage] = useState<string>('');
    const [total, setTotal] = useState<number>(0);

    const [reload, setReload] = useState<boolean>(false);
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
    }, [reload]);

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

    const clearCart = async () => {
        Alert.alert(
            'Confirmação',
            'Tem certeza que deseja excluir os itens do carrinho?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Sim',
                    onPress: async () => {
                        await AsyncStorage.clear();
                        router.back();
                        setReload(!reload);
                    },
                },
            ],
            { cancelable: false }
        );
    }

    if (isLoading) {
        <ActivityIndicator color={theme.colors.secondary} animating />
    }

    return (
        <Container>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Header
                    title='Seu Carrinho'
                    showCart={false}
                />


                <Pressable onPress={clearCart}>
                    <Feather name="trash-2" size={24} color={theme.colors.gray} />
                </Pressable>
            </View>

            <Separator />

            {productIds.length > 0 && (
                <ScrollView indicatorStyle='white' style={styles.containerItens}>
                    {productIds.map(productId => {
                        const product = PRODUCTS.filter(product => product.id === productId)[0]

                        return (
                            <ProductItem key={product.id} data={product} />
                        )
                    })}
                </ScrollView>

            )}


            <Separator />

            {productIds.length === 0 && (
                <Text style={styles.alertMessage}>{alertMessage}</Text>
            )}

            {productIds.length > 0 && (
                <>
                    <View style={styles.containerTotal}>
                        <Text style={styles.textTotal}>Total: </Text>
                        <Text style={styles.total}>R${total.toFixed(2)}</Text>
                    </View>

                    <View>
                        <Input
                            placeholder='Informe o endereço de entrega com rua, bairro, CEP, número e complemento...'
                            numberOfLines={5}
                        />
                    </View>
                </>

            )}


            <View style={styles.containerButtons}>
                {productIds.length > 0 && (
                    <Button style={styles.button}>
                        <Text>Enviar Pedido</Text>
                        <Feather name="arrow-right-circle" size={24} color="black" />
                    </Button>
                )}

                <TouchableOpacity onPress={() => router.back()}>
                    <Text style={styles.textBackButton}>Voltar ao Cardápio</Text>
                </TouchableOpacity>
            </View>

        </Container>
    );
}

export default Cart;