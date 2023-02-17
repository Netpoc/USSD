const Model = require('../models/models');

exports.ussd = [(req, res) => {
    // Read variables sent via POST from our SDK
    const { sessionId, phoneNumber, text } = req.body;
    let response;

    if (text === "") {
        // Input for Event Attendee Name
        response = 'CON Please, enter your Fullname';
    }
    if (text !== '') {
        let array = text.split('*');
        if (array.length === 1) {
            // Input for Event Tickets
            response = 'CON  How many tickets?'
        }
        else if (array.length === 2) {
            //RESERVATION Confirmation
            if (parseInt(array[1]) > 0) {
                response = 'CON Do you want to save?\n1.Confirm\n2. Cancel\n3. View Tickets'
            }
            else {
                response = 'End Network error. Please try again.'
            }
        }
        else if (array.length === 3) {
            //Save reservation to database 
            if (parseInt(array[2]) === 1) {
                let data = new Model();
                data.name = array[0];
                data.tickets = array[1];
                data.save(() => {
                    response = 'CON Your reservation was saved successfully.\n1. View Tickets'
                })
            }
            else if (parseInt(array[2]) === 2) {
                response = 'END Data was not saved.'
            }
            else if (parseInt(array[2]) === 3) {
                Model.find({}, (err, users) => {
                    console.log(users)
                    let users_data = `${
                        users.length < 1 ?
                        `No data found`
                        :
                        `${users.map((item, index) => {
                            return `${index + 1} ${item.name}\n`
                        }).join(".")}`
                    }`
                    response = `END Current users.\n${users_data}`
                })
            }
            else {
                response = 'END Invalid input.'
            }

        }

    }
    
    // Print the response onto the page so that our SDK can read it
    res.set("Content-Type: text/plain");
    //res.send(response);
    // DONE!!!
    setTimeout(() => {
        console.log(text)
        res.send(response);
        res.end()
    }, 2000);
}]