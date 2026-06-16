import { ways } from "@/data";
import Link from "next/link";
import { useState } from "react";
import WayToTeach from "../WayToTeach";

export default function Header(){
const [openMenu, setOpenMenu] = useState(false)
 


    return(
         <header>
          <div className="header_logo">
            <img src="./img/hdr_logo.png" alt="" />
            </div>  

            <ul className="ul">
               <WayToTeach title={ways[0].title}/>
               <WayToTeach {...ways[1]}/>
               <WayToTeach {...ways[2]}/>
               <WayToTeach {...ways[3]}/>
            </ul>   

            <div className="header_right">
               <div className="header_menu">
                <ul className={`header_list ${openMenu ? "active" : ""}`}>
                    <li>
                        <Link href="#" className="lnk2">
                        О нас
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="lnk2">
                        Зоны
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="lnk2">
                        Новости
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="lnk2">
                        Контакты
                        </Link>
                    </li>
                    <li className="close" onClick={() => setOpenMenu(false)}>
                        закрыть
                    </li>
                </ul>

                 <div className="menu" onClick={() => setOpenMenu(!openMenu)}>
                    <img src="./img/menu.png" alt="" />
                </div>

               </div>

                <p className="txt">
                    Меню
                </p>
            </div> 

            
        </header>
    )
}