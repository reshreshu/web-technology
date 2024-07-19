import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Product 1', price: 12000, imageUrl:'https://images.samsung.com/is/image/samsung/p6pim/in/sm-a546ezkcins/gallery/in-galaxy-a54-5g-sm-a546-sm-a546ezkcins-thumb-537239796', description:"A design inspired by simplicity with a clean camera layout, sleek frame, and premium glass finish means the Galaxy A54 5G looks incredible. In addition, it has excellent photography capabilities with its 50MP AI camera and takes your selfies to the next level with its high-resolution 32MP front-facing camera."},
    { id: 2, name: 'Product 2', price: 18000, imageUrl:'https://5.imimg.com/data5/SELLER/Default/2023/8/337705756/EM/WG/BJ/14357089/smart-phone-samsung-redmi-realme-nokia-tecno-xiaomi-itel-vivo-oppo-motorola-500x500.jpg', description:"These are true wireless earbuds, with pro-grade technology for immersive sound like never before. While Intelligent ANC lets you seamlessly switch between noise canceling and fully adjustable ambient sound. So let the outside in - or keep it out. It's your world."},
    { id: 3, name: 'Product 3', price: 39000, imageUrl:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15hero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369781', description:"The Flex Hinge, or 'tear-drop' hinge, gets its name from the shape of the AMOLED Infinity Flex Display of the Galaxy devices when folded – placing less stress on the axial plane of the display, while allowing the ends of the panel to close together tighter."},
    { id: 1, name: 'Product 1', price: 15000, imageUrl:'https://opsg-img-cdn-gl.heytapimg.com/epb/202402/20/VYh23XynbefcMeYT.png?x-amz-process=image/format,webp/quality,Q_80', description:"The Samsung Galaxy F23 is a well-rounded smartphone in terms of its display, software and processing capabilities. The battery life is above average and the cameras work well under ample sunlight."},
    { id: 2, name: 'Product 2', price: 30000, imageUrl:'https://media.croma.com/image/upload/v1708668925/Croma%20Assets/Communication/Mobiles/Images/301346_0_qyf7sb.png', description:"The Samsung Galaxy Tab A8 is a budget Android tablet computer and part of the Samsung Galaxy Tab series designed by Samsung Electronics. Samsung Galaxy Tab A8. Also known as. Samsung Galaxy Tab A8"},
    { id: 3, name: 'Product 3', price: 60000, imageUrl:'https://i02.appmifile.com/686_operatorx_operatorx_opx/23/02/2024/a13c444dfc0b5db4ecae1e9d0ba10326.png', description:"Your Samsung Galaxy Watch comes with a range of great features and functions from tracking your activity and heart rate, to replying to emails or listening to music. Once you've got your Watch set up the way you like it, explore the features and functions to get the best from your Galaxy Watch."}
    
  ];

  getProducts(): Product[] {
    return this.products;
  }
}