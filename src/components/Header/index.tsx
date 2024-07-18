import { Image, Pressable, Text, View } from 'react-native';
import { styles } from './styles';

import { Feather } from '@expo/vector-icons';
import { Link, router } from 'expo-router';

interface IHeaderProps {
    title: string;
    showCart: boolean;
}

const Header = ({ showCart, title }: IHeaderProps) => {

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
                <Pressable onPress={() => router.navigate('cart')}>
                    <Feather name="shopping-bag" size={24} color="white" />
                </Pressable>
            )}
        </View>
    );
}

export { Header };