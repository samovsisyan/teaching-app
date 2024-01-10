import {StyleSheet} from "react-native";

export const stylesButtons = StyleSheet.create({
    ticket: {
        marginTop: 28,
        width: 'auto'
    },
    ticketButton: {
        width: 106,
        height: 34,
        flexShrink: 0,
        borderRadius: 100,
        backgroundColor: '#DE4878',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingLeft: 14,
        paddingBottom: 10,
        paddingRight: 14,
    },
    ticketBtnTitle: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '400',
    },
    ticketBtnIcon: {
        width: 12,
        height: 10,
        marginLeft: 8,
    },
});
