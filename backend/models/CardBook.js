import mongoose from 'mongoose'
const Schema=mongoose.Schema;
const CardBookSchema= new Schema({
    bookId:{type: String, unique: true},
    name:String,
    color:String,
    num_of_card:Number,
});
const CardBook = mongoose.model('cardbook',CardBookSchema);
export default CardBook;