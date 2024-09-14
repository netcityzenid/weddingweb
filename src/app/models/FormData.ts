import mongoose, { Document, Model, Schema } from "mongoose";

interface IFormData extends Document {
  name: string;
  hobby: string;
  submittedAt: Date;
}

const FormDataSchema: Schema<IFormData> = new Schema({
  name: { type: String, required: true },
  hobby: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
});

const FormData: Model<IFormData> = mongoose.models.FormData || mongoose.model<IFormData>("FormData", FormDataSchema);

export default FormData;
