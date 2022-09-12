import mongoose from "mongoose";
const { Schema } = mongoose;

const LessonSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    time:{
        type: Date,
        required: true
    },
    description:{
        type: String,
    },
    photos:{
        type:[String]
    }
});

export default mongoose.model('Lesson', LessonSchema);