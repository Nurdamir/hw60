import React from 'react';

interface MessageProps {
  data: string;
  author: string;
  message: string;
}

const Message: React.FC<MessageProps> = ({data, message, author}) => {
  return (
    <div className="card mb-2 p-3">
        <div className="card-title d-flex justify-content-between text-info">
          <span><strong className="me-2">From:</strong>{author}</span>
          <span><strong  className="me-2">Date:</strong>{data}</span>
        </div>
        <p className="card-text border-top pt-1">{message}</p>
    </div>
  );
};

export default Message;