import { useState } from 'react'
import './App.css'
import BlogList from './BlogList';
function App() {
  const [blogList, setBlogList] = useState([
    {
      id: 1,
      title: "Mern Stack",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Alias inventore perspiciatis in praesentium architecto totam error deleniti at quos aut aspernatur sint, quasi ratione commodi maxime incidunt.Distinctio, placeat tempore!"
    }, {
      id: 2,
      title: "College",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Aliquam quos obcaecati recusandae quia voluptatum quo, laborum tempore maxime eligendi quidem nihil repellendus quisquam, blanditiis ducimus! Quod expedita quaerat voluptatibus culpa.tis?"
    }
  ]);

  const DeleteBtn = (id) => {
    setBlogList(blogList.filter(blog => blog.id !== id));
  };

  return (
    <>
      <BlogList blogs={blogList} onDelete={DeleteBtn} />
    </>
  )
}

export default App
