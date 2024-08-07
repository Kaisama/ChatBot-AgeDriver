import { cloneElement } from "react";
import { Children } from "react";

const MessageParser=({children,actions})=>{
    console.log(children.props.state.userData);
    const parse=(message)=>{
        const {checker}=children.props.state;
      console.log(message);

       if(checker==="age"){
        actions.afterNameMessage();
        children.props.state.userData.name=message;
       }

       if(checker === "preference" && Number(message)){
        actions.afterAgeMessage();
        children.props.state.userData.age=message;
        if(message<=10){
            children.props.state.userData.category="kid";
        }
        else if(message>10 && message <=20){
            children.props.state.userData.category="teenagers";
        }
        else {
            children.props.state.userData.category="adults";
        }

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