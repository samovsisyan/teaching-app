import React from 'react';
import { View, StyleSheet } from 'react-native';
import { stylesHorizontalRule } from './stylesHorizontalRule'
interface HorizontalRuleProps {
    marginTop: number;
    marginBottom: number;
}

export const HorizontalRule: React.FC<HorizontalRuleProps> = ({ marginTop = 8, marginBottom = 8 }) => {
    return (
        <View style={[stylesHorizontalRule.hr, { marginTop, marginBottom }]} />
    );
};
