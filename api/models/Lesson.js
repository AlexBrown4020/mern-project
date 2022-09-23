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
    description:{
        type: String,
    },
    photo:{
        type: String
    },
    creator: {
        type: String,
        required: true
    },
    participants: [String]
});

export default mongoose.model('Lesson', LessonSchema);