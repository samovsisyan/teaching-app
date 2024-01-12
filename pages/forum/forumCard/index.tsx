import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {stylesForumCard} from './stylesForumCard';
import {stylesCard} from "../../streams/card/stylesCard";
import {stylesForumTags} from "../forumTags/stylesForumTags";
import {HorizontalRule} from "../../../elements";

const ForumCard: React.FC = () => {
    return (
        <View>
            <View style={stylesForumCard.forumCardContainer}>
            <View style={stylesForumCard.postedDateContainer}>
                <Image
                    style={stylesForumCard.postedDateIcon}
                    source={require('../../../assets/image/forum/time.png')}/>
                <Text style={stylesForumCard.postedDate}>2021-02-17</Text>
            </View>
            <View style={stylesForumCard.forumCardUserContainer}>
                <View style={stylesForumCard.userFaceInfo}>
                    <View style={stylesForumCard.userStory}>
                        <View style={stylesForumCard.userImageContent}>
                            <Image
                                style={stylesForumCard.image}
                                source={require('../../../assets/image/streams/user.png')}/>
                        </View>
                    </View>
                    <Text style={stylesForumCard.userName}>John</Text>
                </View>
                <View style={stylesForumCard.userInformation}>
                    <Text style={stylesForumCard.forumCardQuestion}>How to find an English teacher?</Text>
                    <View style={stylesForumCard.forumCardAnswerAndViews}>
                        <View style={stylesForumCard.forumCardAnswer}>
                            <Image
                                style={stylesForumCard.forumCardAnswerIcon}
                                source={require('../../../assets/image/forum/answer.png')}/>
                            <Text style={stylesForumCard.forumCardAnswerLabel}>5 Answers</Text>
                        </View>
                        <View style={stylesForumCard.forumCardViews}>
                            <Image
                                style={stylesForumCard.forumCardViewsIcon}
                                source={require('../../../assets/image/forum/views.png')}/>
                            <Text style={stylesForumCard.forumCardViewsLabel}>52 Views</Text>
                        </View>
                    </View>
                    <View style={stylesForumCard.forumCardTags}>
                        <View style={stylesForumCard.forumTagsCardContainer}>
                            <Text style={stylesForumCard.forumTagsCardName}>#teacher</Text>
                        </View>
                        <View style={stylesForumCard.forumTagsCardContainer}>
                            <Text style={stylesForumCard.forumTagsCardName}>#english</Text>
                        </View>
                        <View style={stylesForumCard.forumTagsCardContainer}>
                            <Text style={stylesForumCard.forumTagsCardName}>#find</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={stylesForumCard.forumCardButtons}>
                <View style={stylesForumCard.forumCardBtnBrowseContainer}>
                    <Text style={stylesForumCard.forumCardBtnBrowseName}>Browse</Text>
                </View>
                <View style={stylesForumCard.forumCardBtnReplyContainer}>
                    <Text style={stylesForumCard.forumCardBtnReplyName}>Reply</Text>
                </View>
            </View>
        </View>
        <HorizontalRule  marginTop={0} marginBottom={10}/>
        </View>
    );
};

export default ForumCard;
