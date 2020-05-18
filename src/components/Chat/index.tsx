import React, {useRef} from "react";
// import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import moment from 'moment';
import Iframe from 'react-iframe'
import MicrolinkCard from '@microlink/react';
import Linkify from 'linkifyjs/react';
import getUrls from 'get-urls';
import ScrollToBottom, { useScrollToBottom, useSticky } from 'react-scroll-to-bottom';

import { IRootState } from "../../store/rootReducer";
// import * as ChatActions from "../../store/chat/actions";
// import * as contactsAction from "../../store/contacts/actions";
import { MessageData } from "../../store/chat/types";
import AttachmentLink from "../AttachmentLink"

import "./Chat.css";

const mapStateToProps = (state: IRootState) => ({
  activeUserId: state.user.userData._id,
  nick: state.user.userData.nick,
  activeChat: state.chat.chatData,
  activeChatName: state.chat.activeChatName,
  messages: state.chat.chatData ? state.chat.chatData.messages : [],
  media: state.message.messageData.media,
  mediaUrl: state.media.fileData.url
});

// const mapDispatchToProps = (dispatch: Dispatch<IRootAction>) =>
//   bindActionCreators(
//     {
//       getContacts: contactsAction.getContacts.request,
//     },
//     dispatch
//   );

// type ChatProps = ReturnType<typeof mapStateToProps> &
//   ReturnType<typeof mapDispatchToProps>;

// type ChatProps = ReturnType<typeof mapStateToProps>;

const Chat: React.FC<any> = props => {

  const chatsRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
		scrollToBottom();
  }, [])
  
  React.useEffect(() => {
		scrollToBottom();
	}, [props.messages])

  const scrollToBottom = () => {
    if (chatsRef.current) {
      chatsRef.current.scrollTop = chatsRef.current.scrollHeight;
    }
  }

  const isUserMsg = (message: MessageData) => {
    // console.log(props.messages.message.owner._id, props.activeUserId, props.activeUserId === props.messages.message.owner._id)
    return message.owner._id === props.activeUserId ? true : false
  }

  const parseURLs = (text: string) => {
    const urls = getUrls(text);

    const parsedUrls = Array.from(urls).map((url, idx: number) => {
      return (
        <MicrolinkCard url={url} key={idx}/>
      )
    })

    return (
      <>
        {parsedUrls}
      </>
    )
  }

  const getFormattedMessage = (message: MessageData) => {
    let videoArray = message.text.match(/http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌ [\w\?‌ =]*)?/)
    if (videoArray) {
      let videoId = videoArray && videoArray[1]
      return (
        <>
          <a href={message.text}>{message.text}</a>
          <Iframe
            url={`https://www.youtube.com/embed/${videoId}`}
            width="100%"
            frameBorder={0}
            allow={"accelerometer"}
            allowFullScreen
            encrypted-media
            picture-in-picture
          />
        </>
      )
    } else if (message.media) {
      return (
        <div className="mediaAttachment">
          <p>{message.text}</p>
          {message.media.map(attachment => {
            if (attachment.type === "image/png" || attachment.type === "image/jpeg") {
              return (
                <img
                  key={attachment._id}
                  className="attachment"
                  src={`http://chat.fs.a-level.com.ua/${attachment.url}`}
                  alt="Attachment"
                />
              )
            } else if (attachment.type === "video/mp4" || attachment.type === "video/webm" || attachment.type === "video/ogg") {
              return (
                <>
                  <AttachmentLink
                    url={attachment.url}
                    icon={"file-video"}
                    text={attachment.originalFileName}
                  />
                  <video
                    key={attachment._id}
                    className="attachment"
                    controls>
                    <source src={`http://chat.fs.a-level.com.ua/${attachment.url}`} type="video/mp4" />
                    <source src={`http://chat.fs.a-level.com.ua/${attachment.url}`} type="video/webm" />
                    <source src={`http://chat.fs.a-level.com.ua/${attachment.url}`} type="video/ogg" />
                    <p>Your browser doesn't support HTML5 video. Download this file for review.</p>
                  </video>
                </>
              )
            } else if (attachment.type === "audio/mp3" || attachment.type === "audio/ogg") {
              return (
                <>
                  <AttachmentLink
                    url={attachment.url}
                    icon={"file-audio"}
                    text={attachment.originalFileName}
                  />
                  <audio
                    controls
                    key={attachment._id}
                    className="attachment"
                  >
                    <source src={`http://chat.fs.a-level.com.ua/${attachment.url}`} type="audio/mp3" />
                    <source src={`http://chat.fs.a-level.com.ua/${attachment.url}`} type="audio/ogg" />
                    <p>Your browser doesn't support HTML5 audio. Download this file for review.</p>
                  </audio>
                </>
              )
            } else if (attachment.type === "application/zip") {
              return (
                <AttachmentLink
                  url={attachment.url}
                  icon={"file-archive"}
                  text={attachment.originalFileName}
                />
              )
            } else if (attachment.type && (attachment.type.includes("application") || attachment.type.includes("text"))) {
              return (
                <AttachmentLink
                  url={attachment.url}
                  icon={"file-alt"}
                  text={attachment.originalFileName}
                />
              )
            } else {
              return (
                <AttachmentLink
                  url={attachment.url}
                  icon={"file"}
                  text={attachment.originalFileName}
                />
              )
            }
          })}
        </div>
      )
    } else {
      return (
        <>
          <p>{message.text}</p>
          <Linkify>{parseURLs(message.text)}</Linkify>
        </>
      )
    }
  }

  return (
    <div className="Chats" ref={chatsRef}>
      { props.messages && props.messages.map((message: MessageData) => (
        <div 
          key={message._id}
          className={`"Message_input_box" Chat ${isUserMsg(message) ? "is-user-msg" : ""}`}
          // onClick = {is_user_msg ? handleUserMessageEdit:handleContactMessageEdit}
          // onMouseDown = {handleMouseDown}
          // onMouseUp = {handleMouseUp}
          // data-active = {activeUser}
          data-name={isUserMsg(message) ? "You " : props.activeChatName}
          data-user={isUserMsg(message)}
          data-text={message.text}
          data-number={message._id}
        >
          {/* <div
            // className="{`C_Message_reply "Chat ${ containReply ? "show-reply":""} ${is_user_msg ? "is-user-msg" : ""}`}
            className="Chat is-user-msg"
          > */}
          {/* <p className = "Message_reply_name"> */}
          {/* {store.getState().chatBoxContainReply[2]} */}
          {/* </p> */}
          {/* {store.getState().chatBoxContainReply[1].substring(0,70)} */}
          {/* </div> */}
          {getFormattedMessage(message)}
          {/* <Linkify>{this.getFormattedMessage(message)}{this.parseURLs(message.text)}</Linkify> */}
          <time className="timeBlock">{moment(+message.createdAt).format('HH:mm')}</time>
          {/* <button 
            // data-active = {activeUser} 
            data-number = {message._id} 
            // onClick = {handleDeleteMessage} 
            className ="Chat_delete_button"
          >x</button> */}
        </div>
      ))}
    </div>
  );
}

export default connect(mapStateToProps, null)(Chat);