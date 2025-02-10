export const ShowProducts = ({ product })=>{
    return <>
    <img src={product.image} alt="" />
    <h3>{product.title}</h3> 
    </>


}