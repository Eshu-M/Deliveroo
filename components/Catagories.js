import { ScrollView } from 'react-native'
import React from 'react'
import Category from './catagory'
const Catagories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10
      }}>

      {/*Catagories*/}
      <Category imageUrl="https://links.papareact.com/gn7" title={"Testing 1"}/>
      <Category imageUrl="https://links.papareact.com/gn7" title={"Testing 2"}/>
      <Category imageUrl="https://links.papareact.com/gn7" title={"Testing 3"}/>
      <Category imageUrl="https://links.papareact.com/gn7" title={"Testing 4"}/>
      <Category imageUrl="https://links.papareact.com/gn7" title={"Testing 5"}/>
      <Category imageUrl="https://links.papareact.com/gn7" title={"Testing 6"}/>
      <Category imageUrl="https://links.papareact.com/gn7" title={"Testing 7"}/>
    </ScrollView>
  )
}

export default Catagories