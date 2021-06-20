import React from 'react';
import {View , Text , TouchableOpacity ,StyleSheet , TextInput, FlatList } from 'react-native';
import {ListItem , Icon } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'

class TodoScreen extends React.Component{
    constructor(){
        super();
        this.state={
            tasksref: '',
            displayTaskText: [],
        }
       
    }

    
    setScreen  = () => {
        db.collection('CurrentRouteName').update({
            screen: 'TodoScreen'
        })
    }
    setTask = (task) => {

        if(task != undefined || task != ''){

            db.collection('Tasks').add({
                "task_name": task,
                "date": firebase.firestore.Timestamp.now()
            })
        }

        this.state.displayTaskText.push(this.state.tasksref)

        this.setState({ 
            tasksref: ''
        })
        


    }

    keyExtractor = (item , index) => index.toString();

    renderItem = ({item ,i}) => {
        return(
            <ListItem 
                rightElement = {<Icon name='times' type='fontawesome5'/>}
                key={i}
                
            />
        )
    }

    render() {
        return(
            
            <View style={styles.titleContainer}>
                {this.setScreen}
                <View>
                    <Text style={styles.title}>Todo App</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} value={this.state.tasksref}  placeholder='Write your tasks here' onChangeText={(val) => {this.setState({
                        tasksref: val
                    })}}/>
                    {this.state.displayTaskText.length != 0 ?
                    (<FlatList renderItem = {this.renderItem} keyExtractor = {this.keyExtractor} data={this.state.displayTaskText}/>) : (console.log(this.state.displayTaskText))}
                    <TouchableOpacity style={styles.plusbtn}    onPress={() => {this.setTask(this.state.tasksref)}}>
                        <Text style={styles.plustTxt}>+</Text>
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

const styles = StyleSheet.create({
    title:{
        color:'#F7F3E9',
        fontSize: 55,
        fontWeight: '600',
        marginTop: '2rem',
        fontWeight: 600
    },
    titleContainer:{
        textAlign: 'center'
    },
    input:{
        fontSize: 25,
        color: '#F05945',
        width: '30rem',
        padding: '1rem',
        textAlign:'center',
        position: 'relative',
        top : '10rem',
        border : '2px solid white',
        shadowColor: '#6B6868',
        shadowOpacity: 0.8,
        shadowRadius: 8,
        shadowOffset : {width: 3 , height: 4},
        backgroundColor: '#F7F3E9',
        borderRadius: 30,

        
    },

    inputContainer:{
        display: 'flex',
        alignItems: 'center',
        
    },
    plusbtn:{
        height: '4.3rem',
        width: '4.2rem',
        fontSize: 25,
        backgroundColor: '#F05945',
        position: 'relative',
        left: '13.4rem',
        top: '5.8rem',
        borderRadius: 30,
        textAlign: 'center',
        shadowColor: '#6B6868',
        shadowOpacity: 0.8,
        shadowRadius: 8,
        shadowOffset : {width: 5 , height: 6},

    },

    plustTxt:{
        fontSize: 45,
        color: '#F7F3E9',
        
    },
    circle1: {
        height: 90,
        width: 90,
        borderRadius: '50%',
        backgroundColor: '#F7F3E9',
        opacity: '43%',
        position: 'absolute',
        left: '60.9rem',
        bottom: '7.2rem'

      
    },

    circle2:{
        height: 200,
        width: 200,
        borderRadius: '50%',
        backgroundColor: '#F7F3E9',
        opacity: '43%',
        position: 'absolute',
        left: '-5rem',
        bottom: '-15.2rem' 
    },

    circle3:{
        height: 200,
        width: 200,
        borderRadius: '50%',
        backgroundColor: '#F7F3E9',
        opacity: '43%',
        position: 'absolute',
        left: '95rem',
        bottom: '-30.2rem' 
    }

})

export default TodoScreen;