import { COLORS, PADDING, TEXT_SIZE } from "../../helpers/constant";

const { StyleSheet } = require("react-native");

const dashboardStyles = StyleSheet.create({
    //Header
    header:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        backgroundColor:COLORS.grey,
        paddingVertical:PADDING.vertical,
        paddingHorizontal:PADDING.horizontal,
    },
    userImg:{
        width:70,
        height:70,
        borderRadius:50
    },
    username:{
        fontSize:16,
        fontWeight:"bold"
    },
    //End header

    //activities
    activityList:{
        marginTop:10,
        paddingHorizontal:PADDING.horizontal,
        paddingVertical:PADDING.vertical,
    },
    activityItem:{
        backgroundColor:COLORS.grey,
        paddingHorizontal:16,
        paddingVertical:16,
        borderRadius:15,
        marginRight:10,
        marginBottom:2,
        elevation:1
    },
    title:{
        fontSize:TEXT_SIZE.title,
        marginTop:5,
    },
    subtitle:{
        marginTop:10,
        fontSize:TEXT_SIZE.basic,
    },
    //End activities

    //symptoms
    symptomQuestion:{
        display:"flex",
        flexDirection:"row",
        paddingHorizontal:PADDING.horizontal,
        justifyContent:"space-between",
    },
    question:{
        fontSize:17,
        fontWeight:"bold"
    },
    imageSymptom:{
        width:50,
        height:50
    },
    symptomItem:{
        backgroundColor:COLORS.grey,
        paddingHorizontal:16,
        alignItems:"center",
        width:190,
        paddingVertical:16,
        borderRadius:15,
        display:"flex",
        marginRight:10,
        marginBottom:2,
        elevation:2
    },
    //End symptoms

    //Doctor
    textDoctor:{
        fontSize:17,
        fontWeight:"bold",
    },
    moreDoctor:{
        fontSize:17,
        color:COLORS.main,
    },
    doctorItem:{
        marginTop:10,
        backgroundColor:COLORS.grey,
        paddingHorizontal:16,
        width:"100%",
        paddingVertical:16,
        borderRadius:15,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginRight:10,
        marginBottom:2,
        elevation:2
    },
    doctorProfile:{
        flex:2,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
    },
    doctorImage:{
        width:80,
        height:80,
        borderRadius:50
    },
    doctorSpeciality:{
        fontSize:16,
        backgroundColor:'blue',
        color:"white",
        textAlign:"center",
        borderRadius:25,
        marginLeft:5,
        width:100,
    },
    doctorName:{
        fontSize:18,
    }
})

export default dashboardStyles;