export type WonderImage = {
  id: string;
  name: string;
  src: string;
  photographer: string;
  location: string;
};

const wondersImages: WonderImage[] = [
  {
    id: "1",
    name: "Great Wall of China",
    src: "/images/1.jpg",
    photographer: "Photo by Max van den Oetelaar on Unsplash",
    location: "China",
  },
  {
    id: "2",
    name: "Petra",
    src: "/images/2.jpg",
    photographer: "Photo by Reiseuhu on Unsplash",
    location: "Jordan",
  },
  {
    id: "3",
    name: "Christ the Redeemer",
    src: "/images/3.jpg",
    photographer: "Photo by Andrea Leopardi on Unsplash",
    location: "Brazil",
  },
  {
    id: "4",
    name: "Machu Picchu",
    src: "/images/4.jpg",
    photographer: "Photo by Jared Schwitzke on Unsplash",
    location: "Peru",
  },
  {
    id: "5",
    name: "Chichen Itza",
    src: "/images/5.jpg",
    photographer: "Photo by E Mens on Unsplash",
    location: "Mexico",
  },
  {
    id: "6",
    name: "Roman Colosseum",
    src: "/images/6.jpg",
    photographer: "Photo by Andrea Cipriano on Unsplash",
    location: "Italy",
  },
  {
    id: "7",
    name: "Taj Mahal",
    src: "/images/7.jpg",
    photographer: "Photo by Su San Lee on Unsplash",
    location: "India",
  },
];

export default wondersImages;
