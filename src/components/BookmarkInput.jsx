import { useState } from 'react';
import styles from './BookmarkInput.module.css';
import styled from 'styled-components';

const AddButton = styled.button`
  background-color: green;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
`

const BookmarkInput = props => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [category, setCategory] = useState('Documentation');
  const [isValid, setIsValid] = useState(true);

  const submitHandler = event => {
    event.preventDefault();

    if (title.trim().length === 0 || url.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddBookmark(title, url, category);
    setTitle('');
    setUrl('');
    setCategory('Documentation');
    setIsValid(true);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div>
        <h2>Add New Resource</h2>
      </div>

      <div className={!isValid ? 'invalid' : ''}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={e => {
            setTitle(e.target.value);
            if (e.target.value.trim().length > 0) setIsValid(true);
          }}
        />
      </div>

      <div className={!isValid ? 'invalid' : ''}>
        <label>URL</label>
        <input
          type="text"
          value={url}
          onChange={e => {
            setUrl(e.target.value);
            if (e.target.value.trim().length > 0) setIsValid(true);
          }}
        />
      </div>

      <div>
        <label>Category</label>
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="Documentation">Documentation</option>
          <option value="Tools">Tools</option>
          <option value="Tutorials">Tutorials</option>
        </select>
      </div>

      {!isValid && <p>Please fill out both the Title and URL fields.</p>}

      <AddButton type="submit">Add Bookmark</AddButton>
    </form>
  );
};

export default BookmarkInput;