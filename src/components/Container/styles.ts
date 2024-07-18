import { theme } from '@/theme';
import { StyleSheet } from 'react-native';

import { getStatusBarHeight } from 'react-native-status-bar-height';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.primary,
        paddingTop: getStatusBarHeight() + 40,
        paddingHorizontal: 20
    }
});

export { styles };