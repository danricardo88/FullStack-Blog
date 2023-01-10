/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';

const Write = () => {
  const { state } = useLocation();
  const [value, setValue] = useState(state?.desc || '');
  const [title, setTitle] = useState(state?.title || '');
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState(state?.cat || '');
  const [status, setStatus] = useState('Draft');
  const [visibility, setVisibility] = useState('Public');
  const navigate = useNavigate();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const response = await axios.post('/upload', formData);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = async (event) => {
    event.preventDefault();
    const imageUrl = await upload();

    try {
      if (state) {
        await axios.put(`/posts/${state.id}`, {
          title,
          desc: value,
          cat: category,
          img: file ? imageUrl : '',
        });
      } else {
        await axios.post('/posts/', {
          title,
          desc: value,
          cat: category,
          img: file ? imageUrl : '',
          date: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
        });
      }
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b>
            {status}
          </span>
          <span>
            <b>Visibility: </b>
            {visibility}
          </span>
          <input
            style={{ display: 'none' }}
            type="file"
            id="file"
            onChange={(event) => setFile(event.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button type="button" onClick={() => setStatus('Draft')}>Save as a draft</button>
            <button type="button" onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input
              type="radio"
              checked={category === 'art'}
              name="category"
              value="art"
              id="art"
              onChange={(event) => setCategory(event.target.value)}
            />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={category === 'science'}
              name="category"
              value="science"
              id="science"
              onChange={(event) => setCategory(event.target.value)}
            />
            <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={category === 'other'}
              name="category"
              value="other"
              id="other"
              onChange={(event) => setCategory(event.target.value)}
            />
            <label htmlFor="other">Other</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
