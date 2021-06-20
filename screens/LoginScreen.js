import React from 'react';
import {View , Text , TextInput , StyleSheet , TouchableOpacity, Modal} from 'react-native'
import db from '../config'
import firebase from 'firebase'

class LoginScreen extends React.Component{

    constructor(){
        super();
        this.state={
            emailId: '',
            password: '',
            username: '',
            modalVisible: false,
        }        
    }

    setScreen  = () => {
        db.collection('CurrentRouteName').update({
            screen_name: 'LoginScreen'
        })
    }
    

    userLogin = (username, email , password) => {
        
        firebase.auth().signInWithEmailAndPassword(email, password).then(user => {
            this.props.navigation.navigate('todoScreen')

        }).catch(error => {
            
            if(error.message == 'There is no user record corresponding to this identifier. The user may have been deleted.')
            {
                alert('Your account does\'nt exist')
                console.log(username)
            }
            else{
                alert(error.message)
            }
        })
    }

    userSignUp = (email , password) => {
        firebase.auth().createUserWithEmailAndPassword(email , password).then(user => {
            alert('Account succesfully created')
        }).catch(error => {
            alert(error.message)
        })
    }

    render(){
        return(
            <View style={styles.textContainer}>
                {this.setScreen}
                <View>
                    <Text style={styles.text}>Login</Text>
                </View>
                <View style={styles.inputView}>
                    <TextInput placeholder={'UserName'}   style={styles.inputs} onChangeText={(username) => {
                        this.setState({
                            username: username.charAt(0).toUpperCase() + username.slice(1)
                        })
                        
                    }}/>
                    <TextInput placeholder={'Email'}   style={styles.inputs} onChangeText={(emailId) => {
                        this.setState({
                            emailId: emailId
                        })
                    }}/>
                    <TextInput secureTextEntry placeholder={'Password'}  style={styles.inputs} onChangeText={(password) => {
                        this.setState({
                            password: password
                        })
                    }}/>
                </View>
                <View>
                    <TouchableOpacity style={styles.btn} onPress = {() => {
                        this.userLogin( this.state.username, this.state.emailId , this.state.password)
                        if(this.state.username == '')
                        {
                            alert('Please enter your User name')
                        }
                    }}>
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={() => {
                        this.userSignUp(this.state.emailId, this.state.password)
                    }}>
                        <Text style={styles.btnText}>Sign up</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={styles.circle1}></View>
                    <View style={styles.circle2}></View>
                    <View style={styles.circle3}></View>
                </View>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    textContainer:{
        display: 'flex',
        alignItems: 'center'
    },

    text:{
        color:'#5EAAA8',
        fontSize: 55,
        fontWeight: '600',
        marginTop: '2rem'
    },

    inputs:{
      
        fontSize: 25,
        margin: '1rem',
        backgroundColor: 'white',
        padding: '0.8rem',
        textAlign: 'center',
        width: '32rem',
        borderRadius: 10,
        border : '2px solid white',
        color: '#F05945',
        shadowOffset: {width: 3, height:4},
        shadowColor: '#6B6868',
        shadowOpacity: 0.8,
        shadowRadius: 8,
        zIndex: 1

       
    },

    inputView:{
        paddingTop: '6rem',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '9rem'
    },
    btn:{
        backgroundColor: '#F05945',
        padding: '0.8em',
        borderRadius: 30,
        margin: '1rem',
        shadowOffset: {width: 7, height:8},
        shadowColor: '#6B6868',
        shadowOpacity: 0.8,
        shadowRadius: 8
    },

    btnText:{
        color: 'white',
        fontSize: 25,
        width: '13rem',
        fontWeight: '600',
        textAlign: 'center'
        
    },

    circle1:{
        height: 170,
        width: 170,
        borderRadius: '100%',
        backgroundColor: '#A3D2CA',
        opacity: '43%',
        position: 'absolute',
        bottom: '42rem',
        right: '1rem',

    },

    circle2:{
        height: 220,
        width: 220,
        borderRadius: '100%',
        opacity: '43%',
        backgroundColor: '#A3D2CA',
        position: 'absolute',
        bottom: '8rem',
        right: '47rem',

    },

    circle3:{
        height: 150,
        width: 150,
        borderRadius: '100%',
        backgroundColor: '#A3D2CA',
        opacity: '43%',
        position: 'absolute',
        bottom: '16rem',
        left: '12rem',

        zIndex: -1
    },


    
})

export default LoginScreen;