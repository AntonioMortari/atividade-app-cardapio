import { ProductProps } from '@/data/products'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { router } from 'expo-router';

interface IProductItemProps {
    data: ProductProps;
}

const ProductItem = ({ data }: IProductItemProps) => {
    return (
        <TouchableOpacity
            style={styles.container}
            key={data.id}
            onPress={() => router.navigate(`products/${data.id}`)}
        >
            <Image
                source={data.thumbnail}
                style={styles.thumbnail}
            />

            <View style={styles.containerText}>
                <Text style={styles.title}>{data.title}</Text>

                <Text style={styles.description}>{data.description}</Text>
            </View>
        </TouchableOpacity>
    );
}

export { ProductItem };