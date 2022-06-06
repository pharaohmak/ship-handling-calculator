import React from 'react';
import { TouchableHighlight } from 'react-native';
import { Text } from 'react-native';
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
  
        <TouchableHighlight onPress={this.calculateSum}>
          <Text>Calculate</Text>
        </TouchableHighlight>
  
        <Text>{`Sum ${this.state.sum.toFixed(2)}`}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  text: {
    color: 'black',
    fontSize: 16,
  },
  input: {
    backgroundColor: 'grey'
  }
})

export default CalculateAnchorSwingCircle;
