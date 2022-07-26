const mongoose = require("mongoose");

const userResumeSchema = mongoose.Schema({
  personalDetails : {
      type: mongoose.Schema({
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        location: { type: String, required: true },
        skills: { type: String },
        summary: { type: String },
        wantedJobTitle: { type: String }
      }), 
      required: true
  },
  educationalCount: {
    type: Number
  },
  educationalDetails: {
    type: mongoose.Schema({
      edu: { type: Object },
      eduDesc: { type: Object },
      eduStartDate: { type: Object },
      eduEndDate: { type: Object },
      qual: { type: Object },
    }),
  },
  educationTemplate: { type: Array },
  projectCount: {
    type: Number
  },
  projectDetails: {
    type: mongoose.Schema({
      projectTitles: { type: Object },
      projectDesc: { type: Object },
      projectStartDate: { type: Object },
      projectEndDate: { type: Object },
    }),
  },
  projectTemplate: { type: Array },
  employementCount: {
    type: Number
  },
  employementDetails: {
    type: mongoose.Schema({
      emp: { type: Object },
      jobDesc: { type: Object },
      jobStartDate: { type: Object },
      jobEndDate: { type: Object },
      jobTitles: { type: Object },
    }),
  },
  employmentTemplate: { type: Array },
  cvType: { type: String }, 
  userId:
  {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User',
      required: true
  },
  isDeleted: { type: Boolean, default: false }
});

const UserResumeSchema = mongoose.model("UserResumeData", userResumeSchema);

module.exports = UserResumeSchema;