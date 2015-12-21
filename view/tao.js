'use strict';

var React = require('react-native');
var Swiper = require('react-native-swiper');
var {
    StyleSheet,
    Text,
    View,
    Image
} = React;

var tao = React.createClass({
    render: function() {
        return (
            <Swiper
                showsButtons={false} 
                loop={false} 
                onMomentumScrollEnd={this._onMomentumScrollEnd}
            >
                <View style={styles.slide}>
                    <Image style={styles.img} source={require('../img/tao_20151213.png')}/>
                    <View style={styles.info}>
                        <Text style={styles.text}>
                            &nbsp;&nbsp;&nbsp;&nbsp;Narrative - 可穿戴相机。捕捉重要时刻的便携式相机，电池一次可用两天之久。多达 6000 张照片的存储空间。可以捕捉你与家人旅行、户外活动珍贵时刻的真实镜头。
                        </Text>
                    </View>
                </View>
                <View style={styles.slide}>
                    <View  style={styles.imgview} >
                        <Image style={styles.rorateimg} source={require('../img/tao_20151203.png')}/>
                        <Text style={styles.imgtext} >测试</Text>
                    </View>
                </View>
                <View style={styles.slide}>
                    <Image style={styles.img} source={require('../img/tao_20151213.png')}/>
                    <View style={styles.info}>
                        <Text style={styles.text}>
                            &nbsp;&nbsp;&nbsp;&nbsp;Just do it later 拖延症 T 恤。办公室作死良品。
                        </Text>
                    </View>
                </View>
            </Swiper>   
        );
    }
});

var styles = StyleSheet.create({
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
    },
    img: {
        width:240,
        height:240,
        borderWidth: 2,
        borderColor: '#FFF'
    },
    info: {
        width:270,
        marginTop:10
    },
    text: {
        color: '#908F8F',
        fontSize: 14,
        fontWeight: '100',
        textAlign:'left'
    },
    rorateimg: {
        width:240,
        height:240,
        borderRadius:120,
    },
    imgview:{
        width:240,
        height:240,
    },
    imgtext:{
        position:'absolute',
        backgroundColor:'rgba(40, 180, 240, 0.5)',
        top:100,
        left:100
    }
});

module.exports = tao;
