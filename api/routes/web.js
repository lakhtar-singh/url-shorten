const express   =   require('express');
const router    =   express.Router();
const Link      =   require('../models/Link')
const {generateRandomString} = require('../util/helper.js')

router.post('/shorten-link', async (req, res) => {

    let body            =   req.body;
    let url             =   generateRandomString(10);
    const ip            =   req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  
    const protocol      =   req.headers["x-forwarded-proto"] || "http"; // Handles HTTPS
    const host          =   req.headers.host; // Gets domain name
    const baseUrl       =   `${protocol}://${host}`;

    const referer = req.headers.referer || req.headers.origin || "Unknown";

    const shortLink     =   {
        'short_link'        :   url,
        ip                  :   ip,
        'original_link'     :   body.url,
    }
    try{
        await new Link(shortLink).save();
    }
    catch(e){
        res.json({status:400,   message:e.message})
        return;
    }
    res.json({status:200, short_link : url, message:'Done'})
    return
});

router.get('/redirect-url/:id', async(req, res) => {
    const result    =   await Link.find({short_link:req.params.id});
    if(result[0]){
        let click      =   result[0].click;
        let short_link      =   result[0].short_link;
        await Link.updateOne({short_link:short_link},{click:(click+1)});
    }

    res.json({id:req.params.id, link:result[0]?.original_link});
});

router.get('/default-list', async(req, res) => {
    const ip            =   req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const result        =   await Link.find({ip:ip});
    res.json(result)
    return
})

module.exports = router;