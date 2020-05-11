const Course = require('../models/Course');

// get All Course
exports.getCourses = async (req, res, next) => {
    try {
        const courses = await Course.find()
        res.status(200).json({
            success: true,
            data: courses
        })
    }
    catch (err) {
        res.status(400).json({ success: false, Error: err })
    }

}
// Crete new Course
exports.createCourse = async (req, res, next) => {
    try {
        const course = await Course.create(req.body)
        res.status(201).json({
            success: true,
            data: course
        })
    }
    catch (err) {
        res.status(400).json({ success: false, Error: "All Field Are Required" })
    }
}

// update existing course
exports.updateCourse = async (req, res, next) => {
    try {
        const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if (!course) {
            res.status(400).json({
                success: false,
                Error: "Invalid Course ID"
            })
        }

        res.status(200).json({
            success: true,
            data: course
        })
    }
    catch (err) {
        res.status(400).json({ success: false, Error: "Invalid Course ID" })
    }


}
// delete selected course
exports.deleteCourse = async (req, res, next) => {
    try {
        const course = await Course.findByIdAndDelete(req.params.id)
        if (!course) {
            res.status(400).json({
                success: false,
                Error: "Invalid Course ID"
            })
        }

        res.status(200).json({
            success: true,
            data: {}
        })
    }
    catch (err) {
        res.status(400).json({ success: false, Error: "Invalid Course ID" })
    }
} 