import React from 'react';
import { ScrollView } from 'react-native';
import { tourismData } from '@/data/tourismData';
import TourismCard from '@/components/TourismCard'; 
const IndexScreen = () => {
  return (
    <ScrollView className="bg-white p-4">
      {tourismData.map((destination) => (
        <TourismCard
          key={destination.id}
          id={destination.id}
          name={destination.name}
          country={destination.country}
          description={destination.description}
          rating={destination.rating}
          imageUrl={destination.imageUrl}
        />
      ))}
    </ScrollView>
  );
};

export default IndexScreen;