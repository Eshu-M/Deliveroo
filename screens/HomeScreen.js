import { Text, View, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import {
 UserIcon,
 AdjustmentsHorizontalIcon,
 ChevronDownIcon,
 MagnifyingGlassIcon,
} from "react-native-heroicons/outline"

import Catagories from '../components/catagories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
    const navigation=useNavigation();
    useLayoutEffect(()=> {
        navigation.setOptions({
            headerShown:false,
        })
    },[]);
  return (
        <View className='mt-5 bg-white'>
            {/* Header */}
            <View className='flex-row pb-3 items-center space-x-2  pt-5 px-2'>
                <Image className='h-7 w-7 bg-gray-300 p-4 rounded-full object-cover' source={{uri:"https://links.papareact.com/wru"}}/>
                <View className='flex-1'>
                    <Text className='font-bold text-gray-400 text-xs'>Deliver Now</Text>
                    <Text className='font-bold text-xl'>Current location
                        <ChevronDownIcon size={20} color='#00CC88'/>
                    </Text>
                </View>
                <UserIcon size={35} color='#00CC88'/>
            </View>
            {/* Search */}
            <View className='flex-row items-center pb-2 space-x-2 px-2'>
                <View className='flex-row flex-1 p-3 space-x-2 bg-gray-200 items-center'>
                    <MagnifyingGlassIcon size={20} color="grey"/>
                    <TextInput placeholder='Restaurants and cuisines' keyboardType='default'/>
                </View>
                <AdjustmentsHorizontalIcon color='#00CC88'/>
            </View>

            {/* Body */}

            <ScrollView 
            className='bg-gray-100'
            contentContainerStyle={{
                paddingBottom:100,
            }}>
                {/* Catagories */}
                <Catagories/>
                {/* Featured rows */}

                <FeaturedRow id='123' title="Featured" description="Paid placements from our partners" />

                <FeaturedRow id='1234' title="Tasty Discounts" description="Everyone's been enjoying these juicy discounts" />

                <FeaturedRow id='1235' title="Offers near you" description="Why not support your local restaurants tonight" />
            </ScrollView>
        </View>
  )
}

export default HomeScreen