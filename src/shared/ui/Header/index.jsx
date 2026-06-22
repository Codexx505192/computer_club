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
               <Link href="/AboutUs" className="lnk">
               <WayToTeach title={ways[0].title}/>
               </Link>

              <Link href="#" className="lnk">
               <WayToTeach {...ways[1]}/>
              </Link> 

               <Link href="#" className="lnk">
               <WayToTeach {...ways[2]}/>
               </Link>
               
               <Link href="#" className="lnk">
               <WayToTeach {...ways[3]}/>
               </Link>
            </ul>   

            <div className="header_right">
               <div className="header_menu">
                <ul className={`header_list ${openMenu ? "active" : ""}`}>
                    <li>
                        <Link href="/AboutUs" className="lnk2">
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

                <Link href="/Menu" className="txt">
                    Меню
                </Link>
            </div> 

            
        </header>
    )
}