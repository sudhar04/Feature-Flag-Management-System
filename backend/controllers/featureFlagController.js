const FeatureFlag = require("../models/FeatureFlag");

//Create

const createFeatureFlag = async (req, res) => {

    try{

        const { featureKey, enabled } = req.body;

        const featureFlag = new FeatureFlag({

            featureKey,

            enabled,

            organization:req.user.organization

        });

        await featureFlag.save();

        return res.status(201).json({

            success:true,

            message:"Feature Flag Created Successfully",

            featureFlag

        });

    }
    catch(error){

        console.error(error);

        return res.status(500).json({

            success:false,

            message:"Internal Server Error"

        });

    }

};

//Read 

const getFeatureFlags = async (req, res) => {
    try {

        const featureFlags = await FeatureFlag.find({
            organization: req.user.organization
        });

        return res.status(200).json({
            success: true,
            featureFlags
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }
};

//Update

const updateFeatureFlag = async (req, res) => {

    try {

        const featureFlag = await FeatureFlag.findByIdAndUpdate(

            req.params.id,

            req.body,

            { new: true }

        );

        if (!featureFlag) {

            return res.status(404).json({
                success: false,
                message: "Feature Flag not found"
            });

        }

        return res.status(200).json({
            success: true,
            featureFlag
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }

};

//Delete 

const deleteFeatureFlag = async (req, res) => {

    try {

        const featureFlag = await FeatureFlag.findByIdAndDelete(
            req.params.id
        );

        if (!featureFlag) {

            return res.status(404).json({
                success: false,
                message: "Feature Flag not found"
            });

        }

        return res.status(200).json({
            success: true,
            message: "Feature Flag Deleted Successfully"
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }

};

//Toggle

const toggleFeatureFlag = async (req, res) => {

    try {

        const featureFlag = await FeatureFlag.findById(req.params.id);

        if (!featureFlag) {

            return res.status(404).json({
                success: false,
                message: "Feature Flag not found"
            });

        }

        featureFlag.enabled = !featureFlag.enabled;

        await featureFlag.save();

        return res.status(200).json({
            success: true,
            featureFlag
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

    createFeatureFlag,

    getFeatureFlags,

    updateFeatureFlag,

    deleteFeatureFlag,

    toggleFeatureFlag

};