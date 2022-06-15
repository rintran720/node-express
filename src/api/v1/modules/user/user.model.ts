import mongoose, { Schema } from 'mongoose';

export const UserSchema = new Schema({
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
});

const UserModel = mongoose.model('user', UserSchema);

export default UserModel;
