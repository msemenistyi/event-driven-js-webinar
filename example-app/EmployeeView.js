var EmployeeView = Backbone.View.extend({
	template: _.template($('.employee-template').html()),
	className: 'employee-container',

	initialize: function(){
		this.model.on('change:timesWorked', this.render, this);
		this.listenTo(this.model, 'change:happy', this.render, this); //memory-safe event assignment
	},

	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},

	hideTired: function(){
		this.$el.hide();
	}
		
});