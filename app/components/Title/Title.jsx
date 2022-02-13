import { Link } from "remix";
import s from "./styles.css";

export const links = [{ rel: "stylesheet", href: s }];

export const Title=({title,style})=>{

return <span className='title' style={style}>
    {title}
</span>

}