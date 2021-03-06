import React, {Component} from 'react'
import { StyleSheet, View } from 'react-native'

import Home from './components/Home.component'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Home />
      </View>
    )
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})