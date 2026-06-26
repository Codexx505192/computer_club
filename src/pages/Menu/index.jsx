import Header from "@/shared/ui/Header";
import styles from "./Menu.module.css"
import Link from "next/link";
import Footer from "@/shared/ui/Footer";


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

            <section className={styles.cf_bg}>
                <div className="container">
                    <div className={styles.menu_bi_sg}>
                      <p class="Menu-module__7Ssf3a__txt_2">- ALCOHOL</p>

                       <div className={styles.menu_lm}>
                           <div className={styles.menu_top}>
                             <p className={styles.txt_3}>
                             cocktails by gosu
                            </p>
                           </div>

                           <ul className={styles.ul_10}>
                            <li className={styles.ppp}>
                               <div className={styles.l_lft}>
                                <p className={styles.txt_6}>
                                    San Andreas
                                </p>

                                <p className={styles.txt_7}>
                                  Этот коктейль на основе белого рома и клубничного шрапа одобрил <br />
                                   даже Сиджей (белый ром, апероль, фреш лимона, клубничный шраб)
                                </p>
                               </div>

                                 <div className={styles.rr}>
                                <p className={styles.txt_5}>
                                    650
                                </p>
                                 </div>
                            </li>

                            <li className={styles.ppp}>
                               <div className={styles.l_lft}>
                                <p className={styles.txt_6}>
                                    Imposter
                                </p>

                                <p className={styles.txt_7}>
                                  Персик не был предателем! <br />
                                  (джин, персиковый ликёр, сиропы)
                                </p>
                               </div>

                                 <div className={styles.rr}>
                                <p className={styles.txt_5}>
                                    650
                                </p>
                                 </div>
                            </li>
                            
                             <li className={styles.ppp}>
                               <div className={styles.l_lft}>
                                <p className={styles.txt_6}>
                                    Headshot негрони
                                </p>

                                <p className={styles.txt_7}>
                                  Текила, Клубничный шраб, и кампари улучшат твой AIM
                                </p>
                               </div>

                                 <div className={styles.rr}>
                                <p className={styles.txt_5}>
                                    650
                                </p>
                                 </div>
                            </li>

                             <li className={styles.ppp}>
                               <div className={styles.l_lft}>
                                <p className={styles.txt_6}>
                                    Коктейль MLGinger
                                </p>

                                <p className={styles.txt_7}>
                                 Настойка на облепихе, имбирный фреш и медовый сироп <br />
                                 Коктейль для настоящих тащеров  вкусный и по сути и по <br />
                                 вкусу !  (облепиховая настойка, фреш имбиря, сироп) 
                                </p>
                               </div>

                                 <div className={styles.rr}>
                                <p className={styles.txt_5}>
                                    650
                                </p>
                                 </div>
                            </li>

                             <li className={styles.ppp}>
                               <div className={styles.l_lft}>
                                <p className={styles.txt_6}>
                                    Коктейль Triple Kill
                                </p>

                                <p className={styles.txt_7}>
                                 Коктейль повышающий skill на столько что могут забанить за читерство  <br />                              
                                  (цитрусовая настойка, грейпфрутовый тепаче, апероль) 
                                </p>
                               </div>

                                 <div className={styles.rr}>
                                <p className={styles.txt_5}>
                                    650
                                </p>
                                 </div>
                            </li>

                            <li className={styles.ppp}>
                               <div className={styles.l_lft}>
                                <p className={styles.txt_6}>
                                    Коктейль Огурчик Рик
                                </p>

                                <p className={styles.txt_7}>
                                  После пары коктейлей , кнопки жмутся быстрее, увеличивается болевой <br />                              
                                  порог и уверенность в своих силах.(мартини на клюкве, огурец и тоник)  
                                </p>
                               </div>

                                 <div className={styles.rr}>
                                <p className={styles.txt_5}>
                                    650
                                </p>
                                 </div>
                            </li>

                            <li className={styles.ppp}>
                               <div className={styles.l_lft}>
                                <p className={styles.txt_6}>
                                   Коктейль Сабзиро 
                                </p>

                                <p className={styles.txt_7}>
                                    Освежающее комбо приведет к самому яркому Fatality  <br />                              
                                    (джин, цитрусовые ликер, сироп)   
                                </p>
                               </div>

                                 <div className={styles.rr}>
                                <p className={styles.txt_5}>
                                    650
                                </p>
                                 </div>
                            </li>

                            <li className={styles.ppp}>
                               <div className={styles.l_lft}>
                                <p className={styles.txt_6}>
                                  Яблоко Эдема
                                </p>

                                <p className={styles.txt_7}>
                                    (джин, яблочный ликер и алое)  <br />                              
                                    Ничто не истинно, все дозволено. 
                                </p>
                               </div>

                                 <div className={styles.rr}>
                                <p className={styles.txt_5}>
                                    650
                                </p>
                                 </div>
                            </li>

                            <li className={styles.ppp}>
                               <div className={styles.l_lft}>
                                <p className={styles.txt_6}>
                                  Press F 
                                </p>

                                <p className={styles.txt_7}>
                                    (виски, вермут, яблочный ликер, сироп)<br />                              
                                    Хороший коктейль для продолжения.
                                </p>
                               </div>

                                 <div className={styles.rr}>
                                <p className={styles.txt_5}>
                                    650
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
                             Classic cocktails
                            </p>
                           </div>

                           <ul className={styles.ul_11}>
                            <li className={styles.ppp}>
                               <div className={styles.l_lft}>
                                <p className={styles.txt_6}>
                                    Куба Либре
                                </p>

                               </div>

                                 <div className={styles.rr}>
                                  <p class={styles.spp}>150 мл</p> 
                                  

                                <p className={styles.txt_5}>
                                    750
                                </p>
                                 </div>
                            </li>

                            <li className={styles.ppp}>
                               <div className={styles.l_lft}>
                                <p className={styles.txt_6}>
                                    Негрони
                                </p>

                               </div>

                                 <div className={styles.rr}>
                                  <p class={styles.spp}>90 мл</p> 
                                  
                                <p className={styles.txt_5}>
                                    800
                                </p>
                                 </div>
                            </li>

                             <li className={styles.ppp}>
                               <div className={styles.l_lft}>
                                <p className={styles.txt_6}>
                                    Виски сауэр
                                </p>

                               </div>

                                 <div className={styles.rr}>
                                  <p class={styles.spp}>110 мл</p> 
                                  
                                <p className={styles.txt_5}>
                                    850
                                </p>
                                 </div>
                            </li>

                            <li className={styles.ppp}>
                               <div className={styles.l_lft}>
                                <p className={styles.txt_6}>
                                    Московский мул
                                </p>

                               </div>

                                 <div className={styles.rr}>
                                  <p class={styles.spp}>150 мл</p> 
                                  
                                <p className={styles.txt_5}>
                                    850
                                </p>
                                 </div>
                            </li>

                             <li className={styles.ppp}>
                               <div className={styles.l_lft}>
                                <p className={styles.txt_6}>
                                    Лонг Айленд
                                </p>

                               </div>

                                 <div className={styles.rr}>
                                  <p class={styles.spp}>165 мл</p> 
                                  
                                <p className={styles.txt_5}>
                                    850
                                </p>
                                 </div>
                            </li>

                            <li className={styles.ppp}>
                               <div className={styles.l_lft}>
                                <p className={styles.txt_6}>
                                    Олд Фешн
                                </p>

                               </div>

                                 <div className={styles.rr}>
                                  <p class={styles.spp}>165 мл</p> 
                                  
                                <p className={styles.txt_5}>
                                    950
                                </p>
                                 </div>
                            </li>

                            <li className={styles.ppp}>
                               <div className={styles.l_lft}>
                                <p className={styles.txt_6}>
                                    Маргаритта
                                </p>

                               </div>

                                 <div className={styles.rr}>
                                  <p class={styles.spp}>100 мл</p> 
                                  
                                <p className={styles.txt_5}>
                                    850
                                </p>
                                 </div>
                            </li>

                            <li className={styles.ppp}>
                               <div className={styles.l_lft}>
                                <p className={styles.txt_6}>
                                    Кловер клаб
                                </p>

                               </div>

                                 <div className={styles.rr}>
                                  <p class={styles.spp}>120 мл</p> 
                                  
                                <p className={styles.txt_5}>
                                    950
                                </p>
                                 </div>
                            </li>

                            <li className={styles.ppp}>
                               <div className={styles.l_lft}>
                                <p className={styles.txt_6}>
                                   Белый Русский
                                </p>

                               </div>

                                 <div className={styles.rr}>
                                  <p class={styles.spp}>120 мл</p> 
                                  
                                <p className={styles.txt_5}>
                                    750
                                </p>
                                 </div>
                            </li>

                            <li className={styles.ppp}>
                               <div className={styles.l_lft}>
                                <p className={styles.txt_6}>
                                   Манхеттен
                                </p>

                               </div>

                                 <div className={styles.rr}>
                                  <p class={styles.spp}>75 мл</p> 
                                  
                                <p className={styles.txt_5}>
                                    850
                                </p>
                                 </div>
                            </li>

                             <li className={styles.ppp}>
                               <div className={styles.l_lft}>
                                <p className={styles.txt_6}>
                                   Яблочный тини
                                </p>

                               </div>

                                 <div className={styles.rr}>
                                  <p class={styles.spp}>90 мл</p> 
                                  
                                <p className={styles.txt_5}>
                                    950
                                </p>
                                 </div>
                            </li>

                            <li className={styles.ppp}>
                               <div className={styles.l_lft}>
                                <p className={styles.txt_6}>
                                  Френч75
                                </p>

                               </div>

                                 <div className={styles.rr}>
                                  <p class={styles.spp}>155 мл</p> 
                                  
                                <p className={styles.txt_5}>
                                    850
                                </p>
                                 </div>
                            </li>

                            <li className={styles.ppp}>
                               <div className={styles.l_lft}>
                                <p className={styles.txt_6}>
                                   Виски Кола
                                </p>

                               </div>

                                 <div className={styles.rr}>
                                  <p class={styles.spp}>90 мл</p> 
                                  
                                <p className={styles.txt_5}>
                                    750
                                </p>
                                 </div>
                            </li>

                            <li className={styles.ppp}>
                               <div className={styles.l_lft}>
                                <p className={styles.txt_6}>
                                   Ягер Бомб
                                </p>

                               </div>

                                 <div className={styles.rr}>
                                  <p class={styles.spp}>200 мл</p> 
                                  
                                <p className={styles.txt_5}>
                                    950
                                </p>
                                 </div>
                            </li>

                            <li className={styles.ppp}>
                               <div className={styles.l_lft}>
                                <p className={styles.txt_6}>
                                   Куба Либре
                                </p>

                               </div>

                                 <div className={styles.rr}>
                                  <p class={styles.spp}>125 мл</p> 
                                  
                                <p className={styles.txt_5}>
                                    950
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
                            WHISKEY
                            </p>
                           </div>

                           <ul className={styles.ul_12}>
                            <li className={styles.ppp}>
                               <div className={styles.l_lft}>
                                <p className={styles.txt_6}>
                                    Macallan
                                </p>

                               </div>

                                 <div className={styles.rr}>
                                <p className={styles.txt_5}>
                                    1200
                                </p>
                                 </div>
                            </li>

                            <li className={styles.ppp}>
                               <div className={styles.l_lft}>
                                <p className={styles.txt_6}>
                                    Jim Beam (Red Stаg, Honey, Bourbon, Apple)
                                </p>

                               </div>

                                 <div className={styles.rr}>
                                <p className={styles.txt_5}>
                                    400
                                </p>
                                 </div>
                            </li>

                            <li className={styles.ppp}>
                               <div className={styles.l_lft}>
                                <p className={styles.txt_6}>
                                   Auchentoshan
                                </p>

                               </div>

                                 <div className={styles.rr}>
                                <p className={styles.txt_5}>
                                    500
                                </p>
                                 </div>
                            </li>
                             
                               <li className={styles.ppp}>
                               <div className={styles.l_lft}>
                                <p className={styles.txt_6}>
                                   The Famous Grouse
                                </p>

                               </div>

                                 <div className={styles.rr}>
                                <p className={styles.txt_5}>
                                    400
                                </p>
                                 </div>
                            </li>

                               <li className={styles.ppp}>
                               <div className={styles.l_lft}>
                                <p className={styles.txt_6}>
                                   Barclays Royalist 12YO
                                </p>

                               </div>

                                 <div className={styles.rr}>
                                <p className={styles.txt_5}>
                                    400
                                </p>
                                 </div>
                            </li>

                            <li className={styles.ppp}>
                               <div className={styles.l_lft}>
                                <p className={styles.txt_6}>
                                  Old John
                                </p>

                               </div>

                                 <div className={styles.rr}>
                                <p className={styles.txt_5}>
                                    300
                                </p>
                                 </div>
                            </li>

                            <li className={styles.ppp}>
                               <div className={styles.l_lft}>
                                <p className={styles.txt_6}>
                                  Highland Park Viking Honour 12YO
                                </p>

                               </div>

                                 <div className={styles.rr}>
                                <p className={styles.txt_5}>
                                    900
                                </p>
                                 </div>
                            </li>

                            <li className={styles.ppp}>
                               <div className={styles.l_lft}>
                                <p className={styles.txt_6}>
                                  Maker's Mark Bourbon
                                </p>

                               </div>

                                 <div className={styles.rr}>
                                <p className={styles.txt_5}>
                                    500
                                </p>
                                 </div>
                            </li>

                            <li className={styles.ppp}>
                               <div className={styles.l_lft}>
                                <p className={styles.txt_6}>
                                  Tottori Bourbon
                                </p>

                               </div>

                                 <div className={styles.rr}>
                                <p className={styles.txt_5}>
                                    1200
                                </p>
                                 </div>
                            </li>

                            <li className={styles.ppp}>
                               <div className={styles.l_lft}>
                                <p className={styles.txt_6}>
                                  William Lawson’s Spiced
                                </p>

                               </div>

                                 <div className={styles.rr}>
                                <p className={styles.txt_5}>
                                    300
                                </p>
                                 </div>
                            </li>

                            <li className={styles.ppp}>
                               <div className={styles.l_lft}>
                                <p className={styles.txt_6}>
                                 Famous Grouse Smoky Black
                                </p>

                               </div>

                                 <div className={styles.rr}>
                                <p className={styles.txt_5}>
                                    400
                                </p>
                                 </div>
                            </li>

                             <li className={styles.ppp}>
                               <div className={styles.l_lft}>
                                <p className={styles.txt_6}>
                                 Black Ram Bourbon Finish
                                </p>

                               </div>

                                 <div className={styles.rr}>
                                <p className={styles.txt_5}>
                                    300
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
                              RUM
                            </p>
                           </div>

                           <ul className={styles.ul_13}>
                            <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Dead Man’s Finger White
                               </p>

                                <p className={styles.txt_4}>
                                    400
                                </p>
                            </li>
                              
                               <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Bacardi Anejo Cuatro 4
                               </p>

                                <p className={styles.txt_4}>
                                   400
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                  Dead Man’s Fingers Spiced
                               </p>

                                <p className={styles.txt_4}>
                                  400
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Bacardi Spiced
                               </p>

                                <p className={styles.txt_4}>
                                    400
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
                              tequila
                            </p>
                           </div>

                           <ul className={styles.ul_14}>
                            <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                Dos Comparenos
                               </p>

                                <p className={styles.txt_4}>
                                    300
                                </p>
                            </li>
                              
                                <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                Sauza Silver
                               </p>

                                <p className={styles.txt_4}>
                                    400
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Sauza Hacienda Gold
                               </p>

                                <p className={styles.txt_4}>
                                  600
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                 Bacardi Spiced
                               </p>

                                <p className={styles.txt_4}>
                                    400
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
                              vodka
                            </p>
                           </div>

                           <ul className={styles.ul_15}>
                            <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                Smoked VANTZA
                               </p>

                                <p className={styles.txt_4}>
                                    600
                                </p>
                            </li>
                              
                                <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                J.J Whitley
                               </p>

                                <p className={styles.txt_4}>
                                    350
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                Schmidt Supreme
                               </p>

                                <p className={styles.txt_4}>
                                  450
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
                              gin
                            </p>
                           </div>

                           <ul className={styles.ul_16}>
                            <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                Sipsmith London Dry Gin
                               </p>

                                <p className={styles.txt_4}>
                                    650
                                </p>
                            </li>
                              
                                <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                Roku Gin
                               </p>

                                <p className={styles.txt_4}>
                                    500
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                Whitley Neill
                               </p>

                                <p className={styles.txt_4}>
                                  450
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
                              OTHER
                            </p>
                           </div>

                           <ul className={styles.ul_17}>
                            <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                Ликер Блэкмайстер
                               </p>

                                <p className={styles.txt_4}>
                                    300
                                </p>
                            </li>
                              
                                <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                Вермут Mаrtini
                               </p>

                                <p className={styles.txt_4}>
                                    300
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                Коньяк Cоurvoisier VSОР
                               </p>

                                <p className={styles.txt_4}>
                                  950
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
                              Beer & CIDER
                            </p>
                           </div>

                           <ul className={styles.ul_18}>
                            <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                               Corona Extra 0.5
                               </p>

                                <p className={styles.txt_4}>
                                    350
                                </p>
                            </li>
                              
                                <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                Spaten 0.5
                               </p>

                                <p className={styles.txt_4}>
                                    400
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                Hoegaarden 0.5
                               </p>

                                <p className={styles.txt_4}>
                                  250
                                </p>
                            </li>

                             <li className={styles.ppp}>
                               <p className={styles.txt_4}>
                                Chester’s CIDER 0.5
                               </p>

                                <p className={styles.txt_4}>
                                  300
                                </p>
                            </li>

                           </ul>

                       </div>

                       <p className={styles.txt_8}>
                        актуальную винную карту вы можете попросить у бармена <span>:)</span>
                       </p>
                    </div>
                </div>
            </section>

            <section className={styles.mnu_bac}>
              <div className="container">
                <div className={styles.app_block}>
                 <div className={styles.app_itm}>
                   <div className={styles.app_q}>
                   <div className={styles.app_top}>
                    <img src="./menu_s/wk.png" alt="" />
                   </div>

                   <p className={styles.txt_9}>
                   Группа вконтакте
                   </p>

                   <p className={styles.txt_10}>
                  GOSU LOUNGE BAR
                   </p>

                   <div className={styles.btmm}>
                    <button className={styles.btn}>
                   <Link href="#" >
                   <img src="./menu_s/ah.png" alt="" />
                   </Link>
                   </button>

                   </div>
                   </div>
                   
                    <div className={styles.app_q}>
                   <div className={styles.app_top}>
                    <img src="./menu_s/wht.png" alt="" />
                   </div>

                   <p className={styles.txt_11}>
                   What’s app
                   </p>

                   <p className={styles.txt_10}>
                 +7 (915) 433-43-33
                   </p>

                  <div className={styles.btmm}>
                     <button className={styles.btn}>
                   <Link href="#" >
                   <img src="./menu_s/gr.png" alt="" />
                   </Link>
                   </button>
                  </div>

                   </div>

                    <div className={styles.app_q}>
                   <div className={styles.app_top}>
                    <img src="./menu_s/wk.png" alt="" />
                   </div>

                   <p className={styles.txt_12}>
                   INST
                   </p>

                   <p className={styles.txt_10}>
                  gosu.bar
                   </p>

                   <div className={styles.btmm}>
                    <button className={styles.btn}>
                   <Link href="#" >
                   <img src="./menu_s/ah2.png" alt="" />
                   </Link>
                   </button>
                   </div>
                   </div>
                 </div>

                </div>
              </div>
            </section>

            <section className={styles.ftr_ba}>
              <div className="container">
                <Footer/>
              </div>
            </section>
        </main>
        </>
    )
}