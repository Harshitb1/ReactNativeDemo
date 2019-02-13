import React from 'react';
import { StyleSheet, Text, View , TextInput,Button} from 'react-native';

export default class App extends React.Component {
  state={
    text: "",
    todo:[]
  }

  addTodo=()=>{
    // this.setState({todo:this.state.text});
    var newTodo = this.state.text;
    var arr = this.state.todo;
    arr.push(newTodo);
    this.setState({todo:arr});
  }

  renderTodos = () =>{
    return this.state.todo.map(t=>{
      return (
        <Text key={t}>{t}</Text>
      )
    })
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <Text>Open up App.js to start working on your app!!</Text>
        <TextInput 
          style={styles.inputStyle}
          onChangeText={(text)=>this.setState({text})}
        />
        <Button
          title="Add TODO"
          color="green"
          onPress={this.addTodo}
         />
         {this.renderTodos()}
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle:{
    height: 40,
    width: "50%" ,
    borderColor:"green",
    borderWidth: 1
  }
};

