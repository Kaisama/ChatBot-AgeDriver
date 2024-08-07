import { cloneElement } from "react";
import { Children } from "react";

const MessageParser=({children,actions})=>{
    const parse=(message)=>{
        const {checker}=children.props.state;
       console.log(message);
       if(checker==="age"){
        actions.afterNameMessage();
       }

       if(checker === "preference"){
        actions.afterAgeMessage();

       }
       
    }

    return(
        <div>
            {Children.map(children,(child)=>{
                return cloneElement(child,{
                    parse:parse,
                    actions:actions,
                
                });
            })}
        </div>
    )
}

export default MessageParser