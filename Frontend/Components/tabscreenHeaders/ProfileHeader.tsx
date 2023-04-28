import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {  } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faMessage, faShareFromSquare } from '@fortawesome/free-solid-svg-icons'

export const ProfileHeaderRight = () => {
  return (
    <View style={styles.container}>
        <>
            <FontAwesomeIcon icon={faShareFromSquare} size={24}/>
        </>
        <>
            <FontAwesomeIcon icon={faMessage} size={24}/>
        </>
    </View>
  )
}

export const ProfileHeaderLeft = () => {
    return (
      <View style={styles.container}>
          <>
              <FontAwesomeIcon icon={faBars} size={24}/>
          </>
      </View>
    )
  }

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        columnGap: 30,
    }

})