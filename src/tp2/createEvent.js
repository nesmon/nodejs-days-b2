const events = require('events');
const eventEmitter = new events.EventEmitter();

// create a custom event
const kyorin = 'kyorin';

// create an event handler
const kyorinHandler = () => {
  console.log('kyorin!');
};

// assign the event handler to an event
eventEmitter.on(kyorin, kyorinHandler);

// fire the 'kyorin' event
eventEmitter.emit(kyorin);
