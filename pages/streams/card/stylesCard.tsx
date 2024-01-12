import {StyleSheet} from "react-native";

export const stylesCard = StyleSheet.create({
    cardContainer: {
        marginTop: 46,
        marginLeft: 32,
        marginBottom: 22,
        marginRight: 32,
    },
    head: {
        display: 'flex',
        flexDirection: 'row',
    },
    userFaceInfo: {},
    userStory: {
        width: 88,
        height: 88,
        borderRadius: 50,
        backgroundColor: '#E0E0E0',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    userInfo: {
        marginLeft: 22,
    },
    image: {
        width: 77,
        height: 77,
        borderRadius: 50,
        resizeMode: 'cover',
    },
    userImageContent: {
        backgroundColor: '#fff',
        borderRadius: 50,
        padding: 2,
    },
    userName: {
        color: '#4F4F4F',
        textAlign: 'center',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '500',
        marginTop: 4,
    },
    streamTitle: {
        color: '#4F4F4F',
        // font-family: Roboto;
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '500',
    },
    streamDescription: {
        width: 220,
        color: '#828282',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '300',
        lineHeight: 18,
        marginTop: 16,
    },



    ticket: {
        marginTop: 28,
        width: 'auto'
    },
    ticketParticipantsAndPrice: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ticketParticipants: {
        color: '#828282',
        textAlign: 'right',
        fontSize: 10,
        fontStyle: 'normal',
        fontWeight: '300',
        lineHeight: 14.39,
    },
    ticketPrice: {
        color: '#4F4F4F',
        textAlign: 'right',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 20.39,
    },
    ticketBtnContent: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 26,
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
