
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

import {
    SpaceMono_400Regular,
    SpaceMono_700Bold,
    useFonts
} from '@expo-google-fonts/space-mono';


SplashScreen.preventAutoHideAsync();
const Layout = () => {
    const [fontsLoaded] = useFonts({
        SpaceMono_400Regular,
        SpaceMono_700Bold,
    });

    if (!fontsLoaded) {
        return;
    }

    SplashScreen.hideAsync();
    return (
        <>
            <StatusBar style='dark' />
            <Stack screenOptions={{ headerShown: false }} />
        </>
    )
}

export default Layout;