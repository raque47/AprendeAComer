import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    render() {
        return (
            <View style={styles.passwordContainer}>
                <Icon style={styles.searchIcon}
                name={this.props.iconName}
                color='white'
                size={18}
                />
            <TextInput
                style={styles.inputStyle}
                autoCorrect={false}
                secureTextEntry={this.props.secureTextEntry}
                placeholder={this.props.placeholder}
                value={this.state.text}
                onChangeText={(text) => this.setState({text})}
            />
         </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'purple',
        height: 70
    },
    box:{
        flex: 1,
        height: 45, 
        marginRight: 40
    },
    icon:{
        marginLeft: 10
    },
    inputLogin:{
        backgroundColor: 'gray', 
        opacity: 0.5,
    },
    welcome: {
        fontSize: 20,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
},
searchIcon: {
    padding: 10,
},
input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: 'yellow',
},
passwordContainer: {
    flexDirection: 'row',
    marginLeft: 35,
    marginRight: 35,
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  inputStyle: {
    flex: 1,
    fontSize: 15,
  },
});
