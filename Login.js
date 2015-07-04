'use strict';

var React = require('react-native');

let {
    Text,
    View,
    StyleSheet,
    Image,
    Component,
    TextInput,
    TouchableHighlight
} = React;

class Login extends Component {
	constructor(props){
        super(props);

        this.state = {
            showProgress: false
        }
    }

    render() {
    	return (
    		
    		<View style={styles.header}>
                <Image style={styles.backgroundImage} source={require('image!background') } > 
                <Text style={styles.heading}> Zodiac - Your Horoscope - 2015 </Text>
				</Image>
				<TextInput
	                onChangeText={(text)=> this.setState({username: text})}
	                style={styles.loginInput}
	                placeholder="Github username"></TextInput> 
				<TextInput
	                onChangeText={(text)=> this.setState({password: text})}
	                style={styles.loginInput}
	                placeholder="Github password" secureTextEntry="true"></TextInput>
	            <TouchableHighlight
	                // onPress={this.onLoginPressed.bind(this)}
	                style={styles.button}>
	                <Text style={styles.buttonText}>Sign in</Text>
	            </TouchableHighlight>
            </View>
    	)
    }
}

let styles = StyleSheet.create({
    container: {
        paddingTop: 150,
        padding: 100,
        alignItems: 'center',
        flex: 1
    },
     header: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'column',
        paddingTop: 25,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    logo: {
        width: 66,
        height:55
    },
    backgroundImage: {
        paddingTop: 60,
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: -100
    },
    bgImageWrapper: {
        position: 'absolute',
        top: 0, bottom: 0, left: 0, right: 0
    },
    heading: {
        fontSize: 25.2,
        color: '#F0FFFF',
        backgroundColor: '#3F51B5'
    },
    loginInput: {
        color: '#F0FFFF',
        height: 50,
        marginTop: 10,
        padding: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 10,
        backgroundColor: '#3F51B5',
        bottom: -350
    },
    button: {
        height: 50,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        alignSelf: 'stretch',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        bottom: -350
    },
    buttonText: {
        color: '#fff',
        fontSize: 24
    },
    loader: {
        marginTop: 20
    },
    error: {
        color: 'red',
        paddingTop: 10
    }
});

module.exports = Login;