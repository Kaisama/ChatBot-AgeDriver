import {createChatBotMessage} from 'react-chatbot-kit'
import Avatar from './Avatar';
import UserAvatar from './UserAvatar';

const config={
    botName:"AgeDriver Explorer",
    initialMessages:[createChatBotMessage(`Hi! I'm AgeDriver Explorer`)],
    customComponents:{
        botAvatar:(props)=><Avatar {...props}/>,
        userAvatar:(props)=><UserAvatar {...props}/>

    }
};

export default config;