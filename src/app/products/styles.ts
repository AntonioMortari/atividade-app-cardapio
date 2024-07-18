import { theme } from '@/theme';
import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.primary,
        paddingTop: getStatusBarHeight() + 40
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'contain'
    },
    containerContent: {
        marginTop: 40,
        paddingHorizontal: 20,
    },
    title: {
        color: theme.colors.white,
        fontSize: theme.fonts.size.heading.md
    },
    price: {
        color: theme.colors.secondary,
        fontSize: theme.fonts.size.heading.lg + 2,
        fontWeight: 'bold',
        marginVertical: 5
    },
    description: {
        fontSize: theme.fonts.size.body.md,
        color: theme.colors.gray,
        fontWeight: '300',
    },
    containerIngredientsList: {
        marginTop: 20
    },
    ingredientText: {
        color: theme.colors.gray,
        fontWeight: '300'
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
        gap: 10
    },
    textBackButton: {
        color: theme.colors.gray
    },
    circle: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor:theme.colors.gray, marginRight: 7
    }
});

export { styles }