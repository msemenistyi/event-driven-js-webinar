var EmployeeCollectionView = Backbone.View.extend({
	render: function(){
		var self = this,
			view;
		this.collection.each(function(it){
			view = new EmployeeView({model: it});
			self.$el.append(view.render().$el);
		});
		$('body').append(this.$el);
	}
});