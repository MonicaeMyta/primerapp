import Item from "../Item/Item";
import React from "react";


const ItemList = ({data = []}) => {
    return(
        data.map(zapatillas => <Item key={zapatillas.id} info = {zapatillas}/>)
    );
}

export default ItemList;