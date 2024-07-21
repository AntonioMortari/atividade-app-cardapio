import { theme } from "@/theme";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    input:{
        backgroundColor: theme.colors.tertiary,
        padding: 10,
        borderRadius: 8,
        width: '100%',
        height: 100,
        textAlignVertical:'top',
        justifyContent: 'flex-start',
        fontSize: 16,
        color: theme.colors.gray,
        marginTop: 20
    }
})

export { styles }