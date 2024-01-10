import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';

import Streams from "./pages/streams";
import "./ReactotronConfig"

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Streams/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
