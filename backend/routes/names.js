const router=require('express').Router();
const {getNames,postPersonDetails}=require("../controllers/controller")

router.get("/names",getNames);
router.post("/names",postPersonDetails);

module.exports=router;