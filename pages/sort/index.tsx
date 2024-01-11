import React, {useState} from 'react';
import {View, Text} from "react-native";
import {stylesSort} from "./stylesSort";
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
];

interface SortProps {}

const Sort: React.FC<SortProps> = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    return (
        <View style={stylesSort.sortContainer}>
            <Text style={stylesSort.sortText}>Sort:</Text>
            <Dropdown
                style={[stylesSort.byPrice, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={stylesSort.placeholderStyle}
                selectedTextStyle={stylesSort.selectedTextStyle}
                inputSearchStyle={stylesSort.inputSearchStyle}
                iconStyle={stylesSort.iconStyle}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'by price' : '...'}
                value={value}
                onChange={item => {
                    setValue(item.value);
                }}

            />
            <Dropdown
                style={[stylesSort.byRating, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={stylesSort.placeholderStyle}
                selectedTextStyle={stylesSort.selectedTextStyle}
                inputSearchStyle={stylesSort.inputSearchStyle}
                iconStyle={stylesSort.iconStyle}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'by rating' : '...'}
                value={value}
                onChange={item => {
                    setValue(item.value);
                }}

            />
            <Dropdown
                style={[stylesSort.byNumber, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={stylesSort.placeholderStyle}
                selectedTextStyle={stylesSort.selectedTextStyle}
                inputSearchStyle={stylesSort.inputSearchStyle}
                iconStyle={stylesSort.iconStyle}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'by the number of participants' : '...'}
                value={value}
                onChange={item => {
                    setValue(item.value);
                }}

            />
        </View>
    );
};

export default Sort;
