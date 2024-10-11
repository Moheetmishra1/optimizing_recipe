// import { PRODUCT } from './../../models/product';
import { computed, inject, Injectable, signal } from "@angular/core";
import { CartProductType, CARTS, ORDERTYPE, PRODUCT, USER } from './carts.model';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs';


@Injectable({
    providedIn:'root',
    

})


export class CartsService {
    allCarts=signal<CARTS[]>([]);
    user=signal<USER|{}>({})
    cart =signal<CartProductType[]>([])
    
    userName=''

    






// ^............................................................................................

totalItem=computed(()=>this.myCart().reduce((res,cart)=> res+cart.quantity,0))

private httpClient = inject(HttpClient)

    total = computed(()=> this.myCart().reduce((a,b)=>{
        return (a+b.price*b.quantity)
    },0))

    myCart= signal<CartProductType[]>([])

    initialCartAdd(id:string){
        return this.httpClient.get<ORDERTYPE>(`https://dummyjson.com/carts/${id}`)
        .pipe(
            tap({
                next:(data)=>{
                    console.log(data);
                    
                    this.myCart.set(data.products)
                    console.log(this.myCart());
                    
                }
            })
        )
    }
    deleteProduct(id:number){
        this.myCart.update((cart)=>cart.filter(a=>a.id !== id));
    }
       
    deleteCart(cartId:number){

        return this.httpClient.delete(`https://dummyjson.com/carts/${cartId}`).pipe(
            tap({
                next:()=> {this.allCarts.set(this.allCarts().filter(a=> a.id !== cartId))}
            })
        )
    }

    
    updateCart(cartId:number,productId:number,qty:number){
        return this.httpClient.put<ORDERTYPE>(`https://dummyjson.com/carts/${cartId}`,{
            marge:true,
            products:[{id:productId,quantity:qty}]
        }).pipe(
            map(a=>a.products),
            tap({
                next:(Data)=>{
                    
                    console.log(cartId,productId,qty);
                    if(qty<=0){
                        this.myCart.update(prev=>prev.filter(a=>a.id!== productId))
                    }else{
                    this.myCart.update((prev)=>prev.map(a=>{
                        if(a.id=== productId){
                            return Data[0]
                        }
                        return a
                    }));
                }
                    }
            })
        )
    }

    clearUserCart(id:number){
        console.log(id);
        
        return this.httpClient.delete(`https://dummyjson.com/carts/${id}`)
        .pipe(
            tap({
                next:()=>this.myCart.set([])
            })
        )
    }











// ^..................................






    addproductToCart(product:PRODUCT){
        const prev = this.allCarts()
        const index = this.allCarts().findIndex(prod=>prod.id=== product.id);
        if(index>=0){
            this.allCarts.update((carts=>carts.map((cart,idx)=>{
                if(idx=== index){
                    cart.quantity+=1;
                    return cart;
                }
                return cart;
            })))
        }else{
            this.allCarts.update(carts=>[...carts,{...product,quantity:1}])
        }
        console.log(this.allCarts());
        
       
    }
    addCartToBackend(product:PRODUCT){
        return this.httpClient.post('https://fakestoreapi.com/carts',{
            userId :0,
            date:'2020-02-03',
            products:[{productId:5,quantity:1},{productId:1,quantity:5}]
        }).pipe(
            tap({
                next:()=>  this.addproductToCart(product)
            })
        )
    }
    addUser(){
        console.log("enter to add user");
        
        return this.httpClient.get<USER[]>('https://fakestoreapi.com/users')
        .pipe(
            tap({
                next:(users)=>{
                    console.log(users);
                    
                const obj=users.find(a=>a.username===this.userName)
                if(obj){
                    this.user.set(obj)
                }
                }
            }),
            map(a=>a.find(user=> user.username=== this.userName))
        )
    }


 

 

}