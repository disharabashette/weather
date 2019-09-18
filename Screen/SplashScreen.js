import React from 'react';
import { Button, View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
//import image from '../assets/'

class SplashScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('HomeScreen')
        }, 2500);
    }

    render() {
        return (
            <ImageBackground
                source={require('../assets/back.jpg')}
                style={{ width: "100%", height: "100%" }}>
                <View style={styles.container}>
                <Image
                        style={{ width: "60%", height: "60%", borderWidth: 0, }}
                        source={require('../assets/logo.png')}
                        resizeMode='contain'
                    />

                </View>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'black',
    }
})

export default SplashScreen;