import {View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { Header } from '@/components/Header';
import { Separator } from '@/components/Separator';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';

import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';

const Cart = () => {
    return (
        <Container>

            <Header
                title='Seu Carrinho'
                showCart={false}
            />

            <Separator />

            <View style={styles.containerItens}>
                {/* itens */}
            </View>

            <Separator />

            <Text>Total: <Text style={styles.price}></Text></Text>

            <View style={styles.containerButtons}>
                    <Button style={styles.button}>
                        <Text   >Enviar Pedido</Text>
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