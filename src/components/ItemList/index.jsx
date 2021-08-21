import { Item } from '../Item';

export const ItemList = ({products}) => {
    return (
        <>
            {products.map(product => {
                return (
                    <>
                        <Item title={product.title} price={product.price} image={product.image}/>
                    </>                     
                )
            })}
        </>      
    )
};