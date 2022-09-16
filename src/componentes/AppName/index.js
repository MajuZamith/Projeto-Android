import { Text, StyleSheet} from "react-native-web";

export default function AppName({children}){
    return(
        <>
            <Text style={StyleSheet.AppName}>
                {children}
            </Text>
        </>
    )
} 
const styles = StyleSheet.create({
    AppName:{
        fontSize:30,
        fontWeight:'bold',
        color:'black'
    },
});


