import React from 'react';
import { View, StyleSheet } from 'react-native';

interface HorizontalRuleProps {
    marginTop: number;
    marginBottom: number;
}

export const HorizontalRule: React.FC<HorizontalRuleProps> = ({ marginTop = 8, marginBottom = 8 }) => {
    return (
        <View style={[styles.hr, { marginTop, marginBottom }]} />
    );
};

const styles = StyleSheet.create({
    hr: {
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 0.5,
    },
});
