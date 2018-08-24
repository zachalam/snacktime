const snackList = require('../config/snacks');

function getSnacks(score,nutrient) {
  let snackSectionArray = snackList[nutrient];   // get the group of snacks we should pull from.
  let allSnacks = snackSectionArray.filter((snack) => {
    return snack.level === parseInt(score)
  });
  console.log("allSnacks", allSnacks);
  return allSnacks;
}

function snacks(req,res) {
  // get nutrient serum levels.
  let { calcium, iron, magnesium, vitamina, vitamine } = req.params;

  // create shopping list of items.
  let shoppingList = [
    ...getSnacks(calcium,'calcium'),
    ...getSnacks(iron,'iron'),
    ...getSnacks(magnesium,'magnesium'),
    ...getSnacks(vitamina,'vitamina'),
    ...getSnacks(vitamine,'vitamine'),
  ];

  // send shopping list back.
  res.status(200).json({success: true, shoppingList})

}

module.exports = snacks