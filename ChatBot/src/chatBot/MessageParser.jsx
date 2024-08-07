import { cloneElement } from "react";
import { Children } from "react";

const MessageParser=({children,actions})=>{
    console.log(children);
    const parse=(message)=>{
        const {checker}=children.props.state;
       console.log(message);
       if(checker==="age"){
        actions.afterNameMessage();
       }

       if(checker === "preference" && Number(message)){
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