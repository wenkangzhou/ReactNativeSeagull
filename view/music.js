'use strict';

var React = require('react-native');
var Swiper = require('react-native-swiper');
var Player = require('../component/player');
var {
    StyleSheet,
    Text,
    View,
    Image,
} = React;

var music = React.createClass({
    getInitialState: function() {
        return {
            selected0:false
        };
    },
    setStatus:function(id,playing){
        for(var i = 0 ; i < 3; i++){
            var mono = {}
            if(id == i && playing == false){
                mono["selected"+i] = true;
                this.setState(mono);
            }else{
                mono["selected"+i] = false;
                this.setState(mono);
            }
        }
        //ajax测试
        // var url = 'http://www.lazyseagull.com/getdataService';
        // var data = {
        //             "n" : "7",
        //             "nowdate" : "2015-12-15",
        //             "type" : "photo"
        //         }
        // url = 'http://m.ctrip.com/restapi/soa2/10079/SHXHomeAd';
        // data = {
        //     "contentType":"json"
        // }     
        // this.post(url,data,function(data){
        //     console.log(data)
        // })
    },
    //post测试
    post: function (url, data, callback) {
        var fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        fetch(url, fetchOptions)
            .then((response) => response.text())
            .then((responseText) => {
                callback(JSON.parse(responseText));
            })
            .catch(e => console.log("Oops, error", e));
    },
    test: function() {
        return (
            <View style={styles.slide}>
                <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
                    <Text>动态生成</Text>
                </View>
            </View>
        )
    },
    render: function() {
        return (
            <Swiper 
                showsButtons={false} 
                loop={false} 
                onMomentumScrollEnd={this._onMomentumScrollEnd}
            >

                
                <View style={styles.slide}>
                    <View  style={styles.imgview} >
                        <Image style={styles.rorateimg} source={require('../img/tao_20151203.png')}/>
                        <View style={styles.insiderorate}></View>
                        <Player
                            url={"http://www.lazyseagull.com/audio/20151207.m4a"}
                            title={"hello"}
                            selected={this.state.selected0}
                            index={0}
                            setStatus={this.setStatus}
                        />
                        <Text style={styles.text}>陈鸿宇-理想三旬</Text>
                    </View>
                </View>

                <View style={styles.slide}>
                    <View  style={styles.imgview} >
                        <Image style={styles.rorateimg} source={require('../img/tao_20151203.png')}/>
                        <View style={styles.insiderorate}></View>
                        <Player
                            url={"http://www.lazyseagull.com/audio/20151208.m4a"}
                            title={"hello1"}
                            selected={this.state.selected1}
                            index={1}
                            setStatus={this.setStatus}
                        />
                        <Text style={styles.text}>杨千嬅-再见二丁目</Text>
                    </View>
                </View>

                <View style={styles.slide}>
                    <View  style={styles.imgview} >
                        <Image style={styles.rorateimg} source={require('../img/tao_20151203.png')}/>
                        <View style={styles.insiderorate}></View>
                        <Player
                            url={"http://www.lazyseagull.com/audio/20151221.m4a"}
                            title={"hello2"}
                            selected={this.state.selected2}
                            index={2}
                            setStatus={this.setStatus}
                        />
                        <Text style={styles.text}>王梵瑞-鼓楼先生</Text>
                    </View>
                </View>
                {
                    this.test()
                }
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
    rorateimg: {
        width:240,
        height:240,
        borderRadius:120,
    },
    imgview: {
        width:240,
        height:240,
    },
    insiderorate: {
        position:'absolute',
        backgroundColor:'rgba(40, 180, 240, 0.5)',
        borderRadius:40,
        width:80,
        height:80,
        top:80,
        left:80
    },
    text: {
        marginTop:20,
        color: '#908F8F',
        fontSize: 14,
        fontWeight: '100',
        textAlign:'center'
    }
});

module.exports = music;
