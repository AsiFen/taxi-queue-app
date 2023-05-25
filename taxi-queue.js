function TaxiQueue() {
	var personsCount = 0;
	var taxisCount = 0;

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
		console.log(personsCount);


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