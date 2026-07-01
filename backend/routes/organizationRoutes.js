const express = require("express");

const router = express.Router();

const {
    createOrganization
} = require("../controllers/organizationController");

router.post("/", createOrganization);

module.exports = router;