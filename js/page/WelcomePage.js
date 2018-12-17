import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native'
import RootNavigator  from '../navigator/AppNavigator'
import NavigationUtil from '../navigator/NavigationUtil'

type Props = {};

export default class WelcomePage extends Component<Props>{
    render(){
        return(<View style={styles.container}>
            <Text>welcome</Text>
        </View>);
    }

    componentDidMount(){
        this.timer = setTimeout(() => {
            NavigationUtil.resetToHomePage({
                navigation : this.props.navigation
            })
        },2000)
    }

    componentWillUnmount(){
        this.timer && clearTimeout(this.timer);
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }
});