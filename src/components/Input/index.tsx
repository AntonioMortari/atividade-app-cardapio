import { theme } from '@/theme'; 
import { TextInput, TextInputProps, ViewStyle } from 'react-native';
import { styles } from './styles';

interface IInputProps extends TextInputProps {
}

const Input = ({ ...rest }: IInputProps) => {
    return (
        <TextInput
            {...rest}
            placeholderTextColor={theme.colors.gray}
            style={styles.input} 
        />
    );
}

export { Input };
