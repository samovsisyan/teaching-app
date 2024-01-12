// Card.tsx
import React from 'react';
import {View, Image, Text} from 'react-native';
import {stylesCard} from "./stylesCard";
import {Buttons, HorizontalRule} from "../../../elements";
const btnIcon = require('../../../assets/image/streams/Vector.png')

const Card: React.FC = () => {
    return (
        <View>
            <HorizontalRule  marginBottom={8} marginTop={8}/>
            <View style={stylesCard.cardContainer}>
                <View style={stylesCard.head}>
                    <View style={stylesCard.userFaceInfo}>
                        <View style={stylesCard.userStory}>
                            <View style={stylesCard.userImageContent}>
                                <Image
                                    style={stylesCard.image}
                                    source={require('../../../assets/image/streams/user.png')}/>
                            </View>
                        </View>
                        <Text style={stylesCard.userName}>John</Text>
                    </View>
                    <View style={stylesCard.userInfo}>
                        <Text style={stylesCard.streamTitle}>Stream title</Text>
                        <Text style={stylesCard.streamDescription}>
                            Banal, but irrefutable conclusions,
                            as well as supporters of totalitarianism in science,
                            overcoming the current difficult economic situation,
                            are called to account.</Text>
                    </View>
                </View>


                <View style={stylesCard.ticket}>
                    <View style={stylesCard.ticketParticipantsAndPrice}>
                        <Text style={stylesCard.ticketParticipants}>5/12 Patricipants</Text>
                        <Text style={stylesCard.ticketPrice}>$8 USD</Text>
                    </View>
                    <View style={stylesCard.ticketBtnContent}>
                        <Buttons
                            btnTitle='Buy Ticket'
                            btnIcon={btnIcon}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};


export default Card;
