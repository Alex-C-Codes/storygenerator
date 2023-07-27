import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Blog() {

    const [blogs, setBlogs] = useState([]);
    // const [title, setTitle] = useState('');
    // const [content, setContent] = useState('');
  
    useEffect(() => {
      fetchBlogs();
    }, []);
  
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/blogs');
        setBlogs(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    const formatDate = (dateString) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };
    
    // const handleCreateBlog = async () => {
    //   try {
    //     const response = await axios.post('http://localhost:5001/api/blogs', { title, content });
    //     setBlogs([...blogs, response.data]);
    //     setTitle('');
    //     setContent('');
    //   } catch (err) {
    //     console.error(err);
    //   }
    // };

    return (
    <div>
      <h1>Blog</h1>
      {/* <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
        />
        <button onClick={handleCreateBlog}>Create Blog</button>
      </div> */}
      <div>
        {blogs.map((blog) => (
          <div key={blog._id}>
            <h3>{blog.title}</h3>
            <p>Date Created: {formatDate(blog.date)}</p>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );

}
