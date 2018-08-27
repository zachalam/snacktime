const amazon = require('amazon-product-api');
const keys = require('../config/keys');

var client = amazon.createClient({
    awsId: keys.AWS_ACCESS,
    awsSecret: keys.AWS_SECRET,
    awsTag: keys.AWS_TAG
  });


async function item(req,res) {
    // lookup a specific amazon item id.
    let { asin } = req.params;

    client.itemLookup({
        idType: 'ASIN',
        itemId: asin,
        responseGroup: 'ItemAttributes,OfferSummary,Images'
      }).then(function(results) {
        let result = results[0]
        const url = (result || {}).DetailPageURL[0];
        const img = ((result || {}).LargeImage[0] || {}).URL[0];
        //const title = ((result || {}).ItemAttributes[0] || {}).Title[0];
        //const price = (((result || {}).ItemAttributes[0] || {}).ListPrice[0] || {}).FormattedPrice[0];
        let item = {asin, name: '', url,img,group:'', carb: 0, protein: 0, milk: false, nuts: false}

        res.status(200).json({success: true, item})  
      }).catch(function(err) {
        res.status(404).json({success: false})  
      });    

      
}

module.exports = item