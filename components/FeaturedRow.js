import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './ResturantCard'

const FeaturedRow = ({id,title,description}) => {
  return (
    <View>
        <View className='mt-4 flex-row items-center justify-between px-4'>
            <Text className='font-bold text-lg'>{title}</Text>
            <ArrowRightIcon color='#00CC88'/>
        </View>
        <Text className='text-xs text-gray-500 px-4'>{description}</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal:15,
        }}
        className='pt-4'
        >
            {/* Restaurant card*/}
            <RestaurantCard id={123} rating={4.5} genre={"Japanese"} address={"Kolfe"} dishes={[]} lang={20} lat={10}
            imageUrl="https://links.papareact.com/gn7" title={"Testing 1"} short_description={"Test desc"} />
            <RestaurantCard id={123} rating={4.5} genre={"Japanese"} address={"Kolfe"} dishes={[]} lang={20} lat={10}
            imageUrl="https://links.papareact.com/gn7" title={"Testing 1"} short_description={"Test desc"} />
            <RestaurantCard id={123} rating={4.5} genre={"Japanese"} address={"Kolfe"} dishes={[]} lang={20} lat={10}
            imageUrl="https://links.papareact.com/gn7" title={"Testing 1"} short_description={"Test desc"} />
        </ScrollView>
    </View>
  )
}

export default FeaturedRow