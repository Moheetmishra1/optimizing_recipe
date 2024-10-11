
export function getStar(n:number){
    const st='⭐'
    // console.log("stars ", n);
    
    let s=''
    for(let i=0;i<=n-1;++i){
        s+=st
    }
    return s;
}