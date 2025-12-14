const personDetailsModel = require('../models/batch_list');

const sendingDataToCrm = async () => {
    try {

        const data = await personDetailsModel.find({ status: "Verified", synced: false });

        for (let per of data) {
            console.log(`[CRM Sync] Sending verified lead ${per.firstName} to Sales Team...`);
            per.synced = true;
            await per.save();
        }

    } catch (err) {
        console.error("Error in sendingDataToCrm:", err);
    }
    setTimeout(sendingDataToCrm, 5 * 60 * 1000);
}

module.exports = sendingDataToCrm;