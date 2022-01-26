import { StyleSheet } from "react-native";

//can create more than one stylesheet
const styles = StyleSheet.create ({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'blue',
    },
    textTopStyle:{
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 16,
        color: 'black',
        backgroundColor:'yellow',
    },
    textBottomStyle:{
        fontSize: 16,
        textAlign: 'center',
        color: 'white',
        backgroundColor:'pink',
    },
})

export {styles}