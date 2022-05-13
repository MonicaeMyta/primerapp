import './Item.css';

import React from "react";


const Item = ({info}) => {

return (
    <a href = "" className="zapatillas">
    <img src={info.image} alt ="zapatillas Nike" />
    <p>{info.title}</p>
</a>

);
}

export default Item;