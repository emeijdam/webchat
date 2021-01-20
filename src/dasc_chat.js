'use strict';

import { ReactSlackChat } from 'react-slack-chat';

const { useState, useEffect } = React

function WebChat() {
  const [visitorId, setVisitorId] = useState(0);
  const [options, setOptions] = useState({});

  console.log(window.webChatOptions);
  useEffect(() => {
  // console.log(window.webChatOptions);
    setOptions(window.webChatOptions);
    setVisitorId(Math.floor(Math.random() * Math.floor(100)))

  }, []);

return (
  <ReactSlackChat
    botName={'web-visitor-live-ranid-' +  visitorId} // VisitorID, CorpID, Email, IP address etc.
    apiToken='eG94Yi0xMDAyNDEwOTE2Nzg5LTE2Mjk0ODI0NzI5MTgtMVVldnh0WGVVbVEzd1BuQkhCSnljTTFu'
    channels={[{name: 'dascwebchat'}]}
    helpText='dasc team live chat'
    themeColor={options.themeColor}
    userImage='http://www.iconshock.com/img_vista/FLAT/mail/jpg/robot_icon.jpg'
    debugMode={false}
    singleUserMode={true}
    closeChatButton={true}
  />
  );
}

let domContainer = document.querySelector('#web_chat_container');
ReactDOM.render(<WebChat />, domContainer);
