import { ItemList } from '../ItemList';

export const ItemListContainer = ( { greeting } ) => {
    return (
        <>
            <h2>{greeting}</h2>
            <ItemList />
        </>
    )
};