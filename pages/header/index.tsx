import React from 'react';
import {TextInput, View, Image} from "react-native";
import {stylesHeader} from "./stylesHeader";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
    return (
        <View style={stylesHeader.headerContainer}>
            <View style={stylesHeader.headerSearch}>
                <View style={stylesHeader.headerSearchInputContainer}>
                    <TextInput
                        style={stylesHeader.search}
                        // onChangeText={onChangeText}
                        // value={'Search'}
                        placeholder='Search'
                    />
                </View>
                <Image
                    style={stylesHeader.headerSearchIcon}
                    source={require('../../assets/image/header/search.png')}/>
            </View>
            <View style={stylesHeader.headerToolsContainer}>
                <View style={stylesHeader.headerTools}>
                    <Image
                        style={stylesHeader.headerToolsIcon}
                        source={require('../../assets/image/header/filter.png')}/>
                </View>
                <View style={stylesHeader.headerTools}>
                    <Image
                        style={stylesHeader.headerToolsIcon}
                        source={require('../../assets/image/header/message.png')}/>
                </View>
                <View style={stylesHeader.headerTools}>
                    <Image
                        style={stylesHeader.headerToolsIcon}
                        source={require('../../assets/image/header/notification.png')}/>
                </View>
            </View>
        </View>
    );
};

export default Header;
