const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: ['admin', 'project_manager', 'team_member'], default: 'team_member' }
});

module.exports = mongoose.model('User', userSchema);