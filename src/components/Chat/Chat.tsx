import React, {useState, useEffect} from 'react';
import FormMessage from "../FormMessage/FormMessage";
import {PostData, ResponseMessage} from "../../types";
import Message from "../Message/Message";


const URL = 'http://146.185.154.90:8000/messages';

const Chat = () => {
  const [messages, setMessages] = useState<ResponseMessage[]>([]);


  useEffect(() => {
    let url = 'http://146.185.154.90:8000/messages';
    setInterval(() => {
      const fetchData = async (urlOne: string) => {

        const response = await fetch(urlOne);
        if (response.ok) {
          const responseMessages: ResponseMessage[] = await response.json();
          if (responseMessages.length > 0) {
            url = `http://146.185.154.90:8000/messages?datetime=${responseMessages[responseMessages.length - 1].datetime}`;
            setMessages(responseMessages)
          }
        }
      };

      fetchData(url).catch(e => console.error(e))

    }, 3000);
  }, [])


  const onFormSubmit = async (e: React.FormEvent, post: PostData) => {
    e.preventDefault();
    try {
      const data = new URLSearchParams();
      data.set('message', post.dataTextArea);
      data.set('author', post.dataInput);

      const response = await fetch(URL, {
        method: 'post',
        body: data,
      });

      if (response.ok) {
        post.dataInput = '';
        post.dataTextArea = '';
      }
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className='p-5'>
      <FormMessage
        onSubmit={(e, post) => onFormSubmit(e, post)}
      />

      <div>
        {messages.map(message => (
          <Message key={message.datetime + Math.random()} data={message.datetime} author={message.author}
                   message={message.message}/>
        ))}
      </div>
    </div>
  );
};

export default Chat;