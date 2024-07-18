import { Children, ReactNode } from 'react';
import { ScrollView, View } from 'react-native';
import { styles } from './styles';

interface IContainerProps {
    children: ReactNode;
}

const Container = ({ children }: IContainerProps) => {
    return (
        <ScrollView style={styles.container}>
            {children}
        </ScrollView>
    );
}

export { Container };