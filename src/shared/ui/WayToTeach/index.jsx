import Link from "next/link";

export default function WayToTeach(props){
    return(
        <li>
          <Link href="#" className="lnk">
          {props.title}
          </Link>
         </li>
    )
}