const Organization = require("../models/Organization");

exports.createOrganization = async (req, res) => {

    try {

        const { name } = req.body;

        const existingOrganization = await Organization.findOne({ name });

        if (existingOrganization) {
            return res.status(400).json({
                success: false,
                message: "Organization already exists"
            });
        }

        const organization = new Organization({
            name
        });

        await organization.save();

        return res.status(201).json({
            success: true,
            message: "Organization created successfully",
            organization
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }

};