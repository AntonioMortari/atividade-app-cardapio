import { Image, Pressable, Text, View } from 'react-native';
import { styles } from './styles';

import { Feather } from '@expo/vector-icons';
import { router, useFocusEffect } from 'expo-router';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IHeaderProps {
    title: string;
    showCart: boolean;
}

const Header = ({ showCart, title }: IHeaderProps) => {
    const [productIds, setProductIds] = useState<string[]>([]);

    useFocusEffect(() => {
        const getProducts = async () => {
            const cartIdsString = await AsyncStorage.getItem('@Cart');

            if (cartIdsString) {
                const cartIds = JSON.parse(cartIdsString);
                setProductIds(cartIds);
                return;
            }

            setProductIds([]);
        }

        getProducts();
    });

    return (
        <View style={styles.header}>

            <View style={styles.containerImage}>
                <Image
                    source={require('@/images/logo.png')}
                    style={styles.image}
                />

                <Text style={styles.title}>{title}</Text>
            </View>

            {showCart && (
                <Pressable onPress={() => router.navigate('cart')} style={styles.cartContainer}>
                    {productIds.length > 0 && (
                        <Text style={styles.numberCart}>
                            {productIds.length}
                        </Text>
                    )}
                    <Feather name="shopping-bag" size={24} color="white" />
                </Pressable>
            )}
        </View>
    );
}

export { Header };