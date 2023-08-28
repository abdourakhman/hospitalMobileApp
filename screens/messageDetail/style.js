const { StyleSheet } = require("react-native");
const { COLORS } = require("../../helpers/constant");

const styles = StyleSheet.create({
    container:{
        maxWidth:"85%",
        backgroundColor:COLORS.grey,
        margin:5,
        padding:10,
        elevation:2,
        borderRadius:10
    },
    containerInput:{
        padding:5,
        flexDirection:'row',
        justifyContent:"space-between",
        backgroundColor:'#eee',
    },
    input:{
        flex:1,
        backgroundColor:'white',
        borderWidth:2,
        borderTopColor:"white",
        borderBottomColor:"white",
        borderLeftColor:COLORS.main,
        borderRightColor:COLORS.main,
    },
    send:{
        color:"white",
        backgroundColor:COLORS.main,
        padding:10,
        paddingHorizontal:15,
        paddingVertical:15,
        alignItems:"center",
    }
})

export default styles;