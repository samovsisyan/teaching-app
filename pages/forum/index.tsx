import React from 'react';
import { ScrollView, Text } from 'react-native';
import {stylesForum} from './stylesForum';
import ForumCard from "./forumCard";
import ForumTags from "./forumTags";


const Forum: React.FC = () => {
    return (
        <ScrollView style={stylesForum.container}>
            <Text style={stylesForum.title}>Forum</Text>
            <ForumTags />
            <ForumCard />
            <ForumCard />
            <ForumCard />
            <ForumCard />
            <ForumCard />
            <ForumCard />
        </ScrollView>
    );
};

export default Forum;
