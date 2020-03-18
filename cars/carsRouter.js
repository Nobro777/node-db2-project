const express = require("express");

const db = require("../data/dbConfig.js");

const router = express.Router();

router.get("/", (req, res) => {
  db("cars")
    .then(data => res.json(data))
    .catch(err =>
      res.status(404).json({
        message: "could not find posts"
      })
    );
});

router.post("/", (req, res) => {
  db('cars').insert(req.body)
    .then(data => {
      db("cars")
        .where({ id: data[0] })
        .then(elem => {
          res.status(201).json({
            item: elem
          });
        });
    })
    .catch(err =>
      res.status(500).json({
        error: "Car cannot be made"
      })
    );
});

module.exports = router;
