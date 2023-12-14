const router = require("express").Router();
const data = require("../data/phones.json")
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// const phonesRoute = require("./phones.routes")
// router.use("/phones", phonesRoute);
router.get("/phones", (req, res, next) => {
console.log("entrando", data)
res.status(200).json(data)
})

router.get("/phones/:id", (req, res, next) => {
  const id = req.params.id
  const singlePhone = data.find((each) => {
    return each.id == id
  } )
  console.log(singlePhone)
  res.status(200).json(singlePhone);
})

module.exports = router;
