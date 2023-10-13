import Experience from '../models/experience.js'

export const addExperience = async(req, res) => {
    const experienceData = req.body;
    const experienceValue = new Experience(experienceData);

    try {
        await experienceValue.save();
        res.status(200).json("Experience added successfully...");
    }
    catch(err) {
        console.log(err);
    }
}