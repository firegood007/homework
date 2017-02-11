'use strict';
define(['agents','js/module/agents/model', 'js/module/agents/view'], function(ctr,model,view) {
	describe('Agents Controller---', function() {
	 	it("init", function() {
	 		expect(true).toEqual(new ctr().init()); 
		});
	});
	describe('Agents model---', function() {
	 	it("getData", function() {
	 		expect('object').toEqual(typeof(model.getData())); 
		});
	});
	describe('Agents view---', function() {
	 	it("init", function() {
	 		expect(true).toEqual(new view().init({agents: true})); 
		});
	});	
});
