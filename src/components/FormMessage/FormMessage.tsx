import React, {useState} from 'react';
import type {PostData} from "../../types";
import {Button} from '@mui/material'
import {Divider} from "@mui/material";
import {Typography} from "@mui/material";

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
      <Divider
        component="div"
        role="presentation">
        <Typography
          className="text-uppercase text-info"
          variant="h2"
        >
          Chat
        </Typography>
      </Divider>

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

        <Button
          type="submit"
          variant="contained"
          className="mb-4"
        >
          Send Message
        </Button>
      </form>
    </>
  );
};

export default FormMessage;


