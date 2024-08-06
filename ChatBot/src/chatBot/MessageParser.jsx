import { cloneElement } from "react";
import { Children } from "react";

const MessageParser=({children,actions})=>{
    const parse=(message)=>{
        console.log(message);
    }

    return(
        <div>
            {Children.map(children,(child)=>{
                return cloneElement(child,{
                    parse:parse,
                    actions:{},
                
                });
            })}
        </div>
    )
}

export default MessageParser