var Employee = Backbone.Model.extend({
	defaults:{
		name: 'Petro',
		timesWorked: 0,
		tired: false,
		salary: 500,
		happy: false
	},

	work: function(){
		var times = this.get('timesWorked') + 1;
		this.set('timesWorked', times);
		if (times > 500) this.set('tired', true);
	},

	getHappy: function(){
		this.set('happy', true);
	}
});