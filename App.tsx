import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import "./ReactotronConfig"
import Streams from "./pages/streams";
import Header from "./pages/header";
import Sort from "./pages/sort";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Header />
                <Sort />
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
