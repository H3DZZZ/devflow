import { model, models, Schema, Document } from "mongoose";

export interface ITags {
  name: string;
  questions: number;
}
export interface ITagDoc extends ITags, Document {}

const TagSchema = new Schema<ITags>(
  {
    name: { type: String, required: true, unique: true },
    questions: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Tags = models?.Tags || model<ITags>("Tags", TagSchema);

export default Tags;
