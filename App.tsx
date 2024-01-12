import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import "./ReactotronConfig"
import Header from "./pages/header";
import React from "react";
import Tutors from "./pages/tutors";
import Sort from "./pages/sort";
import Forum from "./pages/forum";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Header />
                <Forum />
                {/*<Sort />*/}
                {/*<Tutors />*/}
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
