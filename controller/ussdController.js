exports.ussd = [(req, res) => {
	const { sessionId, phoneNumber, text } = req.body;
    let response;

	if (text === ""){
		console.log(phoneNumber, "Started a session... ");
		//This is the Shop Menu Listings
		response = `CON Welcome to Naroke
			1. Chemicals
			2. Seeds
			3. Quick Loan
			4. Call Agent
			5. More	
		`;
	} else if (text === "1") {
		// Chemical option
		response = `CON Choose chemical \n
		1. Gramoxono
		2. Glaphosate
		3. More
		`;
	} else if (text === "2") {
		// Seeds Option
		response = `CON Choose Seed \n
			1. Maize Seed
			2. Yam Seed
			3. Cassava Stems
			4. Rice
		`;
	} else if (text === "3") {
		// Quick Loan
		response = `CON Your profile is not approved for this service \n
			1. Request Approval
			2. Cancel
		`;
	} else if (text === "4") {
		//Call Agent
		response = `END Call our agent on +234 706 476 7691`;
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