import React from 'react';
import {Button, Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {stylesForumCardWriteReply} from './stylesForumCardWriteReply';
import {HorizontalRule} from "../../../../elements";
import {stylesForumCardReplies} from "../replies/stylesForumCardReplies";
import {Input} from "react-native-elements";

interface WriteReplyProps {
    toggleBrowserInfo: boolean
}

const WriteReply: React.FC<WriteReplyProps> = ({toggleBrowserInfo}) => {
    return (
        <>
            {toggleBrowserInfo &&
                <View>

                    <HorizontalRule marginTop={0} marginBottom={10}/>
                    <View style={stylesForumCardWriteReply.writeReplyContainer}>
                        <View style={stylesForumCardWriteReply.writeReplyUserContainer}>
                            <Image
                                style={stylesForumCardWriteReply.writeReplyUserIcon}
                                source={require('../../../../assets/image/forum/userReplies.png')}/>
                            <View style={stylesForumCardWriteReply.writeReplyUserInfo}>
                                <Text style={stylesForumCardWriteReply.writeReplyUserName}>Olga</Text>
                                <View style={stylesForumCardWriteReply.writeReplyUserStatusContainer}>
                                    <Text style={stylesForumCardWriteReply.writeReplyUserStatusText}>The user is
                                        authenticated</Text>
                                    <Image
                                        style={stylesForumCardWriteReply.writeReplyUserStatusIcon}
                                        source={require('../../../../assets/image/forum/succsses.png')}/>
                                </View>
                            </View>
                        </View>

                        <View style={stylesForumCardWriteReply.writeReplyInputContainer}>
                            <TextInput
                                style={stylesForumCardWriteReply.writeReplyInput}
                                placeholder="Enter the text"
                                onChangeText={() => {}}
                                value={''}
                            />
                            <View style={stylesForumCardWriteReply.writeReplySaveBtnContainer}>
                                <TouchableOpacity style={stylesForumCardWriteReply.writeReplySaveBtn} onPress={() => {
                                }}>
                                    <Text style={stylesForumCardWriteReply.writeReplySaveBtnText}>Save</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>

                </View>}
        </>
    );
};

export default WriteReply;
