import { StyleSheet } from "react-native"

export default StyleSheet.create({
    bookContainer: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      width: 150,
      marginRight: 10,
    },
    container: {
      marginTop: 80,
      backgroundColor: '#000',
      alignItems: 'center'
    },
    title: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    subTitle: {
      color: 'white',
      fontSize: 12,
    },
    logo: {
      height: 100,
      width: 100,
    },
    answerButtonContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    buttonStyle: {
      color: 'white'
    },
    buttonStyleWrong: {
      color: 'red'
    },
    buttonStyleRight: {
      color: 'green'
    },
    nav: {
      backgroundColor: '#000'
    },
    saveButton: {
      borderWidth: 1,
      borderColor: '#007BFF',
      backgroundColor: '#007BFF',
      padding: 15,
      margin: 5
    },
    saveButtonText: {
      color: '#FFFFFF',
      width: 200,
      fontSize: 20,
      textAlign: 'center'
    },
    inputContainer: {
      paddingTop: 15
    },
    textInput: {
      backgroundColor: '#30343A',
      color: 'white',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      height: 50,
      width: 200,
      fontSize: 25,
      paddingLeft: 20,
      paddingRight: 20,
      margin: 5,
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    header: {
      fontSize: 32,
      backgroundColor: "#fff"
    }
  });