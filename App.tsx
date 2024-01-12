import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import "./ReactotronConfig"
import Header from "./pages/header";
import React from "react";
import Tutors from "./pages/tutors";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Header />
                <Tutors />
                {/*<Sort />*/}
                {/*<Streams/>*/}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8F8F8'
    },
});
