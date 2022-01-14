import CardBook from '../../models/CardBook.js';
const queryCardBook=async()=>{
    let result= await CardBook.find().sort({name:-1}).limit(100);
    return result;
}
const createCardBook = async(id,name,color)=>{
    const existing = await CardBook.find({name:name,color:color});
    if(existing.length!==0) {
        return false; //已經有存在的
    }
    const newCardBook=new CardBook({bookId:id,name:name,color:color,num_of_card:0});
    newCardBook.save();
    return true;
}
const deleteCardBook = async(id)=>{
    await CardBook.deleteOne({bookId:id});
}
const changeNumOfCard = async(bookId,mod)=>{
    console.log("k");
    let target = await CardBook.findOne({bookId:bookId})
    let num = target.num_of_card+mod
    console.log(num, target);
    await CardBook.update({bookId:bookId},{num_of_card:num})
}


export  {queryCardBook,createCardBook,deleteCardBook,changeNumOfCard}