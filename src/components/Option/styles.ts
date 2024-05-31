import { theme } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.tertiary,
        padding: 10,
        borderRadius: 6,
        height: 40,
        marginRight: 10
    },
    text: {
        color: theme.colors.white,
        fontSize: theme.fonts.size.body.md
    },
    selected: {
        borderColor: theme.colors.secondary,
        borderWidth: 1,
        borderStyle: 'solid'
    }
});

export { styles }