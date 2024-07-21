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
    cartContainer:{
    },
    containerNumberCart:{
        backgroundColor: theme.colors.secondary,
        padding:10,
        width: 16,
        height: 16,
        borderRadius: 16,
    },
    numberCart:{
        width: 20,
        height: 20,
        color: theme.colors.primary,
        backgroundColor: theme.colors.secondary,
        textAlign: 'center',
        borderRadius: 32,
        marginBottom: -10,
        zIndex: 10,
        marginLeft: 10
    }
});

export { styles };