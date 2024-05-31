import { theme } from '@/theme';
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { styles } from './styles';

interface IOptionProps extends PressableProps {
    name: string;
    isSelected: boolean;
}

const Option = ({ name, isSelected = false, ...rest }: IOptionProps) => {
    const scale = useSharedValue(1);

    const onPressIn = () => {
        scale.value = withTiming(0.95)
    }

    const onPressOut = () => {
        scale.value = withTiming(1);
    }

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }]
    }))

    return (
        <Animated.View style={animatedStyle}>
            <Pressable
                style={[styles.container, isSelected && styles.selected]}
                onPressIn={onPressIn}
                onPressOut={onPressOut}
                {...rest}
            >
                <Text style={styles.text}>{name}</Text>
            </Pressable>
        </Animated.View>
    );
}

export { Option };