import Header from "@/shared/ui/Header";
import styles from "./Menu.module.css"


export default function Page(){
    return(
        <>
        <main>
            <section id="menu-page" className={styles.bg}>
                <div className="container">
                   <Header/>

                <div className={styles.menu_block}>
                    <p className={styles.txt_abs}>
                           Gosu lounge bar
                    </p>

                    <p className={styles.txt_abs_2}>
                      Атмосферное место на Ломоносовском проспекте, чтобы <br />
                      провести вечер в компании друзей со вкусным кальяном, <br />
                      авторскими коктейлями, вином и настольными играми
                    </p>

                    <div className={styles.menu_itm}>
                       <img src="./menu_s/gosu.png" alt="" />
                    </div>
                </div>
                </div>
            </section>

            <section className={styles.bg}>
                <div className="container">
                    <div className={styles.mnu_bi}>
                     <p className={styles.txt_1}>
                       Menu
                     </p>
                    </div>
                </div>
            </section>

            <section className={styles.cf_bg}>
                <div className="container">
                    <div className={styles.menu_bi_sg}>
                       <p className={styles.txt_2}>
                         - Drinks
                       </p>

                       <div className={styles.menu_lm}>
                           <div className={styles.menu_top}>
                             <p className={styles.txt_3}>
                              coffee
                            </p>
                           </div>

                           <ul className={styles.ul_1}>
                            <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Эспрессо
                               </p>

                                <p className={styles.txt_4}>
                                    150
                                </p>
                            </li>
                              
                               <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Американо
                               </p>

                                <p className={styles.txt_4}>
                                    150
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Глясе
                               </p>

                                <p className={styles.txt_4}>
                                    350
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Капучино
                               </p>

                                <p className={styles.txt_4}>
                                    250
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Латте Халва
                               </p>

                                <p className={styles.txt_4}>
                                    300
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Раф
                               </p>

                                <p className={styles.txt_4}>
                                    350
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Латте Халва
                               </p>

                                <p className={styles.txt_4}>
                                    300
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Горячий шоколад
                               </p>

                                <p className={styles.txt_4}>
                                    350
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Матча Латте
                               </p>

                                <p className={styles.txt_4}>
                                    350
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Флет Уайт
                               </p>

                                <p className={styles.txt_4}>
                                    200
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Латте/Айс-латте  
                               </p>

                                <p className={styles.txt_4}>
                                    200
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Альтернативное молоко  
                               </p>

                                <p className={styles.txt_4}>
                                    300
                                </p>
                            </li>
                           </ul>

                       </div>
                    </div>
                </div>
            </section>

             <section className={styles.cf_bg}>
                <div className="container">
                    <div className={styles.menu_bi_sg}>

                       <div className={styles.menu_lm}>
                           <div className={styles.menu_top2}>
                             <p className={styles.txt_3}>
                              tea
                            </p>
                           </div>

                           <ul className={styles.ul_2}>
                            <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Эспрессо
                               </p>

                                <p className={styles.txt_4}>
                                    150
                                </p>
                            </li>
                              
                               <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Американо
                               </p>

                                <p className={styles.txt_4}>
                                    150
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Глясе
                               </p>

                                <p className={styles.txt_4}>
                                    350
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Капучино
                               </p>

                                <p className={styles.txt_4}>
                                    250
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Латте Халва
                               </p>

                                <p className={styles.txt_4}>
                                    300
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Раф
                               </p>

                                <p className={styles.txt_4}>
                                    350
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Латте Халва
                               </p>

                                <p className={styles.txt_4}>
                                    300
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Горячий шоколад
                               </p>

                                <p className={styles.txt_4}>
                                    350
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Матча Латте
                               </p>

                                <p className={styles.txt_4}>
                                    350
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Флет Уайт
                               </p>

                                <p className={styles.txt_4}>
                                    200
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Латте/Айс-латте  
                               </p>

                                <p className={styles.txt_4}>
                                    200
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Альтернативное молоко  
                               </p>

                                <p className={styles.txt_4}>
                                    300
                                </p>
                            </li>
                           </ul>

                       </div>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}