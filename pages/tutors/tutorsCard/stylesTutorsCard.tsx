import {StyleSheet} from "react-native";

export const stylesTutorsCard = StyleSheet.create({
    tutorCover: {
        height: 86,
        backgroundColor: '#F2F2F2',
    },
    tutorContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingRight: 20,
        paddingBottom: 16,
        paddingLeft: 32,
        marginTop: -58,

        // height: 86,
        // backgroundColor: '#F2F2F2',
    },
    tutorImageAndRating: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tutorInformation: {
        marginLeft: 12,
        // height: 86,
        // backgroundColor: '#F2F2F2',
    },
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
    tutorsLessonsCount: {
        color: '#828282',
        textAlign: 'center',
        fontSize: 10,
        fontStyle: 'normal',
        fontWeight: '300',
    },






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

    tutorUserName: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    tutorFirstLastName: {
        color: '#4F4F4F',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '500',
    },
    tutorProfessional: {
        color: '#828282',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '300',
        marginTop: 4,
    },
    tutorTeaches: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 34,
    },
    tutorTeachesLabel: {
        color: '#828282',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '300',
    },
    tutorTeachesLanguage: {
        color: '#4F4F4F',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '400',
        marginTop: 4,
    },
    tutorAlsoSpeaks: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    tutorAlsoSpeaksLabel: {
        color: '#828282',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '300',
    },
    tutorAlsoSpeaksLanguage: {
        color: '#4F4F4F',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '400',
        marginTop: 4,
    },


    tutorPrice: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    tutorHourlyRateFrom: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    tutorHourlyRateFromLabel: {
        color: '#828282',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '300',
    },
    tutorHourlyRateFromPrice: {
        color: '#4F4F4F',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '500',
        width: 88,
        height: 34,
        borderRadius: 100,
        backgroundColor: '#F8F8F8',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 8,
        paddingRight: 10,
        paddingBottom: 8,
        paddingLeft: 10,
        marginTop: 8,
    },

    tutorTrial: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    tutorTrialLabel: {
        color: '#828282',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '300',
    },
    tutorTrialPrice: {
        color: '#4F4F4F',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '500',
        width: 88,
        height: 34,
        borderRadius: 100,
        backgroundColor: '#F8F8F8',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 8,
        paddingRight: 10,
        paddingBottom: 8,
        paddingLeft: 10,
        marginTop: 8,
    },
});
