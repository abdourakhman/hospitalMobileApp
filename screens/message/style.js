import { COLORS } from "../../helpers/constant";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    msgContainer:{
        marginTop:10,
        marginHorizontal:5,
        backgroundColor:COLORS.grey,
        elevation:5,
        borderRadius:5,
        paddingHorizontal:15,
        paddingVertical:15,
        flexDirection:"row",
        alignItems:"center"
    },
    usrMsg:{
        paddingHorizontal:30
    },
    username:{
        fontSize:20,
        color:"black"
    },  
    msgText:{
        fontSize:16,
        paddingVertical:5,
    },
    imgUsrMsg:{
        width:50,
        height:50,
        borderRadius:50
    },
    dateMsg:{
        color:"black",
        fontSize:14,
        fontWeight:"light",
    }
})

export default styles;