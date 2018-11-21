import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  Name: { type: String, required: true },
  Bags: { type: Number, min: 1, max: 5, required: true },
});

export default mongoose.model('Users', UserSchema);
