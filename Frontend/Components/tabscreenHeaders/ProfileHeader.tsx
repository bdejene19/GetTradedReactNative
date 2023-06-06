import { View, StyleSheet, Share } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faMessage, faShareFromSquare } from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from '@react-navigation/native'
import { ProfileDrawerParamList } from '../../Pages/types'
import { DrawerNavigationProp } from '@react-navigation/drawer'

export const ProfileHeaderRight = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => Share.share({ url: "www.facebook.com", message: `Share Profile`})}>
            <FontAwesomeIcon icon={faShareFromSquare} size={24}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <FontAwesomeIcon icon={faMessage} size={24}/>
        </TouchableOpacity>
    </View>
  )
}


interface HeaderLeft {
  menuPress: () => void;
}
export const ProfileHeaderLeft = () => {
  const navigation = useNavigation<DrawerNavigationProp<ProfileDrawerParamList>>();
    return (
      <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <FontAwesomeIcon icon={faBars} size={24}/>
          </TouchableOpacity>
      </View>
    )
  }

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        columnGap: 30,
        padding: 15,
    }

})