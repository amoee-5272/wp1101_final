import React, { useState, useEffect, useRef } from 'react'
import 'antd/dist/antd.css';
import instance from './instance.js'
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid'
//import moment from 'moment'

//import { Button } from '@material-ui/core'
import CardBook from './Components/CardBook';
import AddModal from "./Components/AddModal";

/*const Wrapper = styled.div`
  margin: 100px auto auto auto;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: "auto";
  height:
`;*/

function Board(props) {
  const [books, setBooks] = useState([]);

  //variables for create new book (AddModal)
  const [visible, setVisible] =useState(false);
  const addNameRef = useRef();
  const addColorRef = useRef();



  // TODO 2-(2): fetch all posts from database
  useEffect(() => {
    const fetchData =async () => {
      const {
        data: {message, data},
      } =await instance.get("/api/allBooks");

      setBooks(data);
    }

    fetchData();
  })



  //for AddModal to create new card book
  const handleCancel =() =>
  {
    setVisible(false);
    addNameRef.current.state.value = "";
    addColorRef.current.state.value = "#000000";
  };

  const handleCreate = async() =>
  {
    const name = addNameRef.current.state.value;
    addNameRef.current.state.value = "";

    console.log( addNameRef.current.state.value);

    const color = addColorRef.current.state.value;
    addColorRef.current.state.value = "#000000";

    if (!name || name.trim() === "")
      return;

    setVisible(false);

    await instance.post("/api/newBook", {
      name,
      id: uuidv4(),
      color,
    });
  };

  const deleteCardBook =async (id) =>
    await instance.delete("/api/deleteBook", {params: {id:id}});


  return (
    <>
      {/* <div className="board-navbar">
        <div style={{ fontWeight: 'bold', fontSize: 28 }}>Post List</div>
        <Button className="board-launch-btn" variant="contained" color="primary" id="pid-post-btn" onClick={() => props.navigate('/new')}>New Post</Button>
      </div> */}

      <div style ={{
          margin: "100px auto auto auto",
          height: 500,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          overflow: "auto",
      }}>
        <div style ={{width: "70%"}}>
          {books.length ?
              books.map((cardBook, i) =>
                <CardBook
                  cardBookInfo ={cardBook}
                  type ="normal-card-book"
                  navigate ={() => props.navigate(`/cardBook/${cardBook.bookId}`)}
                  deleteFunc ={deleteCardBook}
                />
                // <div className="card-book" key={i} id={`bid-${i}`} onClick={() => props.navigate(`/post/${post.postId}`)}>
                //   <span className="card-book-name"> {} </span>

                //   <div className="article-postfix">
                //     <span className="each-time" id={`pid-${i}-time`}>{moment(post.timestamp).format('YYYY-MM-DD')}</span>
                //   </div>
                // </div>
              ): <div/>}

          <CardBook
            type ="card-book-creater"
            onClick ={() => setVisible(true)}
          />
        </div>

        <AddModal
          visible={visible}
          onCreate={handleCreate}
          onCancel={handleCancel}
          nameRef ={addNameRef}
          colorRef ={addColorRef}
        />
      </div>
    </>
  )
}

export default Board;
