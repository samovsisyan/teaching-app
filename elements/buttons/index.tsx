import React from 'react';
import {stylesCard} from "../../pages/streams/card/stylesCard";
import {Image, Text, View} from "react-native";

const Buttons = () => {
    return (
        <div>
            <View style={stylesCard.ticket}>
                <View style={stylesCard.ticketParticipantsAndPrice}>
                    <Text style={stylesCard.ticketParticipants}>5/12 Patricipants</Text>
                    <Text style={stylesCard.ticketPrice}>$8 USD</Text>
                </View>
                <View style={stylesCard.ticketBtnContent}>
                    <View style={stylesCard.ticketButton}>
                        <Text style={stylesCard.ticketBtnTitle}>Buy Ticket</Text>
                        <Image
                            style={stylesCard.ticketBtnIcon}
                            source={require('../../../assets/image/streams/Vector.png')}/>
                    </View>
                </View>
            </View>
        </div>
    );
};

export default Buttons;
