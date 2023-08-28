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
})

export default styles;