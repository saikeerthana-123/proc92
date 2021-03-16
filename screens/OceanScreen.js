import React,{Component}from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Image,
    ImageBackground,
    Alert,
    ToastAndroid
} from 'react-native';

export default class AppScreen extends Component{
    componentDidMount(){
        console.log("AppScreen")
    }

    getButtonsUsingForLoop = (num) => { 
        const array = [] 
        const images = [
            '../assets/1atlantic-salmon.png',
            '../assets/2manatee.png',
            '../assets/3striped-bass.png',
            '../assets/4clown-fish.png'
        ]
        const msg = [
            "The Atlantic salmon is a species of ray-finned fish in the family Salmonidae which is the largest salmon and can grow up to a meter in length.",
            "Manatees are large, fully aquatic, mostly herbivore marine animals sometimes known as sea cows. ",
            "The striped bass is the state fish of Maryland, Rhode Island, and South Carolina, and the state saltwater (marine) fish of New York, New Jersey, Virginia, and New Hampshire.",
            "In Disney/Pixar's 2003 film Finding Nemo and its 2016 sequel Finding Dory main characters Nemo and his dad Marlin are clownfish. The popularity of these for aquaria increased following the film's release.",
        ]
        for(var i = 0; i < num; i++){ 
            console.log(images[i])
            array.push(<TouchableOpacity  style = {(styles.button)}
                onPress={()=>{
                            Alert.alert(msg[i])
                        }}>
                            <Image source={{uri:images[i]}}/>
                </TouchableOpacity>) 
        } 
        return array }

    render(){
        return(
        <View style={styles.container}>
                <View style={(styles.view1)}>
                    <Text>Sunshine Zone</Text>
                    {this.getButtonsUsingForLoop(4)}
                </View>

                <View style={(styles.view2)}> 
                        <Text>Twilight Zone</Text>

                </View>

                <View style={(styles.view3)}> 
                        <Text style={{color:'white'}}>Midnight Zone</Text>

                </View>

                <View style={(styles.view4)}> 
                        <Text style={{color:'white'}}>Hadal Zone</Text>

                </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
     flex:1,
     justifyContent: 'center',
     alignItems: 'center',
   },
   button:{
       justifyContent: 'center',
       alignItems: 'center',
       alignSelf: 'center',
       marginTop: 80,
   },
   background: {
    justifyContent: 'center',
    alignItems: 'center', 
    flex: 1, 
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    },
   view1: {
       backgroundColor: '#68CEFE',
       alignItems:'center',
   },
   view2: {
    backgroundColor: '#4383A1',
    alignItems:'center',
    },
    view3: {
        backgroundColor: '#2E5A97',
        alignItems:'center',
    },
    view4: {
        backgroundColor: '#162737',
        alignItems:'center',
    }
    });