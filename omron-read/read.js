module.exports = function(RED) {
    function omronRead(config) {
		RED.nodes.createNode(this,config);

		this.plc_ip            = config.plc_ip;
		this.plc_port          = config.plc_port;
		this.point_address     = config.point_address;
		this.point_size        = config.point_size;

		var context = this.context();
		var node = this;
		
		var fins = require('omron-fins');
		
		var client = fins.FinsClient(parseInt(node.plc_port),node.plc_ip);

		client.on('error',function(error) {
			console.log("Error: ", error);
		});

		client.on('reply',function(msg) {
			console.log("Reply from: ", msg.remotehost);
			console.log("Transaction SID: ", msg.sid)
			console.log("Replying to issued command of: ", msg.command);
			console.log("Response code of: ", msg.code);
			console.log("Data returned: ", msg.values);
			msg.payload = msg.values;
			node.send(msg);
		});

		this.on('input', function(msg) {
			var outMsg = {payload: "Requsting from " + node.plc_ip + ":" + node.plc_port + " point(s) " + node.point_address + " with a size of " + node.point_size + " ..."};
			client.read(node.point_address, parseInt(node.point_size));
			console.log(outMsg);
			});
    }
    RED.nodes.registerType("FINS Read",omronRead);
};
 
