import { COLORS, PADDING, TEXT_SIZE } from "../../helpers/constant";

const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    
   container:{
    flex:1,
    paddingHorizontal:PADDING.horizontal,
    paddingVertical:PADDING.vertical
   },   
   header:{
    backgroundColor:"white",
    elevation:5,
    flexDirection:'row',
    padding:10,
    alignItems:"center",
   },
   image:{
    width:80,
    height:80,
    borderRadius:80/2
   },
   userInfo:{
    marginLeft:15
   },
   username:{
    fontSize:20,
    fontWeight:"bold",
    marginBottom:5
   },
   email:{
    fontSize:18,
    marginBottom:1,
   },
   containerSetting:{
    marginTop:15,
    backgroundColor:"white",
    elevation:5,
    flexDirection:"row",
    justifyContent:"space-between",
    paddingVertical:20,
    paddingHorizontal:PADDING.horizontal
   },
   textSetting:{
    fontSize:18,
    color:"black"
   }
})

export default styles;