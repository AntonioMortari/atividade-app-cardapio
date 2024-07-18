import { theme } from '@/theme';
import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.primary,
        paddingTop: getStatusBarHeight() + 40,
        paddingHorizontal: 20
    },
    containerItens: {

    },
    containerTotal: {
        flexDirection: 'row',
        marginTop: 10
    },
    textTotal: {
        color: theme.colors.white,
        fontSize: theme.fonts.size.body.md,
        fontFamily: theme.fonts.family.bold
    },
    total: {
        color: theme.colors.secondary,
        fontSize: theme.fonts.size.heading.md,
        fontFamily: theme.fonts.family.bold
    },
    price: {

    },
    pricePrimary: {

    },
    containerButtons: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        gap: 20
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
        gap: 10,
        justifyContent: 'center'
    },
    textBackButton: {
        color: theme.colors.gray
    },
});

export { styles };