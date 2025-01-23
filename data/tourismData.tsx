export interface TouristDestination {
  id: number;
  name: string;
  country: string;
  description: string;
  rating: number;
  annualVisitors: number;
  imageUrl: string;
}

export const tourismData: TouristDestination[] = [
  {
    id: 1,
    name: "Eiffel Tower",
    country: "France",
    description: "Iconic iron lattice tower on the Champ de Mars in Paris.",
    rating: 4.6,
    annualVisitors: 7000000,
    imageUrl: "https://asset.kompas.com/crops/XuVdbAj_SjMPbY1nVR8aGM5_zBY=/0x0:1024x683/1200x800/data/photo/2022/05/05/6273457a5606c.jpg",
  },
  {
    id: 2,
    name: "Machu Picchu",
    country: "Peru",
    description: "Ancient Incan city set high in the Andes Mountains.",
    rating: 4.8,
    annualVisitors: 1500000,
    imageUrl: "https://asset.kompas.com/crops/jRONoaNmoDxMSkr1fT1zY9uJHlo=/0x0:500x333/780x390/data/photo/2019/12/21/5dfdac80c1158.jpg",
  },
  {
    id: 3,
    name: "Great Wall of China",
    country: "China",
    description:
      "Series of fortifications and walls built across the historical northern borders of ancient Chinese states.",
    rating: 4.7,
    annualVisitors: 10000000,
    imageUrl: "https://cdn.thecollector.com/wp-content/uploads/2020/08/great-wall-of-china-photo-smithsonian.jpg",
  },
  {
    id: 4,
    name: "Taj Mahal",
    country: "India",
    description:
      "Ivory-white marble mausoleum on the right bank of the river Yamuna in Agra.",
    rating: 4.7,
    annualVisitors: 8000000,
    imageUrl: "https://awsimages.detik.net.id/community/media/visual/2019/11/20/5a8b7504-ce70-4584-bc0d-f680ebe45eab_43.jpeg?w=600&q=90",
  },
  {
    id: 5,
    name: "Santorini",
    country: "Greece",
    description:
      "Beautiful island known for its stunning sunsets, white-washed buildings, and blue-domed churches.",
    rating: 4.9,
    annualVisitors: 2000000,
    imageUrl: "https://plus.unsplash.com/premium_photo-1661964149725-fbf14eabd38c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2FudG9yaW5pfGVufDB8fDB8fHww",
  },
  {
    id: 6,
    name: "Grand Canyon",
    country: "United States",
    description: "Steep-sided canyon carved by the Colorado River in Arizona.",
    rating: 4.8,
    annualVisitors: 6000000,
    imageUrl: "https://plus.unsplash.com/premium_photo-1669050701110-a5eb879f1b6a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhbmQlMjBjYW55b258ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 7,
    name: "Petra",
    country: "Jordan",
    description:
      "Famous archaeological site containing rock-cut architecture and water conduit system.",
    rating: 4.8,
    annualVisitors: 1000000,
    imageUrl: "https://images.unsplash.com/photo-1501232060322-aa87215ab531?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGV0cmF8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 8,
    name: "Bali",
    country: "Indonesia",
    description:
      "Beautiful island known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs.",
    rating: 4.6,
    annualVisitors: 6000000,
    imageUrl: "https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFsaXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 9,
    name: "Colosseum",
    country: "Italy",
    description:
      "Oval amphitheatre in the centre of Rome, the largest ancient amphitheatre ever built.",
    rating: 4.7,
    annualVisitors: 7600000,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Ar9Wi5_C5HKlU09hhbRc2RKgDi6V8K_52g&s",
  },
  {
    id: 10,
    name: "Angkor Wat",
    country: "Cambodia",
    description:
      "Huge Buddhist temple complex surrounded by a moat and concentric walls.",
    rating: 4.8,
    annualVisitors: 2200000,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwPy1oSckWNKt9CkhEE4TUoRKN7r9WCnqocg&s",
  },
];