import mongoose, { Schema } from 'mongoose';
import { v4 as uuid } from 'uuid';

export const UserSchema = new Schema({
  _id: {
    type: String,
    default: () => {
      return uuid();
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
    required: false,
  },
  name: {
    type: String,
    default: '',
    unique: true,
    index: true,
  },
});

const UserModel = mongoose.model('user', UserSchema);

export default UserModel;
