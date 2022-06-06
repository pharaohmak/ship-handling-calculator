import React from 'react';
import { TouchableHighlight } from 'react-native';
import { Text, Alert } from 'react-native';
import { TextInput } from 'react-native';
import { View, StyleSheet } from 'react-native';


class CalculateAnchorSwingCircle extends React.Component {
   
  constructor(props) {
    super(props);
  
    this.state = {
      firstValue: '',
      secondValue: '',
      sum: 0
    };
  }
  
  calculateSum = () => {
    const { firstValue, secondValue } = this.state;
  
    this.setState({
      sum: ((Math.round(Number(firstValue)) * 27.5) + Number(secondValue))/1852
    });
    this.ButtonAlert()
  }

  ButtonAlert = () => {
    Alert.alert(
      "Anchor Swing Circle ",
      `Swing Circle ${this.state.sum.toFixed(2)} (nm)`,
      [
        { text: "OK", onPress: () => console.log(Math.round(`${this.state.sum}`)) }
      ]
    );

  }


  render() {
    return (
      <View>
        <Text style={styles.text}># Of Shackles (decimal)</Text>
        <TextInput
        style={styles.input}
          value={this.state.firstValue}
          onChangeText={(firstValue) => this.setState({firstValue})}
        />
  
        <Text style={styles.text}>Vessel LOA (meters)</Text>
        <TextInput
        style={styles.input}
          value={this.state.secondValue}
          onChangeText={(secondValue) => this.setState({secondValue})}
        />
  
        <TouchableHighlight style={styles.button} onPress={this.calculateSum}>
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableHighlight>
  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'

  },
  text: {
    color: 'black',
    fontSize: 18,
    padding: 10,
    
  },
  input: {
    backgroundColor: 'grey',
    width: 300,
    height: 35,
    color: 'white'
  },
  button: {
    padding: 18,
    margin: 16,
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 50
  },
  buttonText: {
    fontSize: 20,
    color: 'white'
  },
})

export default CalculateAnchorSwingCircle;
