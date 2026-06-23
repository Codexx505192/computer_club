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
                                 Чёрный с чабрецом
                               </p>

                                <p className={styles.txt_4}>
                                    200/300
                                </p>
                            </li>
                              
                               <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Зеленый с жасмином
                               </p>

                                <p className={styles.txt_4}>
                                    250/300
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Каркаде
                               </p>

                                <p className={styles.txt_4}>
                                    250/350
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Молочный Улун
                               </p>

                                <p className={styles.txt_4}>
                                    200/350
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Зеленый Сенча
                               </p>

                                <p className={styles.txt_4}>
                                    300
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Чёрный
                               </p>

                                <p className={styles.txt_4}>
                                    200/350
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Чёрный с бергамотом
                               </p>

                                <p className={styles.txt_4}>
                                    200/350
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
                           <div className={styles.menu_top}>
                             <p className={styles.txt_3}>
                              fruit tea
                            </p>
                           </div>

                           <ul className={styles.ul_3}>
                            <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Облепиха-Имбирь
                               </p>

                                <p className={styles.txt_4}>
                                    550
                                </p>
                            </li>
                              
                               <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Малина-Мята
                               </p>

                                <p className={styles.txt_4}>
                                    550
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Маракуйя-Розмарин
                               </p>

                                <p className={styles.txt_4}>
                                    550
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Глинтвейн
                               </p>

                                <p className={styles.txt_4}>
                                    550
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Зимняя вишня
                               </p>

                                <p className={styles.txt_4}>
                                    550
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Пряная брусника
                               </p>

                                <p className={styles.txt_4}>
                                    550
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                Клюква-Имбирь
                               </p>

                                <p className={styles.txt_4}>
                                    550
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
                              lemonade
                            </p>
                           </div>

                           <ul className={styles.ul_4}>
                            <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Лимон
                               </p>

                                <p className={styles.txt_4}>
                                    350/950
                                </p>
                            </li>
                              
                               <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Малина-Маракуйя
                               </p>

                                <p className={styles.txt_4}>
                                    350/950
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                  Манго-Маракуйя
                               </p>

                                <p className={styles.txt_4}>
                                    350/950
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Манго
                               </p>

                                <p className={styles.txt_4}>
                                    350/950
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
                           <div className={styles.menu_top}>
                             <p className={styles.txt_3}>
                              milkshake
                            </p>
                           </div>

                           <ul className={styles.ul_5}>
                            <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Snickers
                               </p>

                                <p className={styles.txt_4}>
                                    500
                                </p>
                            </li>
                              
                               <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                Oreo
                               </p>

                                <p className={styles.txt_4}>
                                    500
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                  Малина
                               </p>

                                <p className={styles.txt_4}>
                                  300
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Шоколад
                               </p>

                                <p className={styles.txt_4}>
                                  500
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                Ваниль
                               </p>

                                <p className={styles.txt_4}>
                                  350
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                Клубника
                               </p>

                                <p className={styles.txt_4}>
                                  500
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                Зимняя Вишня
                               </p>

                                <p className={styles.txt_4}>
                                  350
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
                        <p className={styles.txt_2}>
                          - food 12:00 - 22:00
                       </p>

                       <div className={styles.menu_lm}>
                           <div className={styles.menu_top2}>
                             <p className={styles.txt_3}>
                              Pizza
                            </p>
                           </div>

                           <ul className={styles.ul_6}>
                            <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Маргарита
                               </p>

                                 <div className={styles.rr}>
                                   <p className={styles.spp}>
                                    500
                                  </p>
                                <p className={styles.txt_4}>
                                    750
                                </p>
                                 </div>
                            </li>
                              
                               <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                Oreo
                               </p>

                                 <div className={styles.rr}>
                                   <p className={styles.spp}>
                                    500
                                  </p>
                                <p className={styles.txt_4}>
                                    800
                                </p>
                                 </div>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                  Пеперони
                               </p>

                                 <div className={styles.rr}>
                                   <p className={styles.spp}>
                                    500
                                  </p>
                                <p className={styles.txt_4}>
                                    800
                                </p>
                                 </div>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Деревенская
                               </p>

                                <div className={styles.rr}>
                                   <p className={styles.spp}>
                                    500
                                  </p>
                                <p className={styles.txt_4}>
                                    800
                                </p>
                                 </div>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                Четыре сыра
                               </p>

                                 <div className={styles.rr}>
                                   <p className={styles.spp}>
                                    500
                                  </p>
                                <p className={styles.txt_4}>
                                    800
                                </p>
                                 </div>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                Мясная
                               </p>

                               <div className={styles.rr}>
                                   <p className={styles.spp}>
                                    500
                                  </p>
                                <p className={styles.txt_4}>
                                    800
                                </p>
                                 </div>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                               Азиатский цыпленок
                               </p>

                               <div className={styles.rr}>
                                   <p className={styles.spp}>
                                    500
                                  </p>
                                <p className={styles.txt_4}>
                                    800
                                </p>
                                 </div>
                            </li>
                             
                                <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                               С кальмаром и креветкой
                               </p>

                               <div className={styles.rr}>
                                   <p className={styles.spp}>
                                    500
                                  </p>
                                <p className={styles.txt_4}>
                                    800
                                </p>
                                 </div>
                            </li>

                                <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                              Вегетарианская 
                               </p>

                               <div className={styles.rr}>
                                   <p className={styles.spp}>
                                    500
                                  </p>
                                <p className={styles.txt_4}>
                                    800
                                </p>
                                 </div>
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
                           <div className={styles.menu_top}>
                             <p className={styles.txt_3}>
                              wok and Sandwich
                            </p>
                           </div>

                           <ul className={styles.ul_7}>
                            <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Лапша с говядиной
                               </p>

                                 <div className={styles.rr}>
                                   <p className={styles.spp2}>
                                    330 гр
                                  </p>
                                <p className={styles.txt_4}>
                                    750
                                </p>
                                 </div>
                            </li>
                              
                               <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                Лапша с курицей и креветками
                               </p>

                                 <div className={styles.rr}>
                                   <p className={styles.spp2}>
                                    330 гр
                                  </p>
                                <p className={styles.txt_4}>
                                    500
                                </p>
                                 </div>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                  Лапша с овощами
                               </p>

                                <div className={styles.rr}>
                                   <p className={styles.spp2}>
                                    330 гр
                                  </p>
                                <p className={styles.txt_4}>
                                    500
                                </p>
                                 </div>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Сэндвич с Говядиной
                               </p>

                               <div className={styles.rr}>
                                   <p className={styles.spp2}>
                                    250 гр
                                  </p>
                                <p className={styles.txt_4}>
                                    500
                                </p>
                                 </div>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                               Сендвич с курицей и беконом
                               </p>

                                <div className={styles.rr}>
                                   <p className={styles.spp2}>
                                    350 гр
                                  </p>
                                <p className={styles.txt_4}>
                                    550
                                </p>
                                 </div>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                Сэндвич с моцареллой <br />
                                 и пепперони
                               </p>

                               <div className={styles.rr}>
                                   <p className={styles.spp2}>
                                    259 гр
                                  </p>
                                <p className={styles.txt_4}>
                                    450
                                </p>
                                 </div>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                               Тост с хрустящим цыпленком
                               </p>

                               <div className={styles.rr}>
                                   <p className={styles.spp2}>
                                    250 гр
                                  </p>
                                <p className={styles.txt_4}>
                                    400
                                </p>
                                 </div>
                            </li>
                             
                                <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                              Бриошь-Бургер 
                               </p>

                               <div className={styles.rr}>
                                   <p className={styles.spp2}>
                                    200 гр
                                  </p>
                                <p className={styles.txt_4}>
                                    490
                                </p>
                                 </div>
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
                            food 24
                            </p>
                           </div>

                           <ul className={styles.ul_8}>
                            <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Котлеты куриные с картофельным пюре <br />
                                  и сырным соусом
                               </p>

                                 <div className={styles.rr}>
                                   <p className={styles.spp}>
                                    260 гр
                                  </p>
                                <p className={styles.txt_4}>
                                    380
                                </p>
                                 </div>
                            </li>
                              
                               <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                Цыпленок в кисло-сладком соусе с рисом
                               </p>

                                 <div className={styles.rr}>
                                   <p className={styles.spp}>
                                    270 гр
                                  </p>
                                <p className={styles.txt_4}>
                                    380
                                </p>
                                 </div>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                Спагетти Карбонара с копченым цыпленком
                               </p>

                                <div className={styles.rr}>
                                   <p className={styles.spp}>
                                    250 гр
                                  </p>
                                <p className={styles.txt_4}>
                                    420
                                </p>
                                 </div>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                Паста с морепродуктами
                               </p>

                               <div className={styles.rr}>
                                   <p className={styles.spp}>
                                    260 гр
                                  </p>
                                <p className={styles.txt_4}>
                                    490
                                </p>
                                 </div>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                               Лапша пшеничная Удон с курицей и овощами
                               </p>

                                <div className={styles.rr}>
                                   <p className={styles.spp}>
                                    250 гр
                                  </p>
                                <p className={styles.txt_4}>
                                    450
                                </p>
                                 </div>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                Филе белой рыбы, запеченное в соусе мисо,  <br />
                                с копчеными сливками и картофельным пюре
                               </p>

                               <div className={styles.rr}>
                                   <p className={styles.spp}>
                                    240 гр
                                  </p>
                                <p className={styles.txt_4}>
                                    450
                                </p>
                                 </div>
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
                           <div className={styles.menu_top}>
                             <p className={styles.txt_3}>
                             SWEETS
                            </p>
                           </div>

                           <ul className={styles.ul_9}>
                            <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                Мороженое
                               </p>

                                 <div className={styles.rr}>
                                   <p className={styles.spp}>
                                    150 гр
                                  </p>
                                <p className={styles.txt_4}>
                                    200
                                </p>
                                 </div>
                            </li>
                              
                               <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                Пончики 1/3/6 шт
                               </p>

                                 <div className={styles.rr}>
                                <p className={styles.txt_4}>
                                    70/150/250
                                </p>
                                 </div>
                            </li>

                               <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                               Шоколадный брауни
                               </p>

                                 <div className={styles.rr}>
                                  <p className={styles.spp}>
                                    120 гр
                                  </p>

                                <p className={styles.txt_4}>
                                    350
                                </p>
                                 </div>
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