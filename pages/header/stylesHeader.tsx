import {StyleSheet} from "react-native";
import * as url from "url";

export const stylesHeader = StyleSheet.create({
    header: {

    },
    icons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
    },
    headerLogo: {
        width: 126,
        height: 52,
        marginLeft: 40,
    },
    headerMenu: {
        width: 34,
        height: 34,
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        marginLeft: 12,
        marginBottom: 20,
        marginRight: 12,
    },
    headerSearch: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerSearchInputContainer: {
        width: 192,
        height: 32,
        borderRadius: 100,
        backgroundColor: '#FFF',
    },
    search: {
        width: 152,
        height: 32,
        color: '#BDBDBD',
        fontSize: 10,
        fontStyle: 'normal',
        fontWeight: '300',
        marginLeft: 12,
    },
    headerSearchIcon: {
        width: 12,
        height: 12,
        marginLeft: -20,
    },
    headerToolsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerTools: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 35,
        height: 35,
        backgroundColor: '#F2F2F2',
        borderRadius: 50,
        marginLeft: 12,
    },
    headerToolsIcon: {
        width: 21,
        height: 19,
    },
});
