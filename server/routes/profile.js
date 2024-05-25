const express = require("express")
const router = express.Router()
const { auth, isAdmin } = require("../middleware/auth")
const {
  deleteAccount,
  updateProfile,
  getAllUserDetails,
  updateDisplayPicture,
  updatePilotLicenseImage,
  approveProfile,
} = require("../controllers/profile")

// ********************************************************************************************************
//                                      Profile routes
// ********************************************************************************************************
// Delete User Account
router.delete("/deleteProfile", auth, deleteAccount)
router.put("/updateProfile", auth, updateProfile)
router.get("/getUserDetails", auth, getAllUserDetails)
router.put("/updateDisplayPicture", auth, updateDisplayPicture)
router.put("/updatePilotLicense",auth,updatePilotLicenseImage)
router.put("/approveProfile",auth,isAdmin,approveProfile)
// router.get("/AdminDashboard", auth, isAdmin, AdminDashboard)

module.exports = router
