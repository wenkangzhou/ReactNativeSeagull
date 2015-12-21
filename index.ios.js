'use strict';

var React = require('react-native');
var Home =  require('./view/home')
var {
    NavigatorIOS,
    AppRegistry,
    StyleSheet,
    Text,
    View,
} = React;

var Seagull = React.createClass({
  render: function() {
    return (
        <NavigatorIOS style={styles.container} 
            initialRoute={{
                title: 'SEAGULL',
                component: Home,
            }}
            barTintColor="#e5e5e5"
            titleTextColor="cornflowerblue"
            translucent={true}
        />
    );
  }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

AppRegistry.registerComponent('Seagull', () => Seagull);
