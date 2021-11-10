const db = require("../models");
const Person = db.person;

exports.create = (req, res) => {
    if (!req.body.first_name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    const person = new Person({
        first_name: req.body.title,
        last_name: req.body.description,
    });

    person
        .save(person)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Person."
            });
        });

};

exports.findAll = (req, res) => {
    const first_name = req.query.first_name;
    var condition = first_name ? { first_name: { $regex: new RegExp(first_name), $options: "i" } } : {};

    Person.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });

};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Person.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Person with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Person with id=" + id });
        });

};

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Person.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Person with id=${id}. Maybe Person was not found!`
                });
            } else res.send({ message: "Person was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Person with id=" + id
            });
        });

};

exports.delete = (req, res) => {
    const id = req.params.id;

    Person.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Person with id=${id}. Maybe Person was not found!`
                });
            } else {
                res.send({
                    message: "Person was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Person with id=" + id
            });
        });

};

exports.deleteAll = (req, res) => {

};

exports.findAllPublished = (req, res) => {

};
