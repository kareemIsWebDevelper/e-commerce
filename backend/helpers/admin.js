 const bcrypt = require('bcrypt');
const User = require('../models/user.model');

const createAdminUser = async () => {
try {
    // Check if the admin user already exists
    const adminUser = await User.findOne({ username: 'admin' });
    if (adminUser) {
    return;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash('admin123', 10);

    // Create the admin user
    const newAdminUser = new User({
    username: 'admin',
    password: hashedPassword,
    isAdmin: true
    });

    // Save the admin user to the database
    await newAdminUser.save();
} catch (error) {
    console.log('Error creating admin user:', error);
}
};

module.exports = {
    createAdminUser
};