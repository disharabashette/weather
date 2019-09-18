import React from 'react';
import { Button, View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, TextInput, Animated } from 'react-native';

class DetailScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoding: true,
            dataSource: null,
            city: this.props.navigation.state.params.cityname,
        };
    
    }

    componentDidMount() {
        return fetch('http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + '&APPID=98df40f6ad5013e2fac1ee06fa189107')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoding: false,
                    dataSource: responseJson,
                })
                console.log(this.state.dataSource)
            })
            .catch((error) => {
                console.log(error)
            });
    }

    
    render() {
        const { navigate } = this.props.navigation;
        if (this.state.isLoding) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator />
                </View>
            )
        }

        

        return (
            <Animated.View style={{
                backgroundColor: this.getRandomColor(),
                flex: 1,
                alignItems: "stretch",
                justifyContent: "center"
            }}>
                <View>
                    <View style={[styles.animatedContainer]}>
                        {/* <Text style={styles.icon}>
                            {this.state.dataSource.weather[0].icon}
                        </Text> */}
                        <Text style={styles.temperature}>
                            {Math.round(this.state.dataSource.main.temp) + "°C"}
                        </Text>
                        <Text style={styles.wind}>
                           Wind: {this.state.dataSource.wind.speed}
                        </Text>
                        <Text style={styles.location}>
                            {this.state.dataSource.name}, {this.state.dataSource.sys.country}
                        </Text>
                        <Text style={styles.weatherType}>
                            {this.state.dataSource.weather[0].main}
                        </Text>

                        {/* <Text>{this.props.navigation.state.params.cityname}</Text> */}

                    </View>
                </View>
            </Animated.View>
        );
    }
    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
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
        fontSize: 20,
        fontWeight: "100",
        marginBottom: 20,
    },
    wind: {
        fontSize: 18,
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
        width: 250,
        height: 40,
        marginVertical: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    icon: {
        fontSize: 130,
        padding: 0
    }
});

export default DetailScreen;