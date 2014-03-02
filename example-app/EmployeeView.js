var EmployeeView = Backbone.View.extend({
	template: _.template($('#employee-template').html())

	initialize: function(){
		this.model.on('change:timesWorked', this.render);
		this.listenTo(this.model, 'change:tired', this.render); //memory-safe event assignment
	},

	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},

	hideTired: function(){
		this.$el.hide();
	}
		
});