const Profile = require("../models/Profile");
const User = require("../models/User");
const { uploadImageToCloudinary } = require("../utils/imageUploader");
const mongoose = require("mongoose");


exports.approveProfile = async (req, res) => {
  try {
    const { profileId } = req.params;

    // Check if the user is an admin
    const adminId = req.user.id;
    const adminUser = await User.findById(adminId);
    if (!adminUser || adminUser.accountType !== 'Admin') {
      return res.status(403).json({
        success: false,
        message: "Access denied. Only admins can approve profiles.",
      });
    }

    // Find the profile by id
    const profile = await Profile.findById(profileId);
    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile not found",
      });
    }

    // Update the approved field
    profile.approved = true;

    // Save the updated profile
    await profile.save();

    return res.status(200).json({
      success: true,
      message: "Profile approved successfully",
      data: profile,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Method for updating a profile
exports.updateProfile = async (req, res) => {
  try {
    const {
      firstName = "",
      middleName = "",
      lastName = "",
      license = "",
      street = "",
      city = "",
      state = "",
      zipCode = "",
      country = "",
      faaRegion = "",
      medicalClass = "",
      dateOfMedical = "",
      medicalExpireDate = "",
      typeRating = "",
      certificateType = "",
      fromCertificateExpiryDate = "",
      toCertificateExpiryDate = "",
      dateOfBirth = "",
      contactNumber = "",
      gender = "",
    } = req.body;
    const id = req.user.id;

    // Find the user and profile by id
    const userDetails = await User.findById(id);
    if (!userDetails) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const profile = await Profile.findById(userDetails.additionalDetails);
    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile not found",
      });
    }

    await User.findByIdAndUpdate(id, {
      firstName,
      lastName,
    });

    // Update the profile fields
    profile.middleName = middleName;
    profile.license = license;
    profile.street = street;
    profile.city = city;
    profile.state = state;
    profile.zipCode = zipCode;
    profile.country = country;
    profile.faaRegion = faaRegion;
    profile.medicalClass = medicalClass;
    profile.dateOfMedical = dateOfMedical;
    profile.medicalExpireDate = medicalExpireDate;
    profile.typeRating = typeRating;
    profile.certificateType = certificateType;
    profile.fromCertificateExpiryDate = fromCertificateExpiryDate;
    profile.toCertificateExpiryDate = toCertificateExpiryDate;
    profile.dateOfBirth = dateOfBirth;
    profile.contactNumber = contactNumber;
    profile.gender = gender;

    // Save the updated profile
    await profile.save();

    // Find the updated user details
    const updatedUserDetails = await User.findById(id)
      .populate("additionalDetails")
      .exec();

    return res.json({
      success: true,
      message: "Profile updated successfully",
      updatedUserDetails,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.deleteAccount = async (req, res) => {
  try {
    const id = req.user.id;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Delete associated profile with the user
    await Profile.findByIdAndDelete(user.additionalDetails);

    // Delete the user
    await User.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "User could not be deleted successfully",
    });
  }
};

exports.getAllUserDetails = async (req, res) => {
  try {
    const id = req.user.id;
    const userDetails = await User.findById(id)
      .populate("additionalDetails")
      .exec();
    if (!userDetails) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User data fetched successfully",
      data: userDetails,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateDisplayPicture = async (req, res) => {
  try {
    const displayPicture = req.files.displayPicture;
    const userId = req.user.id;
    if (!displayPicture) {
      return res.status(400).json({
        success: false,
        message: "No image file provided",
      });
    }

    const image = await uploadImageToCloudinary(
      displayPicture,
      process.env.FOLDER_NAME,
      1000,
      1000
    );

    const updatedProfile = await User.findByIdAndUpdate(
      userId,
      { image: image.secure_url },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Image updated successfully",
      data: updatedProfile,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// New method for updating the pilot license image
exports.updatePilotLicenseImage = async (req, res) => {
  try {
    const pilotLicenseImage = req.files.pilotLicenseImage;
    const userId = req.user.id;
    if (!pilotLicenseImage) {
      return res.status(400).json({
        success: false,
        message: "No image file provided",
      });
    }

    const image = await uploadImageToCloudinary(
      pilotLicenseImage,
      process.env.FOLDER_NAME,
      1000,
      1000
    );

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { pilotLicenseImage: image.secure_url },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Pilot license image updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
