import React, {useState} from 'react';

const Posts = ({ posts, loading }) => {
  const [searchTitle, setSearchTitle] = useState("");
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
            <div class="container">
              <h3 className='search-heading'>SEARCH POSTS</h3>
              <div className='input'>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      </div>
            <div className='blog'>
            {posts.filter((value) => {
            if (searchTitle === "") {
              return value;
            } else if (
              value.title.toLowerCase().includes(searchTitle.toLowerCase())
            ) {
              return value;
            }
          }).map((item, i) => {
            return <div className='content'>
            <h4>Blog Post</h4>
            <h3 key={i}>{item.title}</h3>
            <p key={i}>{item.body}</p>
            </div>
            })} 
            </div>
            </div>
  );
};

export default Posts;