import React, {useState , useEffect} from "react";
import Title from "../Title/Title";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";


const zapatillas = [
    {id: 1, image : "https://www.thenextsole.com/storage/images/BQ4153-007.png", title: "Nike Airmax"},
    {id: 2, image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvtDq_FkMsQeztXbSWM6sCDk4TwZv56p9vlVVajivTZXOeAZES87N6IXZGWct2FYcc9Go&usqp=CAU", title: "Nike RYZ 365"},
    {id: 3, image : "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/b65d86ea-f7b1-4331-9a7b-31ff12608d31/air-max-2090-womens-shoes-GWKMrM.png", title: "Nike Airmax 2090"},

];



export const ItemListContainer = (props) => {

    const [ data , setData] = useState ([]);


    useEffect (() =>{

        const getData = new Promise(resolve =>{
            setTimeout(() => {
                resolve(zapatillas);
            }, 3000);
        });

        getData.then(res => setData (res));

    },[])

    const onAdd = (quantity) => {

    console.log("Compraste ${quantity} unidades");
}

    return (

        <>
            <Title greeting= {props.texto} />
            <ItemCount  initial ={1} stock={5} onAdd={onAdd} />
            <ItemList data = {data} />
        </>
    );

}

export default ItemListContainer;