import React, {useState} from 'react';
import {PostData} from "../../types";

interface PropsForm {
  onSubmit: (e: React.FormEvent<HTMLFormElement>, post: PostData) => void;
}



const FormMessage: React.FC<PropsForm> = ({onSubmit}) => {

  const [data, setData] = useState<PostData>({
    dataInput: "",
    dataTextArea: ""
  });

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(prev => ({...prev, dataInput: e.target.value}));
  }

  const textAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData(prev => ({...prev, dataTextArea: e.target.value}));
  }

  return (
    <>
      <h5 className="text-center text-uppercase pt-3 text-info fs-4">Chat</h5>
      <form onSubmit={(e) => onSubmit(e, data)}>
        <div className="mb-3">
          <label className="form-label">Your name:</label>
          <input
            required
            value={data.dataInput}
            type="text"
            className="form-control"
            onChange={inputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Message:</label>
          <textarea
            required
            value={data.dataTextArea}
            className="form-control"
            onChange={textAreaChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-info mb-3"
        >
          Send Message
        </button>
      </form>
    </>
  );
};

export default FormMessage;


