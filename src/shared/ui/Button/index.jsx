import styles from "./Button.module.css"

export default function Button({children, onClick}){
console.log("Button component Render");

    return(
        <button className={styles.btn_rsp} onClick={onClick}>
         {children}
        </button>
    )
}