import logo from './assets/images/logo.png'
import banner from './assets/images/banner.png'
import polo from './assets/images/polo.png'
import tanks from './assets/images/tanks.png'
import tshirt from './assets/images/tshirt.png'
import bandana from './assets/images/bandana.png'
import casual from './assets/images/casual.png'
import belts from './assets/images/belts.png'
import Belts from './assets/images/Belts.png';
import HandsomeShirts from './assets/images/HandsomeShirts.png';
import Scarf2 from './assets/images/Scarf2.png';
import FashionPolo2 from './assets/images/FashionPolo2.png';
import FashionPolo from './assets/images/FashionPolo.png';
import PoloShirt from './assets/images/PoloShirt.png';
import Scarf from './assets/images/Scarf.png';
import mensTanks from './assets/images/mensTanks.png';

let nav_items = [
    {path :'/' , element:'Home' } ,
    {path :'/about' , element:'About' } ,
    {path :'/collection' , element:'Collection' } ,
    {path :'/shop' , element:'Shop' } ,
]

let site_images = {
    logo , 
    banner ,
}

let productsShort = [
    {
        title : 'tanks' ,
        image : tanks,
        rating: 4.5
    },
    {
        title : 't-shirts' ,
        image : tshirt,
        rating: 4.5
    }, 
    {
        title : 'bandana' ,
        image : bandana,
        rating: 4.5
    },
    {
        title : 'men belts' ,
        image : belts,
        rating: 4.5
    },
]

let productsLong = [
    {
        title : 'polo shirts' ,
        image : polo,
        rating: 4.5
    },
    {
        title : 'casual shirts' ,
        image : casual,
        rating: 4.5
    },
]

let ForyouProducts = [
    {
      title: 'Gym Tank-Top',
      price: '$5',
      offPrice: '$8',
      rating: 4.1,
      category: 'Tanks',
      image: mensTanks
    },
    {
      title: 'Beautiful Scarf',
      price: '$2',
      offPrice: '$5',
      rating: 4.3,
      category: 'Bandana',
      image: Scarf
    },
    {
      title: 'Fashion Polo Shirt',
      price: '$4',
      offPrice: '$5',
      rating: 4.2,
      category: 'Polo Shirts',
      image: PoloShirt
    },
    {
      title: 'Fashion polo shirt',
      price: '$4',
      offPrice: '$5',
      rating: 4.4,
      category: 'Polo Shirts',
      image: FashionPolo
    },
    {
      title: 'Formal Shirt Set',
      price: '$3',
      offPrice: '$5',
      rating: 4.0,
      category: 'Casual Shirts',
      image: FashionPolo2
    },
    {
      title: 'Handsome Shirt',
      price: '$1',
      offPrice: '$5',
      rating: 3.9,
      category: 'T-Shirts',
      image: Scarf2
    },
    {
      title: 'Checked Casual Shirt',
      price: '$2',
      offPrice: '$5',
      rating: 4.5,
      category: 'Casual Shirts',
      image: casual
    },
    {
      title: 'Leather Belt',
      price: '$3',
      offPrice: '$5',
      rating: 4.6,
      category: 'Mens Belts',
      image: Belts
    }
  ];
  

export {nav_items , site_images , productsShort , productsLong , ForyouProducts}


