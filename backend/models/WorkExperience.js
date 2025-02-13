const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const workExperienceSchema = new mongoose.Schema({
    CompanyName: { type: String, required: true },
    Designation: { type: String, required: true },
    FromDate: { type: Date, required: true },
    ToDate: { type: Date, required: true }
});
workExperienceSchema.plugin(AutoIncrement, { inc_field: "WorkExperienceID" });


const WorkExperience = mongoose.model('WorkExperience', workExperienceSchema)
module.exports = WorkExperience;