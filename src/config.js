import logo from './assets/images/logo.png'
import banner from './assets/images/banner.png'
import polo from './assets/images/polo.png'
import tanks from './assets/images/tanks.png'
import tshirt from './assets/images/tshirt.png'
import bandana from './assets/images/bandana.png'
import casual from './assets/images/casual.png'
import belts from './assets/images/belts.png'
import Belts from './assets/images/Belts.png';
import Scarf2 from './assets/images/Scarf2.png';
import FashionPolo2 from './assets/images/FashionPolo2.png';
import FashionPolo from './assets/images/FashionPolo.png';
import PoloShirt from './assets/images/PoloShirt.png';
import Scarf from './assets/images/Scarf.png';
import mensTanks from './assets/images/mensTanks.png';
import BG from './assets/images/BG.png';
import trend_1 from './assets/images/trend_1.png'
import trend_2 from './assets/images/trend_2.png'
import trend_3 from './assets/images/trend_3.png'
import discount from './assets/images/Discount.png'
 

let site_images = {
    logo , 
    banner ,
    BG ,
    trend_1,
    trend_2,
    trend_3,
    discount
}

let nav_items = [
    {path :'/' , element:'Home' } ,
    {path :'/about' , element:'About' } ,
    {path :'/collection' , element:'Collection' } ,
    {path :'/shop' , element:'Shop' } ,
]

let productsShort = [
  {
    id: 1,
    title: 'tanks',
    image: tanks,
    rating: 4.5
  },
  {
    id: 2,
    title: 't-shirts',
    image: tshirt,
    rating: 4.5
  },
  {
    id: 3,
    title: 'bandana',
    image: bandana,
    rating: 4.5
  },
  {
    id: 4,
    title: 'men belts',
    image: belts,
    rating: 4.5
  },
];

let productsLong = [
  {
    id: 5,
    title: 'polo shirts',
    image: polo,
    rating: 4.5
  },
  {
    id: 6,
    title: 'casual shirts',
    image: casual,
    rating: 4.5
  },
];

let ForyouProducts = [
  {
    id: 7,
    title: 'Gym Tank-Top',
    price: '$5',
    offPrice: '$8',
    rating: 4.1,
    category: 'Tanks',
    image: mensTanks
  },
  {
    id: 8,
    title: 'Beautiful Scarf',
    price: '$2',
    offPrice: '$5',
    rating: 4.3,
    category: 'Bandana',
    image: Scarf
  },
  {
    id: 9,
    title: 'Fashion Polo Shirt',
    price: '$4',
    offPrice: '$5',
    rating: 4.2,
    category: 'Polo Shirts',
    image: PoloShirt
  },
  {
    id: 10,
    title: 'Fashion polo shirt',
    price: '$4',
    offPrice: '$5',
    rating: 4.4,
    category: 'Polo Shirts',
    image: FashionPolo
  },
  {
    id: 11,
    title: 'Formal Shirt Set',
    price: '$3',
    offPrice: '$5',
    rating: 4.0,
    category: 'Casual Shirts',
    image: FashionPolo2
  },
  {
    id: 12,
    title: 'Handsome Shirt',
    price: '$1',
    offPrice: '$5',
    rating: 3.9,
    category: 'T-Shirts',
    image: Scarf2
  },
  {
    id: 13,
    title: 'Checked Casual Shirt',
    price: '$2',
    offPrice: '$5',
    rating: 4.5,
    category: 'Casual Shirts',
    image: casual
  },
  {
    id: 14,
    title: 'Leather Belt',
    price: '$3',
    offPrice: '$5',
    rating: 4.6,
    category: 'Mens Belts',
    image: Belts
  },
];

let allProducts = [
  // From productsShort
  {
    id: 1,
    title: 'Tanks',
    image: tanks,
    rating: 4.5,
    category: 'Tanks',
    price: null,
    offPrice: null
  },
  {
    id: 2,
    title: 'T-Shirts',
    image: tshirt,
    rating: 4.5,
    category: 'T-Shirts',
    price: null,
    offPrice: null
  },
  {
    id: 3,
    title: 'Bandana',
    image: bandana,
    rating: 4.5,
    category: 'Bandana',
    price: null,
    offPrice: null
  },
  {
    id: 4,
    title: 'Men Belts',
    image: belts,
    rating: 4.5,
    category: 'Mens Belts',
    price: null,
    offPrice: null
  },

  // From productsLong
  {
    id: 5,
    title: 'Polo Shirts',
    image: polo,
    rating: 4.5,
    category: 'Polo Shirts',
    price: null,
    offPrice: null
  },
  {
    id: 6,
    title: 'Casual Shirts',
    image: casual,
    rating: 4.5,
    category: 'Casual Shirts',
    price: null,
    offPrice: null
  },

  // From ForyouProducts
  {
    id: 7,
    title: 'Gym Tank-Top',
    price: '$5',
    offPrice: '$8',
    rating: 4.1,
    category: 'Tanks',
    image: mensTanks
  },
  {
    id: 8,
    title: 'Beautiful Scarf',
    price: '$2',
    offPrice: '$5',
    rating: 4.3,
    category: 'Bandana',
    image: Scarf
  },
  {
    id: 9,
    title: 'Fashion Polo Shirt',
    price: '$4',
    offPrice: '$5',
    rating: 4.2,
    category: 'Polo Shirts',
    image: PoloShirt
  },
  {
    id: 10,
    title: 'Fashion Polo Shirt',
    price: '$4',
    offPrice: '$5',
    rating: 4.4,
    category: 'Polo Shirts',
    image: FashionPolo
  },
  {
    id: 11,
    title: 'Formal Shirt Set',
    price: '$3',
    offPrice: '$5',
    rating: 4.0,
    category: 'Casual Shirts',
    image: FashionPolo2
  },
  {
    id: 12,
    title: 'Handsome Shirt',
    price: '$1',
    offPrice: '$5',
    rating: 3.9,
    category: 'T-Shirts',
    image: Scarf2
  },
  {
    id: 13,
    title: 'Checked Casual Shirt',
    price: '$2',
    offPrice: '$5',
    rating: 4.5,
    category: 'Casual Shirts',
    image: casual
  },
  {
    id: 14,
    title: 'Leather Belt',
    price: '$3',
    offPrice: '$5',
    rating: 4.6,
    category: 'Mens Belts',
    image: Belts
  }
];


export {nav_items , site_images , productsShort , productsLong , ForyouProducts , allProducts  }


