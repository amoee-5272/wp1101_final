import express from 'express'
import {queryCard,createCard,deleteCard,deleteManyCard} from './api/handleCard.js'
import {queryCardBook,createCardBook,deleteCardBook,changeNumOfCard} from './api/handleCardBook.js'
import bodyParser from 'body-parser';
let Parser=bodyParser.json();
const router = express.Router();
//1. operation on CardBook
//allBooks:取得所有CardBook
router.get('/allBooks',async (req,res)=>{
    try{
        let result= await queryCardBook();
        res.status(200);
        res.json({"message":"success","data": result});
    }
    catch(e){
        res.status(403);
        res.json({"message":"error","data":null})
    }
})
//newBooks:新增一個CardBook
router.post('/newBook',Parser,async (req,res)=>{
    try{
        let name=req.body.name;
        let id=req.body.id;
        let color = req.body.color;
        await createCardBook(id,name,color);
        res.status(200);
        res.json({"message":"success"});
    }
    catch(e){
        res.status(403);
        res.json({"message":"error"})
    }
})
//deleteBook:刪除一個cardbook
router.delete('/deleteBook',async (req,res)=>{
    try{
        const id=req.query.id
        await deleteCardBook(id);
        await deleteManyCard(id);
        res.status(200);
        res.json({"message": "success"});
    }
    catch(e){
        res.status(403);
        res.json({"message": "error"})
    }
})
//2. card operation
//allcards: 取得所有Card
router.get('/allCards',async (req,res)=>{
    try{
        let book_id = req.query.id
        let result= await queryCard(book_id);
        res.status(200);
        res.json({"message":"success","data": result});
    }
    catch(e){
        res.status(403);
        res.json({"message":"error","data":null})
    }
})
//
router.post('/newCard',Parser,async (req,res)=>{
    try{
        let cardId=req.body.cardId;
        let belong=req.body.belong;
        let front = req.body.front;
        let back = req.body.back;
        await createCard(cardId,belong,front,back);
        await changeNumOfCard(belong,1)
        res.status(200);
        res.json({"message":"success"});

    }
    catch(e){
        res.status(403);
        res.json({"message":"error"})
    }
})
router.delete('/deleteCard',async (req,res)=>{
    try{
        const cardId=req.query.cardId
        const bookId=req.query.bookId
        await deleteCard(cardId);
        await changeNumOfCard(bookId,-1)
        res.status(200);
        res.json({"message": "success"});
    }
    catch(e){
        res.status(403);
        res.json({"message": "error"})
    }
})
export default router