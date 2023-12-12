const Launches = require('../models/launchesModel');
const launchesApiProvider = require("../providers/launchesApiProvider.js");

exports.listAllLaunches = async (req, res) => {
    try {
        const launches = await Launches.find({});
        res.status(200);
        res.json(launches);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: 'Erreur serveur'});
    }
}

exports.createALaunches = async (req, res) => {
    try {
        let array = launchesApiProvider.getAllLaunches();
        let response = await array;

        for(let i = 0; i < response.length; i++){
            let newLaunche = new Launches(response[i]);
            let create = await newLaunche.save();
            res.status(201).json(create);
        }
    } catch (error) {
        console.log(error);
        res.status(401).json({message : "requete invalide."});
    }
}