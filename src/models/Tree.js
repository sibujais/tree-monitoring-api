const mongoose = require('mongoose');

const treeSchema = new mongoose.Schema(
  {
    speciesName: {
      type: String,
      required: true,
      trim: true,
    },

    latitude: {
      type: Number,
      required: true,
    },

    longitude: {
      type: Number,
      required: true,
    },

    plantingDate: {
      type: Date,
      required: true,
    },

    healthStatus: {
      type: String,
      enum: ['Good', 'Fair', 'Poor'],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  'Tree',
  treeSchema
);