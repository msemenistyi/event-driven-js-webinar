var Employee = Backbone.Model.extend({
	defaults:{
		number: 0,
		timesWorked: 0,
		tired: false,
		salary: 500,
		happy: false
	},

	initialize: function(){
		this.startWorking();
		this.on('change:salary', function(){
			if (this.get('salary') > 500)
				this.getHappy();
		}, this);
	},

	work: function(timesToWork){
		timesToWork = timesToWork || 1;
		var times = this.get('timesWorked') + timesToWork;
		this.set('timesWorked', times);
		if (times > 500) this.set('tired', true);
	},

	getHappy: function(){
		this.set('happy', true);
	},

	startWorking: function(){
		var self = this;
		setInterval(function(){
			self.work(Math.floor(Math.random() * 10 + 1));
		}, 1000);
	},



});