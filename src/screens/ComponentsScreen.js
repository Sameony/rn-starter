import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import { color } from 'react-native-reanimated';


const ComponentsScreen = () => {
    const bleck = <Text>BLACK</Text>;
    return( 
    <View>
    <Text style={cssidk.textStyle}>This is the ComponentsScreen or something idk</Text>
    <Text>Lmao wassssuuuuup alright whatever</Text>
    {bleck}
    </View>
    );
};
 
const cssidk = StyleSheet.create({
    textStyle:
    {
        fontSize: 40
        
        
    }
});

export default ComponentsScreen;