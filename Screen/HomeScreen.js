import React from 'react';
import { Button, View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, TextInput, Animated, Image, ImageBackground } from 'react-native';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityname: '',
      error: null,
    };
  }

  isValid() {
    var {
      cityname,
    } = this.state;

    if (cityname == "") this.setState({ error: "* City Name can't be empty" });
    else this.props.navigation.navigate('DetailScreen', { cityname: this.state.cityname });
  
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground
        source={require('../assets/back.jpg')}
        style={{ width: "100%", height: "100%" }}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image
            style={{ width: "60%", height: "60%", borderWidth: 0, }}
            source={require('../assets/logo.png')}
            resizeMode='contain'
          />
          <TextInput
            value={this.state.cityname}
            onChangeText={cityname => this.setState({ cityname })}
            placeholder={'Search By City'}
            placeholderTextColor="white"
            style={styles.input}
          />
          <Text style={{ color: "red" }}>{this.state.error}</Text>
          <TouchableOpacity style={{ width: 50, height: 30, marginTop: 10 }}
            onPress={() => this.isValid()}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}



const styles = StyleSheet.create({
  animatedContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  temperature: {
    fontSize: 62,
    fontWeight: "100",
    margin: 0
  },
  location: {
    fontSize: 14,
    fontWeight: "100",
    marginBottom: 20,
  },
  weatherType: {
    fontSize: 34,
    fontWeight: "500"
  },
  input: {
    borderWidth: 1,
    borderColor: "#666",
    backgroundColor:"#707070",
    color: '#fff',
    width: 250,
    height: 40,
    borderRadius: 5
  },
  icon: {
    //fontFamily: 'WeatherIcons-Regular',
    fontSize: 130,
    padding: 0
  }
});
export default HomeScreen;