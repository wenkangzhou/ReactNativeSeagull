var React = require('react-native');
var Video = require('react-native-video');
var {
    Image,
    PixelRatio,
    TouchableOpacity,
    StyleSheet,
    Text,
    View
} = React;

var Player = React.createClass({
    loadStart() {
    },

    onEnd() {
    },

    setDuration() {
    },

    videoError() {
    },

    getInitialState() {
        return {
            selected:this.props.selected
        }
    },

    play() {
        this.props.setStatus(this.props.index,this.props.selected || false);
    },

    renderVideo() {
        return (
            <Video source={{uri: this.props.url}} // Can be a URL or a local file.
                rate={1.0}                   // 0 is paused, 1 is normal.
                volume={1.0}                 // 0 is muted, 1 is normal.
                muted={false}                // Mutes the audio entirely.
                paused={!this.props.selected}   // Pauses playback entirely.
                resizeMode="contain"           // Fill the whole screen at aspect ratio.
                repeat={true}                // Repeat forever.
                onLoadStart={this.loadStart} // Callback when video starts to load
                onLoad={this.setDuration}    // Callback when video loads
                onProgress={this.setTime}    // Callback every ~250ms with currentTime
                onEnd={this.onEnd}           // Callback when playback finishes
                onError={this.videoError}    // Callback when video cannot be loaded
            />
        )
    },

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.row]}>
                    <TouchableOpacity style={this.props.selected ? styles.paused : styles.start} onPress={this.play}/>
                </View>
                {
                    this.props.url && this.renderVideo()
                }
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        position:'absolute',
        top:100,
        left:100
    },
    row: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        fontWeight: 'bold',
        color: '#000'
    },
    start: {
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderTopWidth: 20,
        borderRightWidth: 0,
        borderBottomWidth: 20,
        borderLeftWidth: 40,
        borderLeftColor: '#fff',
        borderTopColor: 'rgba(40, 180, 240, 0.5)0',
        borderBottomColor: 'rgba(40, 180, 240, 0.5)',
    },
    paused: {
        width: 40,
        height: 40,
        backgroundColor: '#fff'
    }
});

module.exports = Player;