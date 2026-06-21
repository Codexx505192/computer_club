import Link from "next/link";

export default function Footer(){
    return(
           <footer>
                    <div className="footer_left">
                       <p className="txt23">
                        контактная <br />
                         информация
                       </p>

                       <p className="txt24">
                        Ломонсовский проспект, 29к3, Москва: <br />
                        <span>+79 (999) 099-43-33</span>
                       </p>

                       <div className="app_footer_block">
                        <div className="app_itm">
                         <Link href="#">
                         <img src="./img/tg_icn.png" alt="" />
                         </Link>
                        </div>

                        <div className="app_itm">
                         <Link href="#">
                         <img src="./img/vk.png" alt="" />
                         </Link>
                        </div>

                       </div>
                    </div>

                    <div className="footer_rigth">
                        <img src="./img/crt.png" alt="cart" />
                    </div>
                  </footer>
    )
}