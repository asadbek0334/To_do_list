import "./PostList.css";

import PostListItem from "../PostListItem/PostListItem";

const PostList = ({ posts, onDelete, onToogleImportant, onToogleLiked }) => {
  const elements = posts.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={item.id} className="list-group-item">
        <PostListItem
          {...itemProps}
          onDelete={() => onDelete(id)}
          onToogleImportant={() => onToogleImportant(id)}
          onToogleLiked={() => onToogleLiked(id)}
        />
      </li>
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default PostList;
