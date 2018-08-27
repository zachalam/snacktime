const genomeLink = require('genomelink-node');

function authorize(req,res) {
    // get url for genomelink auth. (not used)
    const scope = 'report:eye-color report:beard-thickness report:morning-person';
    const authorizeUrl = genomeLink.OAuth.authorizeUrl({ scope: scope });
    res.status(200).json({success: true, authorizeUrl})    
}

module.exports = authorize