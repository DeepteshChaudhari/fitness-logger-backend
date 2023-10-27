import mongoose from 'mongoose';
const resistanceSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      default: "resistance",
      required: true
    },
    name: {
      type: String,
      required: true,
      maxlength: 30
    },
    weight: {
      type: Number,
      required: true,
    },
    sets: {
      type: Number,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  }
);

export const Resistance = mongoose.model('Resistance', resistanceSchema);
