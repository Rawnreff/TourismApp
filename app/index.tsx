import React from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { tourismData } from '@/data/tourismData';

const IndexScreen = () => {
  return (
    <ScrollView className="bg-white p-4">
      {tourismData.map((destination) => (
        <TouchableOpacity
          key={destination.id}
          className="mb-6 p-4 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
        >
          <Image
            source={{ uri: destination.imageUrl }}
            className="w-[350px] h-[350px] rounded-lg mb-4"
          />

          <Text className="text-2xl font-bold text-gray-900">{destination.name}</Text>
          <Text className="text-lg text-gray-500">{destination.country}</Text>
          <Text className="text-sm text-gray-600 mt-2 line-clamp-2">{destination.description}</Text>
          <View className="mt-2 flex-row items-center">
            <Text className="text-sm text-yellow-500 font-semibold">Rating: {destination.rating}★</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default IndexScreen;