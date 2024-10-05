const Modules = require('../models/module');

exports.get = async function (req, res) {
    try {
        const modules = await Modules.find();
        return res.status(200).json(modules);
    } catch (err) {
        return res.status(500).json(err);
    }
};

exports.getModulesById = async function (req, res) {
    try {
        const module = await Modules.findById(req.params._id);
        if (!module) {
            return res.status(404).json({ message: "Module not found" });
        }
        return res.status(200).json(module);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};