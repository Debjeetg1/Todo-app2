import React from 'react'
import {View , Text , StyleSheet} from 'react-native'
import LoginScreen from './screens/LoginScreen'
import TodoScreen from './screens/TodoScreen'
import {createAppContainer , createSwitchNavigator}  from 'react-navigation'

class App extends React.Component {
  render() {
    return(
      <View style={styles.container2}>
         <TodoScreen/>
         {/* <AppContainer /> */}
      </View>
    )
  }
}

var screens = createSwitchNavigator({
  loginScreen: {screen:LoginScreen},
  todoScreen: {screen:TodoScreen},

})

var AppContainer = createAppContainer(screens)





const styles = StyleSheet.create({
  container:{
    backgroundColor: '#F7F3E9',
    minHeight: '100vh'
  }, 
  container2:{
    backgroundColor: '#A3D2CA',
    minHeight: '100vh'
  }
})

export default App;