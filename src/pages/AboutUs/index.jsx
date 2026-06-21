import Header from "@/shared/ui/Header";
import styles from "./About.module.css"

export default function Page(){
    return(
        <>
        <main>
            <section>
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
        </main>
        </>
    )
}