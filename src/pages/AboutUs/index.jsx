import Header from "@/shared/ui/Header";
import styles from "./About.module.css"
import Link from "next/link";
import Footer from "@/shared/ui/Footer";
// import pht from ""

export default function Page(){
    return(
        <>
        <main>
            <section id="about-page" className={styles.ab_2}>
                <div className="container">
                    <Header/>

                    <div className={styles.about_block}>
                       <div className={styles.about_itm}>
                         <img src="./about/DSC.png" alt="" />
                       </div>

                       <p className={styles.txt_abs}>
                         More than a simple <br />
                          computer club 
                       </p>
                    </div>
                </div>
            </section>

            <section className={styles.b}>
                <div className="container">
                    <div className={styles.about_block_2}>
                        <div className={styles.abt_cntr}>
                          <p className={styles.txt_abot}>
                           Gosu
                          </p>

                          <p className={styles.txt_abot2}>
                           About us
                          </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.ab_d}>
                <div className="container">
                      <div className={styles.about_block}>
                       <div className={styles.about_itm}>
                         <img src="./about/pc.png" alt="" />
                       </div>

                       <p className={styles.txt_abs}>
                         Девайсы Premium брендов
                       </p>

                       <p className={styles.txt_abs2}>
                         Наш клуб оборудован девайсами топового <br />
                         уровня, каждый из которых обеспечит <br />
                         наилучший комфорт и полный фокус на игре.
                       </p>
                    </div>
                </div>
            </section>

            <section className={styles.ab_2}>
                <div className="container">
                    <div className={styles.favor_game_block}>
                      <img src="./about/fvr_game.png" alt="" />

                      <div className={styles.favor}>
                         <p className={styles.txt_abot3}>Избранное место геймера</p>
                         <p className={styles.txt_abot4}>
                         Your favorite places
                         </p>

                      </div>
                    </div>
                </div>
            </section>

            <section className={styles.ab_2}>
                <div className="container">
                    <div className={styles.about_block}>
                       <div className={styles.about_itm}>
                         <img src="./about/gmm.png" alt="" />
                       </div>

                       <p className={styles.txt_abs}>
                        C Gosu вкуснее
                       </p>

                       <p className={styles.txt_abs2}>
                         У нас есть не только игровое пространоство но и<br />
                         личный бар со вкусной едой, утоляющими жажду <br />
                         напитками и отдел с кальянами
                       </p>
                    </div>
                </div>
            </section>

            <section className={styles.hh}>
                <div className="container">
                    <div className={styles.baar_hookah_block}>
                    <p className={styles.txt_abot5}>
                    Для ценителей
                    </p>

                     <p className={styles.txt_abot6}>
                    Bar & Hookah
                    </p>
                    </div>
                </div>
            </section>

            <section className={styles.abt_b}>
                <div className="container">
                    <div className={styles.hk_block}>
                       <div className={styles.hk_top}>
                        <p className={styles.txt_abot7}>
                          Bar & Hookah
                      </p>

                        <p className={styles.txt_abot8}>
                          ламповая атмосфера <br />
                           нашего бара
                        </p>

                        <div className={styles.hk_grid}>
                             <div className={styles.hk_lm}>
                               <img src="./about/ck1.png" alt="" /> 
                             </div>

                              <div className={styles.hk_lm}>
                               <img src="./about/ck2.png" alt="" /> 
                             </div>

                              <div className={styles.hk_lm}>
                               <img src="./about/ck3.png" alt="" /> 
                             </div>

                              <div className={styles.hk_lm}>
                               <img src="./about/ck4.png" alt="" /> 
                             </div>

                              <div className={styles.hk_lm}>
                               <img src="./about/ck5.png" alt="" /> 
                             </div>

                              <div className={styles.hk_lm}>
                               <img src="./about/ck6.png" alt="" /> 
                             </div>
                        </div>

                        <button className={styles.about_btn}>
                          <Link href="#">
                          <img src="./about/abt_btn.png" alt="" />
                          </Link>
                        </button>
                       </div>
                    </div>
                </div>
            </section>

            <section className={styles.ab_2}>
              <div className="container">
                  <div className={styles.baar_hookah_block}>
                    <p className={styles.txt_abot5}>
                    Поможем в любую минуту
                    </p>

                     <p className={styles.txt_abot6}>
                    Services
                    </p>
                    </div>
              </div>
            </section>

            <section className={styles.ab_2}>
              <div className="container">
                 <div className={styles.about_block}>
                       <div className={styles.about_itm}>
                         <img src="./about/tmm.png" alt="" />
                       </div>

                       <p className={styles.txt_abs}>
                         Всегда на связи
                       </p>
                    </div>
              </div>
            </section>

            <section className={styles.ab_2}>
              <div className="container">
                 <div className="container">
                  <div className={styles.baar_hookah_block}>
                    <p className={styles.txt_abot5}>
                    Поможем в любую минуту
                    </p>

                     <p className={styles.txt_abot6}>
                    Акции
                    </p>
                    </div>
              </div>
              </div>
            </section>

            <section className={styles.ab_2}>
              <div className="container">
                 <div className={styles.about_block}>
                       <div className={styles.about_itm}>
                         <img src="./about/tmm2.png" alt="" />
                       </div>

                       <p className={styles.txt_abs}>
                         При покупке парового коктейля <br />
                         час игры в любой из зон в <br />
                         подарок
                       </p>
                    </div>
              </div>
            </section>

            <section className={styles.ab_2}>
              <div className="container">
                <Footer/>
              </div>
            </section>
        </main>
        </>
    )
}