const mongoose = require('../config/db');
const Schema = mongoose.Schema;

const roles = ['professor', 'teacher', 'ta', 'admin', 'supply'];

const departmentSchema = new Schema({
  name: {type: String, required: true},
  chair: {type: Schema.Types.ObjectId, ref: 'Staff'},
  school: {type: Schema.Types.ObjectId, ref: 'School'},
});

departmentSchema.index({name: 1, school: 1}, {unique: true});

const Department = mongoose.model('Department', departmentSchema);

const departmentStaffRoleRelationSchema = new Schema({
  department: {type: Schema.Types.ObjectId, ref: 'Department', required:true},
  staff: {type: Schema.Types.ObjectId, ref: 'Staff', required:true},
  role: {type: String, enum: roles, required:true},
});

departmentStaffRoleRelationSchema.index({department: 1, staff: 1, role: 1}, {unique: true});

const DepartmentStaffRoleRelation = mongoose.model('DepartmentStaffRoleRelation', departmentStaffRoleRelationSchema);

module.exports = {
  Department,
  DepartmentStaffRoleRelation,
};
