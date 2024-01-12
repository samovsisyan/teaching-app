import {StyleSheet} from "react-native";

export const stylesForumTags = StyleSheet.create({
    scrollView: {
        marginHorizontal: 4,
    },
    forumTagsContainer: {
        height: 42,
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 20,
    },
    forumTagsLabel: {
        color: '#4F4F4F',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '500',
    },
    forumTagsCardContainer: {
        width: 'auto',
        height: 20,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        backgroundColor:'#F8F8F8',
        paddingTop: 4,
        paddingLeft: 8,
        paddingBottom: 4,
        paddingRight: 8,
        marginLeft: 4,
        marginRight: 4,
    },
    forumTagsCardName: {
        color: '#828282',
        textAlign: 'center',
        fontSize: 8,
        fontStyle: 'normal',
        fontWeight: '300',
    },
});
