'use strict';

var React = require('react-native');
var Swiper = require('react-native-swiper');
var {
    StyleSheet,
    Text,
    View,
    Image
} = React;

var pic = React.createClass({
    _onMomentumScrollEnd: function(e, state, context){
        console.log("######pic######")
        console.log(e,context,state)
        console.log("######"+state.index+"######")
    },
    render: function() {
        return (
            <Swiper 
                showsButtons={false} 
                loop={false} 
                onMomentumScrollEnd={this._onMomentumScrollEnd}
            >

                <View style={styles.slide}>
                    <View style={styles.container}>
                        <View style={styles.titlebar}>
                            <Text style={styles.containerText}>V.929</Text>
                        </View>
                        <Image source={{uri: 'http://www.lazyseagull.com/img/photo/photo_20151215.png'}} style={styles.img}/>
                        <View style={styles.info}>
                            <Text style={styles.infoText}>我的故事里没有英雄</Text>
                            <Text style={styles.infoText}>by 炒鸡大师</Text>
                        </View>
                        <View style={styles.story}>
                            <View style={styles.storyDay}>
                                <Text style={styles.storyDayText}>星期三</Text>
                                <Text style={styles.storyDayText}>2015-12-31</Text>
                            </View>
                            <View style={styles.storyInfo}>
                                <Text style={styles.storyInfoText}>青春将近，天赋的本钱日渐告罄，而肉体上精神上开支浩繁，魔鬼来放高利贷了。by木心</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.slide}>
                    <View style={styles.container}>
                        <View style={styles.titlebar}>
                            <Text style={styles.containerText}>V.930</Text>
                        </View>
                        <Image source={{uri: 'http://www.lazyseagull.com/img/photo/photo_20151216.png'}} style={styles.img}/>
                        <View style={styles.info}>
                            <Text style={styles.infoText}>滴血大教堂</Text>
                            <Text style={styles.infoText}>by 没有关系</Text>
                        </View>
                        <View style={styles.story}>
                            <View style={styles.storyDay}>
                                <Text style={styles.storyDayText}>星期二</Text>
                                <Text style={styles.storyDayText}>2015-12-30</Text>
                            </View>
                            <View style={styles.storyInfo}>
                                <Text style={styles.storyInfoText}>什么关系，什么冠希，没有关系。by 陈冠希</Text>
                            </View>
                        </View>
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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerText:{
        fontSize:12,
        color:'#908F8F'
    },
    titlebar:{
        width:240,
        height:30,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:'#908F8F',
        justifyContent:'center'
    },
    img: {
        width: 240,
        height: 180,
        margin:10,
        borderWidth:2,
        borderColor:'#FFF'
    },
    info: {
        width:240,
        height:30
    },
    infoText: {
        textAlign:'right',
        fontSize:12,
        color:'#908F8F'
    },
    story: {
        width:270,
        flexWrap:'wrap',
        justifyContent:'space-between',
        flexDirection:'row',
        marginTop:5
    },
    storyDay: {
        width:75
    },
    storyDayText: {
        textAlign:'left',
        fontSize:12,
        color:'#8ED6F2',
        margin:2,
        fontWeight:'500'
    },
    storyInfoText: {
        textAlign:'left',
        fontSize:12,
        color:'#FFF'
    },
    storyInfo: {
        width:195,
        borderRadius:6,
        borderWidth:2,
        borderColor:'#FFF',
        padding:2,
        backgroundColor:'#8ED6F2'
    }
});

module.exports = pic;
