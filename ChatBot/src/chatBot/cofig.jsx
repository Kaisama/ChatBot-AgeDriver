import {createChatBotMessage} from 'react-chatbot-kit'
import Avatar from './Avatar';
import UserAvatar from './UserAvatar';
import StartBtn from './StartBtn';
import StartSlow from './StartSlow';
import data from './data';
import DisplayImage from './DisplayImage';

const config={
    botName:"AgeDriver Explorer",
    initialMessages:[createChatBotMessage(`Hi! I'm AgeDriver Explorer`,{
        widget:"StartBtn"
    })],
    customComponents:{
        botAvatar:(props)=><Avatar {...props}/>,
        userAvatar:(props)=><UserAvatar {...props}/>

    },
    state:{
        checker:null,
        data:data,
        userData:{
            name:"",
            age:0,
            category:"",
            product:{
                name:"",
                link:"",
                imageUrl:"",
            }
        }
    },
    widgets:[
        {
            widgetName:"StartBtn",
            widgetFunc:(props)=> <StartBtn {...props}/>
        },
        {
            widgetName:"StartSlow",
            widgetFunc:(props)=> <StartSlow {...props}/>
        },{
            widgetName:"finalImage",
            widgetFunc:(props)=><DisplayImage {...props}/>
        }
    ]
};

export default config;