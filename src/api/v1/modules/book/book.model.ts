import mongoose, { Schema } from 'mongoose';
import { v4 as uuid } from 'uuid';

export const BookSchema = new Schema(
  {
    _id: {
      type: String,
      default: () => {
        return uuid();
      },
    },
    name: {
      type: String,
      required: true,
      index: true,
      maxlength: 300,
    },
    desc: {
      type: String,
      required: false,
      maxlength: 2000,
    },
    author: {
      type: String,
      required: true,
      index: true,
      maxlength: 100,
    },
  },
  { timestamps: true },
);

const UserModel = mongoose.model('book', BookSchema);

export default UserModel;
