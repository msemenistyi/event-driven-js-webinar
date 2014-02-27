var mediator = new Mediator();

function Mediator(){
	// hash of events
	// key - event name
	// value - array of callbacks
	this.events = {};
}

// adds callback for the event as a handler
Mediator.prototype.on = function(event, callback) {
	// checking if event doesn't have its callback list yet
	if (typeof this.events[event] === 'undefined'){
		this.events[event] = [callback];
	} else {
		this.events[event].push(callback);
	}
};

// calls the list of callbacks assigned for the event
Mediator.prototype.trigger = function(event, data){
	// do something only if callbacks list is not empty
	if (typeof this.events[event] !== 'undefined'){
		for (var i = 0, l = this.events[event].length; i < l; i++){
			this.events[event][i](data);
		}
	}
};