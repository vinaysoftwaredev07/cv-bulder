const Insta = require('instamojo-nodejs');
const Payment= require('../models/paymentModel');

const API_KEY = process.env.API_KEY;
const AUTH_KEY = process.env.AUTH_KEY;

const paymentController ={
    payment: async (req,res) =>{
        try{
            const REDIRECT_URL = `${process.env.APP_URL}edit/${req.params.cv_id}`;
            const bodyParam = req.body;
            const isPaymentRequired = bodyParam.payment;
            if(isPaymentRequired){
                Insta.setKeys(API_KEY, AUTH_KEY);
                Insta.isSandboxMode(true);

                var data = new Insta.PaymentData();
    
                data.purpose = "Test";            // REQUIRED
                data.amount = 10;                  // REQUIRED
                data.setRedirectUrl(REDIRECT_URL);
                const paymentData = await Payment.create({
                    amount: data.amount,
                    purpose: data.purpose,
                    status: 'pending',
                    userId: req.user._id,
                    email: req.user.email,
                    phone: req.user.phone,
                    cvId: req.params.cv_id
                });

                console.log(API_KEY, AUTH_KEY);

                Insta.createPayment(data, function(error, response) {
                    let redirect = "";
                    if (error) {
                        redirect = REDIRECT_URL + `payment_id=MOJO${Math.floor(Math.random()*1E16)}&payment_status=Failed&payment_request_id=${Math.floor(Math.random()*1E16)}`;
                    } else {
                        // Payment redirection link at response.payment_request.longurl
                        resp = JSON.parse(response);
                        redirect = resp?.payment_request?.longurl.replace('Failed', 'Success')
                    }
                    console.log(response);
                    res.json({
                        location: redirect
                    })
                });
            }else{
                res.json({
                    message: "Payment reqired"
                })
            }

        }catch(err){
            console.log(err);
           return  res.status(500).json({message: err.message})
        }
        
    },

}



module.exports = paymentController