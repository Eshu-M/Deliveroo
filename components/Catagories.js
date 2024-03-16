import { ScrollView } from 'react-native'
import React from 'react'
import Category from './catagory'

const Catagories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom:15,
        paddingTop:10
      }}>
        
      {/*Catagories*/}
      <Category/>
    </ScrollView>
  )
}

export default Catagories