var Boss = Backbone.Model.extend({
	defaults: {
		budget: 10000		
	},

	initialize: function(){
		this.employees = new EmployeeCollection();
		this.view = new EmployeeCollectionView({collection: this.employees});
	},

	increaseSalary: function(name, value){
		var employee = this.employees.findWhere({
			name: name
		});
		var newSalary = employee.get('salary') + 50;
		if (budget > newSalary){
			employee.set('salary', newSalary);
			this.set('budget', this.get('budget') - newSalary);
		}
	}
});