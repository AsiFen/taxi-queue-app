function TaxiQueue(storePersons, storeTaxis) {
let personsCount = storePersons;
	var taxisCount = storeTaxis;

	function joinQueue() {
		personsCount++
		if (personsCount == 12) {
			return true
		}

	}

	function taxiDepart() {
		console.log(personsCount);

		if(personsCount >= 12 && taxisCount > 0){
			taxisCount--
			personsCount = personsCount - 12
		}

	}

	function leaveQueue() {
		if (personsCount > 0) {
			personsCount--
		}
	}

	function joinTaxiQueue() {
		taxisCount++
	}

	function queueLength() {
		console.log(personsCount);

		return personsCount


	}

	function taxiQueueLength() {
			return taxisCount

	}


	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart
	}
}