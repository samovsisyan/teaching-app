import React from 'react';
import { ScrollView, Text } from 'react-native';
import {stylesTutors} from "./stylesTutors";
import TutorsCard from "./tutorsCard";
import {styles} from "../streams/styles";


const Tutors: React.FC = () => {
    return (
        <ScrollView style={stylesTutors.container}>
            <Text style={stylesTutors.title}>Tutors</Text>
            <TutorsCard />
            <TutorsCard />
            <TutorsCard />
            <TutorsCard />
            <TutorsCard />
        </ScrollView>
    );
};

export default Tutors;
