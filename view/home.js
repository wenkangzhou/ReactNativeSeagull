'use strict';

var React = require('react-native');
var musicP = require("../view/music");
var picP = require("../view/pic");
var taoP = require("../view/tao");
var {
    StyleSheet,
    View,
    ActivityIndicatorIOS,
    TabBarIOS,
    NavigatorIOS
} = React;

var home = React.createClass({
    getInitialState: function() {
        return {
            selectedTab: 'pic',
            isLoading:true
        };
    },
    componentDidMount: function() {
        console.log("####componentDidMount#####");
    },
    _selectTab: function(tabName) {
        this.setState({
            selectedTab: tabName
        });
    },
    _addNavigator: function(component,name) {
        return <NavigatorIOS
                    style={{flex:1}}
                    initialRoute={{
                        component: component,
                        title: name
                    }}
                />;
    },
    render: function() {
        var self = this;
        setTimeout(function(){self.setState({isLoading : false});}, 1000);
        return (
            <View style={{flex:1}}>
                {
                    this.state.isLoading ?
                    <View style={styles.container}>
                        <ActivityIndicatorIOS size="large" color="#268DFF"></ActivityIndicatorIOS>
                    </View>
                    :
                    <View style={{flex:1}}>
                        <TabBarIOS barTintColor="#FFF" tintColor="cornflowerblue">
                            <TabBarIOS.Item
                                title='图'
                                icon={require('../img/flux.png')}
                                selected={this.state.selectedTab === 'pic'}
                                onPress={this._selectTab.bind(this, 'pic')}
                            >
                                {this._addNavigator(picP, '图')}
                            </TabBarIOS.Item>

                            <TabBarIOS.Item
                                title='音'
                                icon={require('../img/flux.png')}
                                selected={this.state.selectedTab === 'music'}
                                onPress={this._selectTab.bind(this, 'music')}
                            >
                                {this._addNavigator(musicP, '音')}
                            </TabBarIOS.Item>

                            <TabBarIOS.Item
                                title='淘'
                                icon={require('../img/flux.png')}
                                selected={this.state.selectedTab === 'tao'}
                                onPress={this._selectTab.bind(this, 'tao')}
                            >
                                {this._addNavigator(taoP, '淘')}
                            </TabBarIOS.Item>
                        </TabBarIOS>
                    </View>
                }   
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

module.exports = home;
