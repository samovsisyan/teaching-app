import React from 'react';
import { ScrollView, Text } from 'react-native';
import { styles } from './styles';
import Card from "./card";


const Streams: React.FC = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Streams</Text>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </ScrollView>
    );
};

export default Streams;
