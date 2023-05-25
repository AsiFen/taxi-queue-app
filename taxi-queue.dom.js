// write your DOM code here.
var joinPeopleQueue = document.querySelector('.join_queue');
var leavePeopleQueue = document.querySelector('.leave_queue');
var joinTaxiQueue = document.querySelector('.join_taxi_queue');
var leaveTaxiQueue = document.querySelector('.depart');

var passenger_queue_count = document.querySelector('.passenger_queue_count')
var taxi_queue_count = document.querySelector('.taxi_queue_count')
var taxi_departing_count = document.querySelector('.taxi_depart_count')

// DOM element references
var storePassengerCount = 0;
var storeTaxiCount = 0;

// create Factory Function instance

const taxiQueue = TaxiQueue(storePassengerCount, storePassengerCount);


// DOM events
joinPeopleQueue.addEventListener('click', () => {
    localStorage['passengers'] = taxiQueue.joinQueue()
    passenger_queue_count.innerHTML = taxiQueue.queueLength()
})

leavePeopleQueue.addEventListener('click', () => {
    localStorage['passengers'] = taxiQueue.leaveQueue()
    passenger_queue_count.innerHTML = taxiQueue.queueLength()
})

joinTaxiQueue.addEventListener('click', () => {
    localStorage['taxis'] = taxiQueue.joinTaxiQueue()
    taxi_queue_count.innerHTML = taxiQueue.taxiQueueLength()
})

leaveTaxiQueue.addEventListener('click', () => {
    localStorage['taxis'] = taxiQueue.taxiDepart()
    passenger_queue_count.innerHTML = taxiQueue.queueLength()
    taxi_queue_count.innerHTML = taxiQueue.taxiQueueLength()
    taxi_departing_count.innerHTML = taxiQueue.taxiQueueLength()
})

