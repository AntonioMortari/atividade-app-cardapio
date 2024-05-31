import { StyleSheet } from 'react-native';

import { theme } from '@/theme';


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 10,
        gap: 10,
        alignItems: 'center'
    },
    thumbnail: {
        width: 90,
        height: 90,
        resizeMode: 'cover',
        borderRadius: 10
    },
    containerText: {
        padding: 8,
        flex: 0.95
    },
    title: {
        color: theme.colors.white,
        fontWeight: '400',
        fontSize: theme.fonts.size.body.md + 2
    },
    description: {
        fontSize: theme.fonts.size.body.xs,
        color: 'gray',
        fontWeight: '300',
        marginTop: 3
    }
});

export { styles };