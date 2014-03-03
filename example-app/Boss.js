var Boss = Backbone.Model.extend({
	defaults: {
		budget: 1000000
	},

	initialize: function(){
		this.employees = new EmployeeCollection();
		this.generateEmployees();
		this.view = new EmployeeCollectionView({collection: this.employees});
		this.view.render();
	},

	increaseSalary: function(number, value){
		value = value || 50;
		var employee = this.employees.findWhere({
			number: number
		});
		var newSalary = employee.get('salary') + value;
		if (this.get('budget') > newSalary){
			employee.set('salary', newSalary);
			this.set('budget', this.get('budget') - newSalary);
		}
	},

	generateEmployees: function(){
		for (var i = 1; i < 20; i++){
			this.employees.add(new Employee({number: i}));
		}
	}
});