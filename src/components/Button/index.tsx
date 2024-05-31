import { ReactNode } from 'react';
import { TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';
import { styles } from './styles';

interface IButtonProps extends TouchableOpacityProps {
    children?: ReactNode;
    style: ViewStyle;
}

const Button = ({ children, style, ...rest }: IButtonProps) => {
    return (
        <TouchableOpacity 
            style={[styles.container, style]}
            {...rest}
        >
            {children}
        </TouchableOpacity>
    );
}

export { Button };