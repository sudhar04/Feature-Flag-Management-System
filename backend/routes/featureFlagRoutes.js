const express = require("express");

const router = express.Router();

const { authenticateUser } = require("../middleware/authMiddleware");
const { authorizeRole } = require("../middleware/roleMiddleware");

const {

    createFeatureFlag,

    getFeatureFlags,

    updateFeatureFlag,

    deleteFeatureFlag, 

    toggleFeatureFlag

} = require("../controllers/featureFlagController");


// Create Feature
router.post(
    "/",
    authenticateUser,
    authorizeRole("admin"),
    createFeatureFlag
);


// Get All Features
router.get(
    "/",
    authenticateUser,
    authorizeRole("admin"),
    getFeatureFlags
);


// Update Feature
router.put(
    "/:id",
    authenticateUser,
    authorizeRole("admin"),
    updateFeatureFlag
);


// Delete Feature
router.delete(
    "/:id",
    authenticateUser,
    authorizeRole("admin"),
    deleteFeatureFlag
);


// Toggle Feature
router.patch(
    "/:id/toggle",
    authenticateUser,
    authorizeRole("admin"),
    toggleFeatureFlag
);

module.exports = router;