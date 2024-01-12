import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {stylesForumTags} from './stylesForumTags';
import {HorizontalRule} from "../../../elements";


const ForumTags: React.FC = () => {
    return (
        <ScrollView horizontal={true} style={stylesForumTags.scrollView}>
            <HorizontalRule  marginTop={0} marginBottom={10}/>
                <View style={stylesForumTags.forumTagsContainer}>
                    <Text style={stylesForumTags.forumTagsLabel}>Tags:</Text>
                    <View style={stylesForumTags.forumTagsCardContainer}>
                        <Text style={stylesForumTags.forumTagsCardName}>#teacher</Text>
                    </View>
                    <View style={stylesForumTags.forumTagsCardContainer}>
                        <Text style={stylesForumTags.forumTagsCardName}>#english</Text>
                    </View>
                    <View style={stylesForumTags.forumTagsCardContainer}>
                        <Text style={stylesForumTags.forumTagsCardName}>#find</Text>
                    </View>
                    <View style={stylesForumTags.forumTagsCardContainer}>
                        <Text style={stylesForumTags.forumTagsCardName}>#teacher</Text>
                    </View>
                    <View style={stylesForumTags.forumTagsCardContainer}>
                        <Text style={stylesForumTags.forumTagsCardName}>#english</Text>
                    </View>
                    <View style={stylesForumTags.forumTagsCardContainer}>
                        <Text style={stylesForumTags.forumTagsCardName}>#teacher</Text>
                    </View>
                    <View style={stylesForumTags.forumTagsCardContainer}>
                        <Text style={stylesForumTags.forumTagsCardName}>#english</Text>
                    </View>
                    <View style={stylesForumTags.forumTagsCardContainer}>
                        <Text style={stylesForumTags.forumTagsCardName}>#find</Text>
                    </View>
                    <View style={stylesForumTags.forumTagsCardContainer}>
                        <Text style={stylesForumTags.forumTagsCardName}>#teacher</Text>
                    </View>
                    <View style={stylesForumTags.forumTagsCardContainer}>
                        <Text style={stylesForumTags.forumTagsCardName}>#english</Text>
                    </View>
                </View>
            <HorizontalRule  marginTop={10} marginBottom={0}/>
        </ScrollView>
    );
};

export default ForumTags;
