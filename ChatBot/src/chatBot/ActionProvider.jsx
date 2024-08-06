import { cloneElement } from "react"
import { Children } from "react"

const ActionProvider=({createChatBotMessage,setState,children})=>{
    return (
        <>
            {Children.map(children,(child)=>{
                return cloneElement(child,{
                    actions:{},
                });
            })}
        </>
    );
};

export default ActionProvider;