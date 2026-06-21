import Header from "@/shared/ui/Header";
import styles from "./Par.module.css"
import Link from "next/link";
import Footer from "@/shared/ui/Footer";

export default function Page(){
    return(
        <>
        <main>
            <section id="Bar-page" className={styles.sh_s}>
                <div className="container">
                    <Header/>

                    <div className={styles.bar_banner}>
                      <button className={styles.btn_bar}>
                        <Link href="#" className={styles.lnk_br}>
                        забронировать ПК
                        </Link>
                      </button>
                    </div>
                </div>
            </section>

            <section className={styles.sh_s}>
                <div className="container">
                    <div className={styles.shp_block}>
                       <div className={styles.shp_itm}>
                          <div className={styles.pht_1}>
                            <p>
                                +21
                            </p>
                          </div>

                          <p className={styles.bar_txt}>
                                Покупка и употребления спиртных напитков и табачной <br />
                                продукций разрешены лицам, достигшие 21 года. Просьба <br />
                                перед покупкой предъявить паспорт администратору.
                            </p>
                       </div>
                    </div>
                </div>
            </section>

            <section className={styles.brr}>
                <div className="container">
                    <div className={styles.bar_cataloc_block}>
                      <div className={styles.catalog_top}>
                         <div className={styles.carona_ic}>
                            <img src="./bar/carona.png" alt="" />
                         </div>

                         <p className={styles.bar_txt2}>
                             закупись к катке в нашем баре
                         </p>
                      </div>

                      <div className={styles.priduct_b}>
                           <div className={styles.prdt}>
                             <p className={styles.bar_txt3}>
                                 кальяны
                             </p>

                             <div className={styles.prouct_grid}>
                                <div className={styles.priduct_lm}>
                                  <div className={styles.priduct_top}>
                                    <img src="./bar/pngegg.png" alt="" />
                                  </div>

                                  <div className={styles.prdct_bottom}>
                                        <p className={styles.bar_txt4}>
                                            Со вкусом мяты
                                        </p>

                                        <div className={styles.btm}>
                                        <p className={styles.bar_txt5}>
                                            130₽
                                        </p>

                                        <p className={styles.bar_txt6}>
                                             за 1 шт.
                                        </p>
                                        </div>
                                  </div>
                                </div>

                                <div className={styles.priduct_lm}>
                                  <div className={styles.priduct_top}>
                                    <img src="./bar/pngegg.png" alt="" />
                                  </div>

                                  <div className={styles.prdct_bottom}>
                                        <p className={styles.bar_txt4}>
                                            Со вкусом мяты
                                        </p>

                                        <div className={styles.btm}>
                                        <p className={styles.bar_txt5}>
                                            130₽
                                        </p>

                                        <p className={styles.bar_txt6}>
                                             за 1 шт.
                                        </p>
                                        </div>
                                  </div>
                                </div>


                                <div className={styles.priduct_lm}>
                                  <div className={styles.priduct_top}>
                                    <img src="./bar/pngegg.png" alt="" />
                                  </div>

                                  <div className={styles.prdct_bottom}>
                                        <p className={styles.bar_txt4}>
                                            Со вкусом мяты
                                        </p>

                                        <div className={styles.btm}>
                                        <p className={styles.bar_txt5}>
                                            130₽
                                        </p>

                                        <p className={styles.bar_txt6}>
                                             за 1 шт.
                                        </p>
                                        </div>
                                  </div>
                                </div>



                                <div className={styles.priduct_lm}>
                                  <div className={styles.priduct_top}>
                                    <img src="./bar/pngegg.png" alt="" />
                                  </div>

                                  <div className={styles.prdct_bottom}>
                                        <p className={styles.bar_txt4}>
                                            Со вкусом мяты
                                        </p>

                                        <div className={styles.btm}>
                                        <p className={styles.bar_txt5}>
                                            130₽
                                        </p>

                                        <p className={styles.bar_txt6}>
                                             за 1 шт.
                                        </p>
                                        </div>
                                  </div>
                                </div>
                             </div>
                           </div>

                            <div className={styles.prdt}>
                             <p className={styles.bar_txt3}>
                                 алкоголь
                             </p>

                             <div className={styles.prouct_grid}>
                                <div className={styles.priduct_lm}>
                                  <div className={styles.priduct_top}>
                                    <img src="./bar/pngegg.png" alt="" />
                                  </div>

                                  <div className={styles.prdct_bottom}>
                                        <p className={styles.bar_txt4}>
                                            Со вкусом мяты
                                        </p>

                                        <div className={styles.btm}>
                                        <p className={styles.bar_txt5}>
                                            130₽
                                        </p>

                                        <p className={styles.bar_txt6}>
                                             за 1 шт.
                                        </p>
                                        </div>
                                  </div>
                                </div>

                                <div className={styles.priduct_lm}>
                                  <div className={styles.priduct_top}>
                                    <img src="./bar/pngegg.png" alt="" />
                                  </div>

                                  <div className={styles.prdct_bottom}>
                                        <p className={styles.bar_txt4}>
                                            Со вкусом мяты
                                        </p>

                                        <div className={styles.btm}>
                                        <p className={styles.bar_txt5}>
                                            130₽
                                        </p>

                                        <p className={styles.bar_txt6}>
                                             за 1 шт.
                                        </p>
                                        </div>
                                  </div>
                                </div>


                                <div className={styles.priduct_lm}>
                                  <div className={styles.priduct_top}>
                                    <img src="./bar/pngegg.png" alt="" />
                                  </div>

                                  <div className={styles.prdct_bottom}>
                                        <p className={styles.bar_txt4}>
                                            Со вкусом мяты
                                        </p>

                                        <div className={styles.btm}>
                                        <p className={styles.bar_txt5}>
                                            130₽
                                        </p>

                                        <p className={styles.bar_txt6}>
                                             за 1 шт.
                                        </p>
                                        </div>
                                  </div>
                                </div>



                                <div className={styles.priduct_lm}>
                                  <div className={styles.priduct_top}>
                                    <img src="./bar/pngegg.png" alt="" />
                                  </div>

                                  <div className={styles.prdct_bottom}>
                                        <p className={styles.bar_txt4}>
                                            Со вкусом мяты
                                        </p>

                                        <div className={styles.btm}>
                                        <p className={styles.bar_txt5}>
                                            130₽
                                        </p>

                                        <p className={styles.bar_txt6}>
                                             за 1 шт.
                                        </p>
                                        </div>
                                  </div>
                                </div>
                             </div>
                           </div>
                      </div>
                    </div>
                </div>
            </section>

            <section className={styles.pht_b}>
                <div className="container">
                    <div className={styles.photo_bar_block}>
                      <div className={styles.photo_top_bar}>
                       <div className={styles.camera_icn}>
                        <img src="./bar/camera.png" alt="" />
                       </div>


                         <p className={styles.bar_txt7}>
                          Фотки с нашего бара
                         </p>
                      </div>

                         <div className={styles.bnr_bar}>
                          <img src="./bar/bnr.png" alt="" />
                         </div>
                    </div>
                </div>
            </section>

            <section className={styles.brr_b}>
              <div className="container">
                <div className={styles.coctails_block}>
                  <div className={styles.coctails_left}>
                   <div className={styles.coc_logo}>
                    <img src="./bar/coc_logo.png" alt="" />
                   </div>

                   <p className={styles.bar_txt8}>
                   Расслабся после тяжелых каток в нашем баре
                   </p>

                   <div className={styles.coctails_flex}>
                     <div className={styles.coctails_itm}>
                       <div className={styles.coctails_top}>
                          <img src="./bar/cc_itm.png" alt="" />
                       </div>
                          
                          <p className={styles.bar_txt9}>
                            Крепкие напитки
                          </p>
                     </div>

                     <div className={styles.coctails_itm}>
                       <div className={styles.coctails_top}>
                          <img src="./bar/cc_itm3.png" alt="" />
                       </div>
                          
                          <p className={styles.bar_txt9}>
                            Паровые коктейли
                          </p>
                     </div>

                     <div className={styles.coctails_itm}>
                       <div className={styles.coctails_top}>
                          <img src="./bar/cc_itm.png" alt="" />
                       </div>
                          
                          <p className={styles.bar_txt9}>
                            Кальяны
                          </p>
                     </div>
                   </div>
                  </div>

                </div>
              </div>
            </section>

            <section className={styles.ftt}>
              <div className="container">
                <Footer/>
              </div>
            </section>
        </main>
        </>
    )
}