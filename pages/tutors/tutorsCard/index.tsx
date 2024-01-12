import React from 'react';
import {View, Image, Text} from 'react-native';
import {stylesTutorsCard} from "./stylesTutorsCard";
import {Buttons, HorizontalRule} from "../../../elements";
const btnIcon = require('../../../assets/image/streams/Vector.png')
// import { Rating } from '@rneui/themed';
import { Rating, AirbnbRating } from 'react-native-elements';


const TutorsCard: React.FC = () => {
    return (
        <View>
            <HorizontalRule  marginBottom={8} marginTop={8}/>
            <View style={stylesTutorsCard.tutorCover}></View>
            <View style={stylesTutorsCard.tutorContainer}>
                <View style={stylesTutorsCard.tutorImageAndRating}>
                    <View style={stylesTutorsCard.userStory}>
                        <View style={stylesTutorsCard.userImageContent}>
                            <Image
                                style={stylesTutorsCard.image}
                                source={require('../../../assets/image/streams/user.png')}/>
                        </View>
                    </View>
                    <Rating
                        type='custom'
                        ratingColor='#f2c94c'
                        ratingBackgroundColor='#f5f5f5'
                        ratingCount={5}
                        imageSize={14}
                        style={{ paddingVertical: 10 }}
                    />
                    <Text style={stylesTutorsCard.tutorsLessonsCount}>247 lessons</Text>
                </View>
                <View style={stylesTutorsCard.tutorInformation}>
                    <View style={stylesTutorsCard.tutorUserName}>
                        <Text style={stylesTutorsCard.tutorFirstLastName}>Anny Wu</Text>
                        <Text style={stylesTutorsCard.tutorProfessional}>Professional teacher</Text>
                    </View>
                    <View style={stylesTutorsCard.tutorTeaches}>
                        <Text style={stylesTutorsCard.tutorTeachesLabel}>Teaches</Text>
                        <Text style={stylesTutorsCard.tutorTeachesLanguage}>English</Text>
                    </View>
                    <HorizontalRule  marginBottom={8} marginTop={14}/>
                    <View style={stylesTutorsCard.tutorAlsoSpeaks}>
                        <Text style={stylesTutorsCard.tutorAlsoSpeaksLabel}>Also speaks</Text>
                        <Text style={stylesTutorsCard.tutorAlsoSpeaksLanguage}>English, Russian</Text>
                    </View>
                    <HorizontalRule  marginBottom={8} marginTop={24}/>
                    <View style={stylesTutorsCard.tutorPrice}>
                        <View style={stylesTutorsCard.tutorHourlyRateFrom}>
                            <Text style={stylesTutorsCard.tutorHourlyRateFromLabel}>Hourly rate from</Text>
                            <Text style={stylesTutorsCard.tutorHourlyRateFromPrice}>USD 15.90</Text>
                        </View>
                        <View style={stylesTutorsCard.tutorTrial}>
                            <Text style={stylesTutorsCard.tutorTrialLabel}>Trial</Text>
                            <Text style={stylesTutorsCard.tutorTrialPrice}>USD 8.00</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};


export default TutorsCard;
