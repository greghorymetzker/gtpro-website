import { Link } from "remix";
import Box from "~/components/BaseKit/Box/Box"
import Icon from "~/components/BaseKit/Icon/Icon"
import s from "./styles.css";

export const links = [{ rel: "stylesheet", href: s }];

export const LinkNavigation=({icon})=>{

            

            
 return (
   <Link className={"link_navbar"} to="/">
     <Icon name={icon} />
   </Link>
 );
            
}