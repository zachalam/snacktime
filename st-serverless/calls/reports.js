const genomeLink = require('genomelink-node');
const keys = require('../config/keys');

console.log("keys are ");
console.log(keys);

async function reports(req,res) {
    // get reports for oauth token.
    let { token } = req.params;
    token = await genomeLink.OAuth.token({ 
        clientId: keys.GENOMELINK_CLIENT_ID,
        clientSecret: keys.GENOMELINK_CLIENT_SECRET,
        callbackUrl: keys.GENOMELINK_CALLBACK_URL,
        requestUrl: `https://genomelink.io?code=${token}` 
    });

    let scope = 'report:iron report:magnesium report:calcium report:vitamin-e report:vitamin-a';

    let scopes = scope.split(" ");
    let reports = await Promise.all(scopes.map( async (name) => {
        return await genomeLink.Report.fetch({
          name: name.replace(/report:/g, ''),
          population: 'european',
          token: token
        });
    }));

    // clean up report results.
    reports = reports.map((aReport) => {return { 
        trait: aReport._data.phenotype.url_name,
        score: aReport._data.summary.score,
    }});

    res.status(200).json({success: true, reports})    
}

module.exports = reports