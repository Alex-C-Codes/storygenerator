import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Blog() {

    const [blogs, setBlogs] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
  
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
    
    const handleCreateBlog = async () => {
      try {
        const currentDate = new Date();
        const response = await axios.post('http://localhost:5001/api/blogs', { title, content, date: currentDate });
        setBlogs([...blogs, response.data]);
        setTitle('');
        setContent('');
      } catch (err) {
        console.error(err);
      }
    };

    return (
    <div>
      <h1>Create Blog</h1>
      <div>
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
      </div>
      {/* <div>
        {blogs.map((blog) => (
          <div key={blog._id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}