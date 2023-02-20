exports.ussd = [(req, res) => {
	const { sessionId, phoneNumber, text } = req.body;
    let response;

	if (text === ""){
		console.log(phoneNumber, "Started a session... ");
		//This is the Shop Menu Listings
		response = `CON Welcome to Nakore
			1. Seedlings
			2. Chemicals
			3. Fertilizer
			4. Call Agent
			
		`;
	} else if (text === "1") {
		// Chemical option
		response = `CON Which crop are you planting this season?
			1. Maize
			2. Cassava
			3. Rice
			
		`;
	} else if (text === "2") {
		// Seeds Option
		response = `CON Choose Seed \n
			1. Glyphosate
			2. Atrazine 
			3. Others			
		`;
	} else if (text === "3") {
		// Quick Loan
		response = `CON Your profile is not approved for this service \n
			1. N20 P10 K10
			2. Urea
			3. Others
		`;
	} else if (text === "4") {
		//Call Agent
		response = `END Call our agent on +234 706 476 7691`;
	} else if (text === "1*1") {
		//Maize Quantity
		response = `CON Enter the quantity of maize seedlings you require(N100 per kg)`
	} else if ( text === "1*2") {
		//Cassava stems quantity
		response = `CON Enter the bundle of stems you require (600/bundle)`
	} else if ( text === "1*3") {
		//Rice seedling
		response = `CON Enter the quantity of rice seeds you require`
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