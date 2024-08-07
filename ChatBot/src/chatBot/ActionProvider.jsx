import { cloneElement } from "react"
import { Children } from "react"

const ActionProvider=({createChatBotMessage,setState,children})=>{

    const finalResult=(name,age,preference,vehicle)=>{
        const message=createChatBotMessage(`Got it, ${name} ! Based on your ${age} and preference for a ${preference} ride I recommend ${vehicle}. Enjoy!`)
        updateState(message)
    }

    const afterAgeMessage=()=>{
        const message= createChatBotMessage("Do you lean towards a fast anf thrilling ride or prefer a more relaxed and comfortable ride",{
            widget:"StartSlow"
        });
        updateState(message)
    }

    const afterNameMessage=()=>{
        const message =createChatBotMessage("Let me know your age so I can suggest you the best ride for you.")
        updateState(message,"preference")
    }


    const initialAction=()=>{
        const message=createChatBotMessage('Just type in your name to begin');
        updateState(message , "age");
    }

    const updateState=(message , checker)=>{
        setState((prev)=>({
            ...prev,
            messages:[...prev.messages,message],
            checker
        }))
    }
    return (
        <>
            {Children.map(children,(child)=>{
                return cloneElement(child,{
                    actions:{
                        initialAction,
                        afterNameMessage,
                        afterAgeMessage,
                        finalResult
                    },
                });
            })}
        </>
    );
};

export default ActionProvider;