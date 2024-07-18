import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View, ScrollView } from 'react-native';

import { MENU, ProductProps } from '@/data/products';
import { AntDesign } from '@expo/vector-icons';
import { Button } from '@/components/Button';
import { styles } from './styles';


const ProductDetails = () => {
    const { id } = useLocalSearchParams();
    const [dataProduct, setDataProduct] = useState<ProductProps>({} as ProductProps);

    const getProductById = (id: string) => {
        for (const category of MENU) {
            const findProduct = category.data.find(product => product.id === id);

            if (findProduct) {
                return findProduct;
            }
        }
    }

    useEffect(() => {
        if (!id) {
            return router.back();
        }


        const product = getProductById(id.toString());

        if (product) setDataProduct(product);

    }, []);


    const formatNumber = (number: number) => {
        return number?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    return (
        <ScrollView style={styles.container}>

            <Image
                source={dataProduct.cover}
                style={styles.image}
            />

            <View style={styles.containerContent}>
                <Text style={styles.title}>{dataProduct.title}</Text>

                <Text style={styles.price}>{formatNumber(dataProduct.price)}</Text>

                <Text style={styles.description}>{dataProduct.description}</Text>

                <View style={styles.containerIngredientsList}>
                    {dataProduct.ingredients?.map((ingredient, index) => (
                        <View style={styles.button} key={index}>
                            <View style={styles.circle}></View>
                            <Text style={styles.ingredientText}>{ingredient}</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.containerButtons}>
                    <Button style={styles.button}>
                        <AntDesign name="pluscircleo" size={24} color="black" />
                        <Text>Adicionar ao Pedido</Text>
                    </Button>

                    <TouchableOpacity onPress={() => router.back()}>
                        <Text style={styles.textBackButton}>Voltar ao Cardápio</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}


export default ProductDetails;