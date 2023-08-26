import { View, Text, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import dashboardStyles from './styles'
import ACTIVITIES from '../../data/fakeActivities'
import ActivityItem from '../../component/ActivityItem'
import SymptomItem from '../../component/SymptomItem'
import SYMPTOMS from '../../data/fakeSymptom'
import DOCTORS from '../../data/fakeDoctor'

const Home = () => {
  return (
    <ScrollView>
      <View style={dashboardStyles.header}>
        <Text style={dashboardStyles.username}>Mickel Do</Text>
        <Image source={require('../../assets/image/Doctor_07.jpg')} style={dashboardStyles.userImg} />
      </View>
        <FlatList 
          style={dashboardStyles.activityList}
          horizontal={true}
          data={ACTIVITIES}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({item})=>{
            return(
              <ActivityItem item = {item} />
            )
          }}
        />
        <View style={dashboardStyles.symptomQuestion}>
          <Text style={dashboardStyles.question}>Quels symptômes avez-vous ?</Text>
        </View>
        <FlatList 
          style={dashboardStyles.activityList}
          horizontal={true}
          data={SYMPTOMS}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({item})=>{
            return(
              <SymptomItem item = {item} />
            )
          }}
        />
        <View style={dashboardStyles.symptomQuestion}>
          <Text style={dashboardStyles.textDoctor}>Nos docteurs</Text>
          <Text style={dashboardStyles.moreDoctor}>Tout afficher...</Text>
        </View>
        {
          DOCTORS.map(doctor => {
            return (
              <TouchableOpacity key={doctor.id} style={dashboardStyles.doctorItem}>
                <View style={dashboardStyles.doctorProfile}>
                  <Image source={{uri:`${doctor.image}`}} style={dashboardStyles.doctorImage} />
                  <Text style={dashboardStyles.doctorSpeciality}> {doctor.speciality} </Text>
                </View>
                <Text style={dashboardStyles.doctorName}> {doctor.name} </Text>
              </TouchableOpacity>
            )
          })
        }
        
    </ScrollView>
  )
}

export default Home