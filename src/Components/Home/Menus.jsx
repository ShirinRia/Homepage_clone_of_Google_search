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
        <div className="grid grid-cols-3 justify-center  gap-5">

           {menus.map(menu=><Menu key={menu.id} menu={menu}></Menu>)}
        </div>
    );
};

export default Menus;