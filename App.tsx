import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Streams from "./pages/streams";
import Header from "./pages/header";
import "./ReactotronConfig"

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Header />
                <Streams/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8F8F8'
    },
});
