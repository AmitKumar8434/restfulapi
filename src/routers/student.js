const express = require("express");
const router = new express.Router();
const Student = require("../models/Students");

router.post("/students", async (req, res) => {
    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    } catch (err) {
        res.status(400).send(err);
    }
});

//read data of registered students
router.get("/students", async (req, res) => {
    try {
        const studentsData = await Student.find();
        res.send(studentsData);
    } catch (err) {
        res.send(err);
    }
})


router.get("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;

        const studentData = await Student.findById(_id);
        if (!studentData) {
            return res.status(404).send();
        }
        else
        res.status(500).send(studentData);
    } catch (err) {
        res.send(err);
    }
})

//update the student by id
router.patch("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updateStudents = await Student.findByIdAndUpdate(_id, req.body, {
            new:true
        });
        res.send(updateStudents);
    } catch (err) {
        res.status(404).send(err);
    }
})

//delete students by id
router.delete("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteStudents = await Student.findByIdAndDelete(_id);
        if (!_id) {
            return res.status(404).send();
        }
        res.send(deleteStudents);
    } catch (err) {
        res.status(500).send(err);
    }
})


module.exports = router;