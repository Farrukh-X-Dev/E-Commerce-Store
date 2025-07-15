import logo from './assets/images/logo.png'
import banner from './assets/images/banner.png'
import polo from './assets/images/polo.png'
import tanks from './assets/images/tanks.png'
import tshirt from './assets/images/tshirt.png'
import bandana from './assets/images/bandana.png'
import casual from './assets/images/casual.png'
import belts from './assets/images/belts.png'

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



export {nav_items , site_images , productsShort , productsLong}


