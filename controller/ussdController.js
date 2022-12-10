const Model = require('../models/models');
exports.ussd = [(req, res) => {
    // Read variables sent via POST from our SDK
    const { sessionId, serviceCode, phoneNumber, text } = req.body;

    console.log('####################', req.body);
    let response = "";

    if (text === "") {
        console.log('1');
        // This is the first request. Note how we start the response with CON
        response = 'CON Enter your Name';
    }
    if (text !== '') {
        let array = text.split('*');
        if (array.length === 1) {
            console.log(array);
            response = 'CON  How many reserve?'
        }
        else if (array.length === 2) {
            //RESERVATION
            if (parseInt(array[1]) > 0) {
                console.log(array);
                response = 'CON Do you want to save?\n1.Confirm\n2. Cancel'
            }
            
            else {
                response = 'End Network error. Please try again.'
            }
        }
        else if(array.length === 3)
        {
            if(parseInt(array[2])===1)
            {
                let data = new Model();
                data.name = array[0];
                data.tickets = array[1];
                data.save(()=> {
                    response = 'END Your reservation was saved successfully.'
                })
            }
            else if(parseInt(array[2])===1)
            {
                response = 'END Data was not saved.'
            }
            else {
                response = 'END Invalid input.'
            }
        }
    } 
    // Print the response onto the page so that our SDK can read it
    res.set("Content-Type: text/plain");
    res.send(response);
    // DONE!!!
}]