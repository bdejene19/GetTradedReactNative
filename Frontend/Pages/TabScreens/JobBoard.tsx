import { View, ViewStyle } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import JobCard from '../../Components/JobCard'

const cardStyle: ViewStyle = {
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 1.5,
    shadowOffset: { width: 3, height: 3 },
    shadowColor: 'black',
    shadowOpacity: 1,
    backgroundColor: 'white',
    height: '30%',
    width: 150,
    flexGrow: 1,
}
export default function JobBoard() {
  return (
    <View style={styles.cardContainer}>
        <JobCard header='Carpenter' bottomColor='blue' cardStyle={cardStyle} onPress={() => null}/>
        <JobCard header='Landscaper' cardStyle={cardStyle} bottomColor={'lightgreen'} onPress={() => null}/>
        <JobCard header='Plumber' bottomColor='lightblue' cardStyle={cardStyle} onPress={() => null}/>
        <JobCard header='Service Worker' cardStyle={cardStyle} onPress={() => null}/>
        <JobCard header='Electrician' cardStyle={cardStyle} onPress={() => null}/>
    </View>
  )
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        flexWrap: "wrap",
        width: '100%',
        height: '100%',
        borderColor: 'black',
        borderWidth: 1.5,
        columnGap: 10,
        rowGap: 15,
        justifyContent: 'space-evenly',
    }
})