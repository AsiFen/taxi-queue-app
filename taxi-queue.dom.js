// write your DOM code here.
var joinPeopleQueue = document.querySelector('.join_queue');
var leavePeopleQueue = document.querySelector('.leave_queue');
var joinTaxiQueue = document.querySelector('.join_taxi_queue');
var leaveTaxiQueue = document.querySelector('.depart');

var passenger_queue_count = document.querySelector('.passenger_queue_count')
var taxi_queue_count = document.querySelector('.taxi_queue_count')
var taxi_departing_count = document.querySelector('.taxi_depart_count')
var alert = document.querySelector('.alert')

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

    taxi_departing_count.innerHTML = 1

    if(taxiQueue.taxiQueueLength() == 0 || taxiQueue.queueLength() < 12){
        alert.innerHTML = 'Cant make anymore trips'
        alert.classList.add('alert')
        alert.style.padding = '0.8em'
        taxi_departing_count.innerHTML = 0

        setTimeout(() => {
            taxi_departing_count.innerHTML = 0
            alert.classList.remove('alert')
            alert.innerHTML = ''
            alert.style.padding = '0px'
        }, 3000)

    }


})

