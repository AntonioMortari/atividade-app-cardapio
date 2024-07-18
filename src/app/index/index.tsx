import { Image, Text, View, ScrollView, SectionList } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { Separator } from '@/components/Separator';
import { Option } from '@/components/Option';

import { MENU } from '@/data/products';
import { useRef, useState } from 'react';
import { styles } from './styles';
import { ProductItem } from '@/components/ProductItem';
import { Header } from '@/components/Header';

const Index = () => {

    const [categorySelected, setCategorySelected] = useState<string>(MENU[0].title);

    const sectionListRef = useRef<SectionList>(null);

    const handleSetCategorySelected = (newCategorySelected: string) => {
        setCategorySelected(newCategorySelected);

        const sectionIndex = MENU.findIndex(section => section.title === newCategorySelected);

        if (sectionListRef.current) {
            sectionListRef.current.scrollToLocation({
                animated: true,
                sectionIndex,
                itemIndex: 0
            });
        }
    }

    return (
        <View style={styles.container}>

            {/* <View style={styles.header}>

                <View style={styles.containerImage}>
                    <Image
                        source={require('@/images/logo.png')}
                        style={styles.image}
                    />

                    <Text style={styles.title}>Faça seu pedido</Text>
                </View>

                <Feather name="shopping-bag" size={24} color="white" />
            </View> */}

            <Header
                title='Faça seu pedido'
                showCart
            />

            <Separator />

            {/* options */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.containerOptions}
            >
                {MENU.map((item, index) => (
                    <Option
                        name={item.title}
                        key={index}
                        isSelected={item.title == categorySelected}
                        onPress={() => handleSetCategorySelected(item.title)}
                    />
                ))}

            </ScrollView>

            {/* products */}
            <SectionList
                ref={sectionListRef}
                sections={MENU}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <ProductItem data={item} />
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.sectionTitle}>{title}</Text>
                )}
            />
        </View>
    );
}

export default Index;