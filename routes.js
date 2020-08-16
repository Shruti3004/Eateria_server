const PaytmChecksum = require('./checksum')

const port = 5000

module.exports=(app) => {
    app.get('/payment', (req, res)=> {
        var paytmParams = {
            "MID" : 'eIIbMy96581149439609',
            "WEBSITE" : 'WEBSTAGING',
            "CHANNEL_ID" : 'WEB',
            "INDUSTRY_TYPE_ID" : 'Retail',
            "ORDER_ID" : req.query.orderId,
            "CUST_ID" : 'CUST011',
            "TXN_AMOUNT" : req.query.cartTotal,
            "CALLBACK_URL" : 'http://localhost:'+port+'/callback',
            "EMAIL" : req.query.email,
            "MOBILE_NO" : req.query.phone
        }

        var paytmChecksum = PaytmChecksum.generateSignature(paytmParams, "ijJFdua2mlWQRxG#");
        paytmChecksum.then(function(checksum){
            // console.log("generateSignature Returns: " + checksum);
            console.log("checksum", checksum);
            var params = {
                ...paytmParams,
                CHECKSUMHASH: checksum
            }            
            res.json(params)            
        }).catch(function(error){
            console.log(error);
        });
        // checksum_lib.genchecksum(paytmParams, 'ijJFdua2mlWQRxG#', function(err, checksum){
            // let txn_url = "https://securegw-stage.paytm.in/theia/processTransactions"
            // let form_fields = ""
            // for(x in params){
            //     form_fields += "<input type='hidden' name='"+x+"' value='"+params[x]+"' />"
            // }
            // form_fields += "<input type='hidden' name='CHECKSUMHASH' value='"+checksum+"' />"
            // var html = '<html><body><center><h1>Please wait!!! Do not refresh the page</h1></center><form method="post" action="'+txn_url+'" name="f1">'+form_fields+'</form><script type="text/javascript">document.f1.submit()</script></body></html>'
            // res.writeHead(200,{'Content-Type': 'application/json'})
            // res.write(html)
            // res.end()
    //         console.log("checksum", checksum);
    //         var params = {
    //             ...paytmParams,
    //             CHECKSUMHASH: checksum
    //         }
    //         console.log(params)
    //         res.json(params)            
    //     })
    })
    app.post('/callback', (req, res) => {
        
        var paytmChecksum = req.body.CHECKSUMHASH;
        delete request.body.CHECKSUMHASH;

        var isVerifySignature = PaytmChecksum.verifySignature(req.body, 'ijJFdua2mlWQRxG#', paytmChecksum);
        if (isVerifySignature) {
            console.log("Checksum Matched");
        } else {
            console.log("Checksum Mismatched");
        }

    })
}