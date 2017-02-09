define([], function() {
    'use strict';
    var URL = 'jsonData/agents.json';
    var model = {
    	getData: function(){
    		var self = this;
    		var defer = $.Deferred();
    		$.ajax({
                url: URL,
                type: 'get',
                dataType: "html",
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                success: function(data) {
                	data = self.jsonParse(data);
                	defer.resolve(data);
                },
                error: function(data) {
                    alert('The ajax is error');
                }
            });
    		return defer.promise();
    	},
        jsonParse: function(str) {
            var data;
            try {
                data = JSON.parse(str);
            } catch(e) {
               console.log(e + ' Unknow Error, String to JSON');
            }
            return data;
        }
            
    }
    return model;
});