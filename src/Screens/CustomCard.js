import React, { Component } from 'react';
import { View, SafeAreaView, StatusBar, Dimensions } from 'react-native';
// import { Header } from 'native-base';

const width = Dimensions.get('window').width;

class CustomCard extends Component {
    render() {
        return (
            <SafeAreaView style={{ backgroundColor: '#F9F7FC' }}>
                <StatusBar backgroundColor={'#000'} barStyle="light-content" />
                <View style={{ flexDirection: 'Column', width:width,height: 80, alignItems: 'center'}}>
                    <View>{this.props.Top}</View>
                    <View>{this.props.Bottom}</View>
                </View>
            </SafeAreaView>
        )
    }
}
export { CustomCard }