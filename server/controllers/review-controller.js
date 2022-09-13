const  Review  = require("../models/Review-schema");
const router = require("express").Router();

router.route("/newreview").post(async (req, res) => {
    
  const {
    landlordName,
    address,
    address2,
    city,
    state,
    reviewContent,
    tenantName,
    email,
  } = req.body;
  try {
      if (!landlordName || !address || !reviewContent){
          throw new Error('Insufficient data')
      } else {
          console.log(req.body)
        let newReview = new Review({
            landlordName,
            address,
            address2,
            city,
            state,
            reviewContent,
            tenantName,
            email
          })
      
      try {
        await newReview.save();
        res.status(201).json({
          status: "review saved",
          newReview,
        });
      } catch (error) {
        if(error.errors){
          const missingData = Object.keys(error.errors);
          throw new Error(
            `you are missing the following data: ${[...missingData]}`
          );
        } else {
          throw error
        }
      }
    }
  } catch(err){
      throw new Error(err)
}
});

module.exports = router;
