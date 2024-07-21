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
        maxHeight: 300

    },
    containerTotal: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center'
    },
    textTotal: {
        color: theme.colors.white,
        fontSize: theme.fonts.size.heading.md,
        
    },
    total: {
        color: theme.colors.secondary,
        fontSize: theme.fonts.size.heading.lg,
        fontWeight: 'semibold',
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
    alertMessage:{
        color: theme.colors.gray,
        fontSize: theme.fonts.size.heading.lg,
        marginVertical: 20,
        textAlign: 'center'
    }
});

export { styles };