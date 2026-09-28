import styled from 'styled-components';
import './BookmarkItem.css';

const FavoriteButton = styled.button`
  background-color: green;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
`

const DeleteButton = styled.button`
  background-color: crimson;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
`
const BookmarkItem = props => {
  return (
    <li
      style={{
        border: '2px solid grey'
      }}
      className="bookmark"
    >
      <div>
        <h3>{props.title}</h3>
        <span>{props.category}</span>
      </div>

      <p>
        <a href={props.url} target="_blank" rel="noreferrer">
          {props.url}
        </a>
      </p>

      <div>
        <FavoriteButton onClick={() => props.onToggleFavorite(props.id)}>
          {props.isFavorite ? '★ Favorited' : '☆ Favorite'}
        </FavoriteButton>
        <DeleteButton onClick={() => props.onDelete(props.id)}>
          Delete
        </DeleteButton>
      </div>
    </li>
  );
};

export default BookmarkItem;