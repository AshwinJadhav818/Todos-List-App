import mongoose from 'mongoose';

const contactSchema = mongoose.Schema({
   email: String,
   desc: String
});

export default mongoose.model('Contact', contactSchema);