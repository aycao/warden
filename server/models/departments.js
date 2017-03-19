const mongoose = require('../config/db');
const Schema = mongoose.Schema;

const roles = ['professor', 'teacher', 'ta', 'admin', 'supply'];

const departmentSchema = new Schema({
  name: {type: String, required: true},
  chair: {type: Schema.ObjectId, ref: 'Staff'},
  staff: [{type: Schema.ObjectId, ref: 'DepartmentStaffRoleRelation'}],
});

module.exports = mongoose.model('Department', departmentSchema);

const departmentStaffRoleRelationSchema = new Schema({
  department: {type: Schema.ObjectId, ref: 'Department'},
  staff: {type: Schema.ObjectId, ref: 'Staff'},
  role: {type: String, validate: {validator: (v) => {return roles.includes(v);}}},
});

module.exports = mongoose.model('DepartmentStaffRoleRelation', departmentStaffRoleRelationSchema);