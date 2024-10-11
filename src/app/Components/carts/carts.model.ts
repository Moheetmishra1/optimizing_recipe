

// export interface SingleCart 
//  {
//     id: number;
//     products: {
//       id: number;
//       title: string;
//       price: number;
//       quantity: number;
//       total: number;
//       discountPercentage: number;
//       discountedTotal: number;
//       thumbnail: string;
//     }[];
//     total: number;
//     discountedTotal: number;
//     userId: number;
//     totalProducts: number;
//     totalQuantity: number;
//   }


export interface CartProductType
 {
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedTotal: number;
    thumbnail: string;
  }

  export interface ORDERTYPE {
    id: number;
    products: CartProductType[];
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
  }










export interface CARTS {
    id:number,
    category:string,
    description:string,
    image:string,
    price:number,
    title:string,
    rating:{
        rate:number,
        count:number
    },
    quantity:number
}

export interface USER    {
    id:number,
    email:string,
    username:string,
    password:string,
    name:{
        firstname:string,
        lastname:string
    },
    address:{
        city:string,
        street:string,
        number:number,
        zipcode:string,
        geolocation:{
            lat:string,
            long:string
        }
    },
    phone:string
}

export interface PRODUCT {
    id:number,
    category:string,
    description:string,
    image:string,
    price:number,
    title:string,
    rating:{
        rate:number,
        count:number
    }
} 