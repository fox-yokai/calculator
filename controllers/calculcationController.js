const db = require('../models');

module.exports = {
    lastTen: function(req, res) {
        db.Calculation.find().sort({$natural: -1}).limit(10)
        .then(data => res.json(data))
        .catch(err => res.json(err))
    }
}