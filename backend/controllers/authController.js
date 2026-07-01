const User = require("../models/User");
const Organization = require("../models/Organization");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


// Register user 

const registerUser = async (req, res) => {
    try {

        const { name, email, password, organization } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "Email already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            email,
            password: hashedPassword,
            organization,
            role: "admin"
        });

        await user.save();

        return res.status(201).json({
            success: true,
            message: "Organization Admin registered successfully"
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }
};

//Log in


const login = async (req, res) => {
    try {

        const { email, password } = req.body;

        // Check user
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found"
            });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid Credentials"
            });
        }

        // Generate JWT Token
        const token = jwt.sign(
            {
                id: user._id,
                role: user.role,
                organization: user.organization
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        const userData = {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    organization: user.organization
};

return res.status(200).json({
    success: true,
    message: "Login Successful",
    token,
    user: userData
});

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

module.exports = {
    registerUser,
    login
};