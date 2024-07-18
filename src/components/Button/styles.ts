import { theme } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.secondary,
        padding: 10,
        borderRadius: 8,
        width: '100%',
        justifyContent: 'center'
    }
});

export { styles }