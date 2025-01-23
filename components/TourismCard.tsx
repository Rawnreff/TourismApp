import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

type TourismCardProps = {
  id: string;
  name: string;
  country: string;
  description: string;
  rating: number;
  imageUrl: string;
};

const TourismCard = ({ id, name, country, description, rating, imageUrl }: TourismCardProps) => {
  return (
    <TouchableOpacity
      key={id}
      className="mb-6 p-4 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
    >
      <Image
        source={{ uri: imageUrl }}
        className="w-[365px] h-[200px] rounded-lg mb-4"
      />
      <Text className="text-2xl font-bold text-gray-900">{name}</Text>
      <Text className="text-lg text-gray-500">{country}</Text>
      <Text className="text-sm text-gray-600 mt-2 line-clamp-2">{description}</Text>
      <View className="mt-2 flex-row items-center">
        <Text className="text-sm text-yellow-500 font-semibold">Rating: {rating}★</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TourismCard;
