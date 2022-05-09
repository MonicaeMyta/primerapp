import CartIcon from "../CartIcon/CartIcon";
import CartWidget from "../CartWidget/CartWidget";


export default function Navbar(){
    const headerStyles ={
        display: "flex",
        flexWrap:"wrap",
        justifyContent:"space-bethween",
        listStyle:"none",
        padding:"50px",
        height:"40px",
        color:"blue",
        background:"pink"
    }


 const ulStyle={

        listStyle:"none",
        display: "flex",
        flexWrap:"wrap",
        justifyContent:"space-bethween"
 }

 const liStyle={

   margin:"10px",
   
}

return(
    <header className="header" style={headerStyles}>
        <div className="logo">
            FEMMERI
        </div>
        <ul className="links" style={ulStyle}>
            <li className="link" style={liStyle}><a href="#">Inicio</a></li>
            <li className="link" style={liStyle}><a href="#">Productos</a></li>
            <li className="link" style={liStyle}><a href="#">Contacto</a></li>
            <li className="link" style={liStyle}><a href="#">
                <CartWidget/>
                </a></li>
        </ul>
        <CartIcon count={9} />
        
    </header>

);

}