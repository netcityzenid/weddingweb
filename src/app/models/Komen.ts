import { Schema, model, models } from "mongoose";

const commentSchema = new Schema({
  name: { type: String, required: true },
  comment: { type: String, required: true },
  attendance: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Cegah model duplikasi selama hot-reloading di Next.js
const Comment = models.Comment || model("Comment", commentSchema);

export default Comment;
