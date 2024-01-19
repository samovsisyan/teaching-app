import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {stylesForumCardWriteReply} from './stylesForumCardWriteReply';
import {HorizontalRule} from "../../../../elements";


interface WriteReplyProps {
    toggleBrowserInfo: boolean,
    _onHandleAddNewReply: any,
}

const WriteReply: React.FC<WriteReplyProps> =
    ({
        toggleBrowserInfo,
        _onHandleAddNewReply,
    }) => {
    const [replyValue, setReplyValue] = useState('');

    const _onHandleChange = (text: any): void => {
        setReplyValue(text);
    }

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
                                placeholder="Type something..."
                                value={replyValue}
                                onChangeText={_onHandleChange}
                            />

                            <View style={stylesForumCardWriteReply.writeReplySaveBtnContainer}>
                                <TouchableOpacity style={stylesForumCardWriteReply.writeReplySaveBtn}
                                                  onPress={() => {
                                                      _onHandleAddNewReply(replyValue)
                                                      setReplyValue('')
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
