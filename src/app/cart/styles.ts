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
    price: {

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