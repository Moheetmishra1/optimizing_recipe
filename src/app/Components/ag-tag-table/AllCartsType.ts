export interface PRODUCTTYPE {
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedTotal: number;
    thumbnail: string;
  }
  
  export interface CARTTYPE {
    id: number;
    products: PRODUCTTYPE[];
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
  }
  
  export interface CartResponseTYPE {
    carts: CARTTYPE[];
    total: number;
    skip: number;
    limit: number;
  }