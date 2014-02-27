var Boss = Backbone.Model.extend({
	defaults: {
		budget: 100000		
	},

	initialize: function(){
		this.employees = new EmployeeCollection();
	},

	increaseSalary: function(name, value){
		if (budget > 0){
			var employee = this.employees.findWhere({
				name: name
			});
			employee.set('salary', employee.get('salary') + 50);
		}
	}
});