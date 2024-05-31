import { theme } from '@/theme';
import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.primary,
        paddingHorizontal: 20,
        paddingTop: getStatusBarHeight() + 40
    },
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
    containerOptions: {
        marginVertical: 20,
        height: 50,
    },
    sectionTitle: {
        fontSize: theme.fonts.size.heading.md,
        fontWeight: '600',
        color: theme.colors.white,
        marginTop: 30
    }
});

export { styles };