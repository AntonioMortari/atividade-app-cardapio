import { theme } from '@/theme';
import { StyleSheet, View } from 'react-native';


const Separator = () => {
    return (
        <View style={styles.separator} />
    );
}

const styles = StyleSheet.create({
    separator: {
        height: 1,
        borderRadius: 2,
        backgroundColor: theme.colors.separator
    }
});

export { Separator };