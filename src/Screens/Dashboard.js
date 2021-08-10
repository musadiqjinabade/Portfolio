import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,ScrollView, Alert, KeyboardAvoidingView, SafeAreaView, ImageBackground, Dimensions, Image, TextInput, TouchableOpacity, Header} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP, heightPercentageToDP} from 'react-native-responsive-screen';
import CheckBox from '@react-native-community/checkbox';
import { CustomHeader } from './CustomHeader';
import LinearGradient from 'react-native-linear-gradient';
// import PieChart from 'react-native-pie-chart';
import Pie from 'react-native-pie'


const width = Dimensions.get('window').width;
const ratio = width / 375 

export default class Dashboard extends Component {
    constructor(){
        super()
        this.state={
            mobile:''
        }
    }
    render() {
        return (
            <SafeAreaView style={{flex:1, justifyContent:'flex-start', alignSelf:'flex-start', backgroundColor:'#F9F7FC'}}>
                <CustomHeader
                    style={{ backgroundColor: '#F6F6F6', alignSelf:'center', justifyContent:'center',elevation: 0.69,  }}
                    Left={
                        <TouchableOpacity
                            onPress={() =>{}}
                            style={{ width: 35, height: 30 , marginLeft: 15, backgroundColor:'#fff', alignSelf:'center', justifyContent:'center', borderRadius:8 }}>
                            <Image source={require('../resources/menu-1.png')} style={{ height: 20, width: 20, tintColor: 'grey', alignSelf:'center' }} resizeMode='contain' />
                        </TouchableOpacity>
                    }
                    Center={
                        <View style={{ flexDirection: 'row',  alignSelf:'center', justifyContent:'center'}}>
                            <TouchableOpacity
                                style={{  justifyContent:'center',alignItems: 'center' }}>
                                <Text style={{alignSelf:'center', justifyContent:'center', fontWeight:'bold', color:'#000', fontSize:19, fontFamily: 'Corporate Rounded Bold',}}>Portfolio</Text>
                            </TouchableOpacity>
                        </View>
                    }
                    Right={
                            <TouchableOpacity
                                onPress={() => { }}
                                style={{ width: 35,flexDirection:'row', height: 30, marginRight: 15, backgroundColor: '#fff', alignSelf: 'center', justifyContent: 'center', borderRadius: 8 }}>
                                <Image source={require('../resources/ring.png')} style={{ height: 20, width: 20, tintColor: 'grey', alignSelf: 'center' }} resizeMode='contain' />
                                <View style={{backgroundColor:'#6990F0', width:10,height:10, borderRadius:10,marginRight:widthPercentageToDP('-3%')}}/>
                            </TouchableOpacity>
                        
                    }>
                </CustomHeader>
                <View style={styles.cardPort1}>
                    <LinearGradient start={{x: 1, y: 0}} end={{x: 0, y: 1}} colors={['#6990F0', '#6990F0', '#9575F1']} style={styles.cardPort2}>
                        <Text style={styles.cardPortText}>Your portfolio</Text>
                        <Text style={styles.cardPortText2}>$ 109 987 973</Text>

                    </LinearGradient>
                </View>
                <View style={{flex:1, justifyContent:'space-between', alignSelf:'center',marginTop: hp('6%'),width:widthPercentageToDP('99.9%'), borderTopLeftRadius: 25, 
                        borderTopRightRadius: 25, backgroundColor:'#fff' }}>
                   <View style={{flex:1, flexDirection:'column'}}>
                        <Text style={{marginLeft: widthPercentageToDP('5%'), marginTop: 10, fontFamily: 'Corporate Rounded Bold', fontWeight:'600', fontSize:18}}>Products</Text>
                        <ScrollView horizontal={true} style={{ flex: 1, flexDirection: 'row', marginTop: heightPercentageToDP('3%') }}>
                            <View style={{
                                marginLeft: widthPercentageToDP('5%'), 
                                borderRadius: 20, width: widthPercentageToDP('49%'), 
                                height: heightPercentageToDP('20%'), 
                                backgroundColor: '#fff', elevation: 8, shadowColor: '#6990F0', shadowOffset: {
                                    width: 2,
                                    height: 2,
                                },
                                shadowOpacity: 0.1,
                                shadowRadius: 16.00,

                                elevation: 10,
                            }}>
                                <Text style={{ marginLeft: widthPercentageToDP('5%'), marginTop: 10, fontFamily: 'Corporate Rounded Regular', fontWeight: '700', fontSize: 12, color:'grey' }}>Basic Plan</Text>
                                <Text style={{ marginLeft: widthPercentageToDP('5%'), marginTop: 7, fontFamily: 'Corporate Rounded Bold', fontWeight: '700', fontSize: 18, color:'#000' }}>$ 122 726</Text>
                                <View style={{flexDirection:'row', flex:1, margin: widthPercentageToDP('5%'), justifyContent:'space-between',  alignSelf:'center'}}>
                                    <Image source={require('../resources/price-list.png')} style={{ height: 40, width: 40, alignSelf:'center' }} resizeMode='contain' />
                                    <View style={{flex:1}}/>
                                    <View style={{width: 25, height: 24, backgroundColor:'#000', borderRadius:20,justifyContent:'center',alignSelf:'center'}}>
                                        <Image source={require('../resources/right-arrow.png')} style={{ height: 13, width: 13, tintColor: '#fff', justifyContent:'center',alignSelf:'center' }} resizeMode='contain' />
                                    </View>                                    
                                </View>
                            </View>
                            <View style={{
                                marginLeft: widthPercentageToDP('5%'), 
                                borderRadius: 20, width: widthPercentageToDP('49%'), 
                                height: heightPercentageToDP('20%'), 
                                backgroundColor: '#fff', elevation: 8, shadowColor: '#6990F0', shadowOffset: {
                                    width: 2,
                                    height: 2,
                                },
                                shadowOpacity: 0.1,
                                shadowRadius: 16.00,

                                elevation: 10,
                            }}>
                                <Text style={{ marginLeft: widthPercentageToDP('5%'), marginTop: 10, fontFamily: 'Corporate Rounded Regular', fontWeight: '700', fontSize: 12, color:'grey' }}>SuperTrader</Text>
                                <Text style={{ marginLeft: widthPercentageToDP('5%'), marginTop: 7, fontFamily: 'Corporate Rounded Bold', fontWeight: '700', fontSize: 18, color:'#000' }}>$ 1981 000</Text>
                                <View style={{flexDirection:'row', flex:1, margin: widthPercentageToDP('5%'), justifyContent:'space-between',  alignSelf:'center'}}>
                                    <Image source={require('../resources/price-list.png')} style={{ height: 40, width: 40, alignSelf:'center' }} resizeMode='contain' />
                                    <View style={{flex:1}}/>
                                    <View style={{width: 25, height: 24, backgroundColor:'#000', borderRadius:20,justifyContent:'center',alignSelf:'center'}}>
                                        <Image source={require('../resources/right-arrow.png')} style={{ height: 13, width: 13, tintColor: '#fff', justifyContent:'center',alignSelf:'center' }} resizeMode='contain' />
                                    </View>                                    
                                </View>
                            </View>
                        </ScrollView>
                   </View>
                   <View style={{ flex:1,justifyContent: 'flex-start',alignSelf:'flex-start', marginHorizontal: 5 }}>   
                   <Text style={{marginLeft: widthPercentageToDP('5%'),  fontFamily: 'Corporate Rounded Bold',  fontSize:18}}>Share of products</Text>

                        <View
                            style={{
                                marginLeft: 15, 
                                flexDirection: 'row',
                                marginTop: heightPercentageToDP('3%'),
                                justifyContent: 'space-between',
                                alignSelf:'center',
                                alignSelf: 'center'
                            }} >
                            <Pie
                                radius={75}
                                innerRadius={60}
                                sections={[
                                    {
                                        percentage: 34,
                                        color: '#6990F0'
                                    },
                                    {
                                        percentage: 46,
                                        color: '#B198EF',
                                    },
                                    {
                                        percentage: 20,
                                        color: '#F6DDA2',
                                    },
                                ]}
                                dividerSize={0.3}
                                strokeCap={'round'}
                            />
                            <View style={{ flex: 1, flexDirection: 'column', alignSelf: 'center', justifyContent: 'center', marginLeft: widthPercentageToDP('10%') }}>
                                <View style={{flexDirection:'row', marginVertical: 10}}>
                                    <View style={{width:10, height:10, backgroundColor:'#6990F0', borderRadius:20,alignSelf:'center'}}/>
                                    <Text style={{fontFamily: 'Corporate Rounded Bold',marginLeft:10, color:'grey'}}>Basic Plan 34%</Text>
                                </View>
                                <View style={{flexDirection:'row', marginVertical: 10}}>
                                    <View style={{width:10, height:10, backgroundColor:'#B198EF', borderRadius:20,alignSelf:'center'}}/>
                                    <Text style={{fontFamily: 'Corporate Rounded Bold',marginLeft:10, color:'grey'}}>SuperTrader 46%</Text>
                                </View>
                                <View style={{flexDirection:'row', marginVertical: 10}}>
                                    <View style={{width:10, height:10, backgroundColor:'#F6DDA2', borderRadius:20,alignSelf:'center'}}/>
                                    <Text style={{fontFamily: 'Corporate Rounded Bold',marginLeft:10, color:'grey'}}>Gold+ 20%</Text>
                                </View>
                            </View>
                        </View>
                   </View>
                </View>
            </SafeAreaView>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardPort1: {
        flex:0.2,
        borderRadius:18,
        alignSelf:'center',
        justifyContent:'center',
        marginTop: hp('2%')
        
    },
    cardPort2: {
        backgroundColor:'#B198EF',
        height:heightPercentageToDP('17%'),
        borderRadius:18,
        alignSelf:'center',
        justifyContent:'center',
        flexDirection:'column',
        width:widthPercentageToDP('93%')
    },
    cardPortText:{
        color:'white',
        marginLeft: 30,
        fontSize: 13,
        fontFamily: 'Corporate Rounded Bold',

    },
    cardPortText2:{
        color:'white',
        marginLeft: 30,
        fontSize: 20,
        fontFamily: 'Corporate Rounded Bold',
        marginTop: heightPercentageToDP('1%'),
        fontWeight:'bold'
    },
    image: {
        flex: 1,
        height: width / 1.1,
        justifyContent: "center",
    },
    input: {
        height: 40,
        justifyContent:'center',
        alignSelf:'center',
        width: width/1.7,
        fontSize: 17,
        color:'#000'
    }
})