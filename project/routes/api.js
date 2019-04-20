
const express = require("express");
const router = express.Router();
const User = require("../models/data");

// we are using nodemailer package here for email verification
var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "",
        pass: ""
    }
});
var rand,mailOptions,host,link;

// this is our get method
// this method fetches all available data in our database
router.get("/getData", (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

router.get("/", (req, res) => {
    res.sendFile(__dirname + "/login.js");
});

// this is our create method
// this method adds new data in our database
router.post("/addname", (req, res) => {
    var myData = new User(req.body);
    myData.save()
        .then(item => {
            res.send("Name saved to database"+myData.firstName);
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

// this function specifies the email to be sent for verification and also checks if an error occurs
router.get('/send',function(req,res){
    rand=Math.floor((Math.random() * 100) + 54);
	host=req.get('host');
	link="http://"+req.get('host')+"/verify?id="+rand;
	mailOptions={
		to : req.query.to,
		subject : "Please confirm your Email account",
		html : "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>"	
	}
	console.log(mailOptions);
	smtpTransport.sendMail(mailOptions, function(error, response){
   	 if(error){
        	console.log(error);
		res.end("error");
	 }else{
        	console.log("Message sent: " + response.message);
		res.end("sent");
    	 }
});
});

// this method checks id the email is verified successfully or not and also checks for authentication  of source
router.get('/verify',function(req,res){
console.log(req.protocol+":/"+req.get('host'));
if((req.protocol+"://"+req.get('host'))==("http://"+host))
{
	console.log("Domain is matched. Information is from Authentic email");
	if(req.query.id==rand)
	{
		console.log("email is verified");
		res.end("<h1>Email "+mailOptions.to+" is been Successfully verified");
	}
	else
	{
		console.log("email is not verified");
		res.end("<h1>Bad Request</h1>");
	}
}
else
{
	res.end("<h1>Request is from unknown source");
}
});

module.exports = router;
© 2019 GitHub, Inc.