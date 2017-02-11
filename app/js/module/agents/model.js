define([], function() {
    'use strict';
    var URL = 'jsonData/agents.json';
    var model = {
        //ajax 获取数据， 返回一个promsie对象， 当deferred resolve（） ，调用的then 就触发
    	getData: function(){
    		var self = this;
    		var defer = $.Deferred();
    		$.ajax({
                url: URL,
                type: 'get',
                dataType: "html",
                contentType: 'plain/x-www-form-urlencoded; charset=UTF-8',
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
        // json数据转化 object
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