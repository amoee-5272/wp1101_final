import mongoose from 'mongoose'
const Schema=mongoose.Schema;
const CardSchema= new Schema({
    cardId:{type: String, unique: true},
    belong:String,
    front:String, //正面內容
    back:String,  //反面內容
    correct:Boolean,
});
const Card = mongoose.model('card',CardSchema);
export default Card;