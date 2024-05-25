const mongoose = require("mongoose");

// Define the Profile schema
const profileSchema = new mongoose.Schema({
  middleName: {
    type: String,
    trim: true,
  },
  license: {
    type: String,
    trim: true,
  },
  street: {
    type: String,
    trim: true,
  },
  city: {
    type: String,
    trim: true,
  },
  state: {
    type: String,
    trim: true,
  },
  zipCode: {
    type: String,
    trim: true,
  },
  country: {
    type: String,
    trim: true,
  },
  faaRegion: {
    type: String,
    trim: true,
  },
  medicalClass: {
    type: String,
    trim: true,
  },
  dateOfMedical: {
    type: String,
    trim: true,
  },
  medicalExpireDate: {
    type: String,
    trim: true,
  },
  typeRating: {
    type: String,
    trim: true,
  },
  certificateType: {
    type: String,
    trim: true,
  },
  fromCertificateExpiryDate: {
    type: String,
    trim: true,
  },
  toCertificateExpiryDate: {
    type: String,
    trim: true,
  },
  gender: {
    type: String,
    trim: true,
  },
  dateOfBirth: {
    type: String,
    trim: true,
  },
  contactNumber: {
    type: Number,
    trim: true,
  },
  approved: {
    type: Boolean,
    default: false,
  },
  pilotLicenseImage: {
    type: String, // URL to the uploaded pilot license image
    trim: true,
  },
});

// Export the Profile model
module.exports = mongoose.model("Profile", profileSchema);
