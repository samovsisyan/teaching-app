import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {stylesForumCardReplies} from './stylesForumCardReplies';
import {HorizontalRule} from "../../../../elements";
import WriteReply from "../writeReply";

interface RepliesProps {
    toggleBrowserInfo: boolean,
    replyData: any,
    _onHandleAddNewReply: any,
    toggleReply: any,
}

const Replies: React.FC<RepliesProps> =
    ({
         toggleBrowserInfo,
         replyData,
         _onHandleAddNewReply,
         toggleReply,
    }) => {
    return (
        <>
            {toggleBrowserInfo &&
                <View>
                    <View style={stylesForumCardReplies.browserInformationContent}>
                        <Text style={stylesForumCardReplies.browserInformationText}>
                            As has been repeatedly mentioned,
                            the supporters of totalitarianism in
                            science to this day remain the lot of
                            liberals who are eager to be exposed.
                            Taking into account the current international
                            situation, understanding the essence of
                            resource-saving technologies creates
                            prerequisites for a training system that
                            meets the urgent needs. As has been repeatedly
                            mentioned, the supporters of totalitarianism
                            in science to this day remain the lot of liberals
                            who are eager to be exposed.
                        </Text>
                    </View>
                    {toggleReply &&
                        <WriteReply
                            toggleBrowserInfo={toggleBrowserInfo}
                            _onHandleAddNewReply={_onHandleAddNewReply}
                        />
                    }
                    {replyData.map((reply: string) => {
                        return (
                            <>
                                <HorizontalRule marginTop={0} marginBottom={10}/>
                                <View style={stylesForumCardReplies.repliesContainer}>
                                    <View style={stylesForumCardReplies.repliesUserContainer}>
                                        <Image
                                            style={stylesForumCardReplies.repliesUserIcon}
                                            source={require('../../../../assets/image/forum/userReplies.png')}/>
                                        <View style={stylesForumCardReplies.repliesUserInfo}>
                                            <Text style={stylesForumCardReplies.repliesUserName}>Olga</Text>
                                            <View style={stylesForumCardReplies.repliesUserStatusContainer}>
                                                <Text style={stylesForumCardReplies.repliesUserStatusText}>The user is
                                                    authenticated</Text>
                                                <Image
                                                    style={stylesForumCardReplies.repliesUserStatusIcon}
                                                    source={require('../../../../assets/image/forum/succsses.png')}/>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={stylesForumCardReplies.repliesTextContainer}>
                                        <Text style={stylesForumCardReplies.repliesText}>
                                            {reply}
                                        </Text>
                                    </View>
                                    <View style={stylesForumCardReplies.repliesDateContainer}>
                                        <Text style={stylesForumCardReplies.repliesDate}>
                                            February 15, 2021
                                        </Text>
                                    </View>
                                </View>
                            </>
                        )
                    })}




                    <View style={stylesForumCardReplies.repliesMoreBtnContainer}>
                        <TouchableOpacity style={stylesForumCardReplies.repliesMoreBtn} onPress={() => {
                        }}>
                            <Text style={stylesForumCardReplies.repliesMoreBtnText}>More</Text>
                        </TouchableOpacity>
                    </View>

                </View>}
        </>
    );
};

export default Replies;
