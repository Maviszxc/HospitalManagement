const express = require("express");
const router = express.Router();

const doctorController = require("../controllers/doctorController");

router.get("/", doctorController.doctors);

// api/v1/doctor/id
// api/v1/doctor/661cd3a0e28300c6a3444b46
router.get("/:id", doctorController.doctor);
router.get("/name/:name", doctorController.getDoctorByName);

//create
router.post("/create", doctorController.createDoctor);

router.delete("/delete/:doctorID", doctorController.deleteDoctor);

router.put("/update/:id", doctorController.updateDoctor);

module.exports = router;
