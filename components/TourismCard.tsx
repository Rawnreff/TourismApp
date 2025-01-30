import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const TourismCard = ({ id, name, country, description, rating, imageUrl }) => {
  return (
    <View key={id} style={styles.card}>
      <Image 
        source={{ uri: imageUrl }} 
        style={styles.image} 
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.country}>{country}</Text>
      </View>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>⭐ {rating.toFixed(1)}</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
  },
  content: {
    marginTop: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  country: {
    fontSize: 16,
    color: '#666',
  },
  ratingContainer: {
    marginTop: 8,
    backgroundColor: '#FFF7D6',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  rating: {
    color: '#E5A00D',
    fontWeight: 'bold',
  },
  description: {
    marginTop: 12,
    color: '#555',
    lineHeight: 20,
  },
});

export default TourismCard;