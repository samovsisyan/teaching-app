import React from 'react';
import {Image, Text, View} from "react-native";
import {stylesButtons} from "./stylesButtons";

interface ButtonsProps {
    btnTitle: string;
    btnIcon: string;
}

export const Buttons: React.FC<ButtonsProps> = (props) => {
    const {
        btnTitle,
        btnIcon,
    } = props
    return (
        <View style={stylesButtons.ticketButton}>
            {!!btnTitle &&
                <Text style={stylesButtons.ticketBtnTitle}>{btnTitle}</Text>}
            {!!btnIcon &&
                <Image style={stylesButtons.ticketBtnIcon} source={btnIcon}/>}
        </View>
    );
};
