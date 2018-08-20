const amazon = require('amazon-product-api');
const keys = require('../config/keys');

var client = amazon.createClient({
    awsId: keys.AWS_ACCESS,
    awsSecret: keys.AWS_SECRET,
    awsTag: keys.AWS_TAG
  });

function item(req,res) {
    // get amazon item.
    client.itemLookup({
        idType: 'ASIN',
        itemId: 'B01FG0447S',
        responseGroup: 'ItemAttributes,OfferSummary,Images'
      }).then(function(results) {
        res.status(200).json({success: true, results})  
      }).catch(function(err) {
        res.status(404).json({success: false})  
      });
      
}

module.exports = item