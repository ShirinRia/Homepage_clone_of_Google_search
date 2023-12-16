import { useEffect, useState } from "react";
import Menu from "./Menu";


const Menus = () => {
    const [menus, setmenus] = useState([])
    useEffect(() => {
        fetch('/menus.json')
            .then(res => res.json())
            .then(data => {

                setmenus(data)

            })


    }, [])
    return (
        <div>

           {menus.map(menu=><Menu key={menu.id}></Menu>)}
        </div>
    );
};

export default Menus;