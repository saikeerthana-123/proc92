import React,{Component}from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';
import AppScreen from '../screens/OceanScreen';

export default class WelcomeScreen extends Component{
    render(){
        return(
            <View style = {(styles.container)}>
        <Image style = {(styles.img)} source ={{uri:'data:image/jpeg;base64,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'}}/>
                <TouchableOpacity style = {(styles.button)}
                   onPress={() => { this.props.navigation.navigate('AppScreen')}}>
                    <Text>Start</Text>                  
               </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
     flex:1,
     backgroundColor:'#F4FCF8',
     justifyContent: 'center'
   },
   button:{
       justifyContent: 'center',
       alignItems: 'center',
       alignSelf: 'center',
       borderRadius:10,
       backgroundColor: '#475398',
       width: 50,
       height: 25
   },
   img:{
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius:10,
    backgroundColor: 'red',
    width: 500,
    height: 300
}
});