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
            <li className="link" style={liStyle}>Inicio</li>
            <li className="link" style={liStyle}>Productos</li >
            <li className="link" style={liStyle}>Contacto</li >
            <li className="link" style={liStyle}>Nosotros</li >
        </ul>
    </header>

);

}