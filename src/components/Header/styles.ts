import { theme } from '@/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    containerImage: {
        gap: 5
    },
    image: {
        width: 374 / 3,
        height: 72 / 3,
        resizeMode: 'contain'
    },
    title: {
        color: theme.colors.white,
        fontWeight: 'semibold',
        fontSize: theme.fonts.size.heading.lg
    },
});

export { styles };