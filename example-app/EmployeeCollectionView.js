var EmployeeCollectionView = Backbone.View.extend({
	
	el: 'employees-container',

	render: function(){
		this.collection.each(function(it){
			it.render().appendTo(this.$el);
		});
	}
});