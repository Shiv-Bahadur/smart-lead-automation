const personDetailsModel = require('../models/batch_list');


const getNames = async (req, res) => {
    try {
        const data = await personDetailsModel.find();
        return res.status(200).json(data);
    } catch (err) {
        return res.status(500).json({ message: "Internal server error", error: err.message })
    }

}

const postPersonDetails = async (req, res) => {
    try {
        
        let arr=req.body;
        if (!Array.isArray(arr) || arr.length==0) {
            return res.status(400).json({ message: "wrong input entered" });
        }
        for (let a of arr) {
            const response = await fetch(`https://api.nationalize.io?name=${a}`)
            let data=await response.json()
            const predictedCountry = data.country.reduce((max, cur) => max.probability > cur.probability ? max : cur )
    
            const person = {
                firstName: data.name,
                country: predictedCountry.country_id,
                probability: predictedCountry.probability,
                status: predictedCountry.probability >= 0.6 ? "Verified" : "To Check"
            }
            await personDetailsModel.create(person);
        }
        
        return res.status(201).json({ message: 'new persons added successfully'});
    } catch (err) {
        return res.status(400).json({ message: "invalid input", error: err.message });
    }


}
module.exports = { getNames, postPersonDetails };