import { Pressable,StyleSheet } from "react-native";
import{Ionicons} from '@expo/vector-icons'

function IconButton({icon,color,onPress}){
    return(
        <Pressable onPress={onPress} style={({pressed})=>[styles.buttonContainer,{opacity:pressed?0.75:1}]}>
            <Ionicons name={icon} size={30} color={color} />
        </Pressable>
    )
}

export default IconButton;

const styles=StyleSheet.create({
    buttonContainer:{
        borderRadius:24,
        padding:6,
        marginHorizontal:8,
        marginVertical:2
    },
    pressed:{
        opacity:0.75
    }
})