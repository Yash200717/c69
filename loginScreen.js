import React from 'react';
import { Text, View, FlatList, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default class LoginScreen extends React.Component {
    constructor(){
        super()
        this.state = {
          emailID:'',
          password:''

        }
      }
      login =async(email,password)=>{
         if(email && password){
          try{
            const response= await firebase.auth().signInWithEmailAndPassword(email, password)
            console.log("not working")
             if(response){
              console.log("no resonse")
              this.props.navigation.navigate('Transaction')
            }
          }
            catch(error) {
              switch(error.code){
                case 'auth/user-not-found':
                  Alert.alert("User does not exist")
                  console.log('user-does-not-exist')
                  break;
                  case 'auth/invalid-emailID':
                  Alert.alert("Incorrect emailID or password")
                  console.log('invalid-emailID or password')
              }
              
            };
          
        }
        else {
          console.log("enter emailID and password")
        }
      }
    render(){

        return(
            <View>
                <Text>
                    login with your acount
                </Text>

                <TextInput 
          style ={styles.loginBox}
          keyboardType='email-address'
          placeholder =" ABCD@example.com"
          onChangeText={(text)=>{this.setState({emailID:text})}}
          />

            <TextInput 
          style ={styles.loginBox}
          secureTextEntry={true}
          placeholder =" Enter Password"
          onChangeText={(text)=>{this.setState({password:text})}}
           />

          <TouchableOpacity
            style = {styles.submit}
            onPress = {()=>{this.login(this.state.emailID,this.state.password)}}
          >
            <Text>
            Login
            </Text>
          </TouchableOpacity>
            
            </View>

        )
    }
        
    

}

const styles = StyleSheet.create({
    loginBox:{
        width:300,
        height:40,
        margin:10,
        borderWidth:1.5
            },
    submit :{
        width:90,
        height:30,
        marginTop:20,
        borderWidth:1.5
    }
    })



