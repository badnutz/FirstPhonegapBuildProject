var app = {
    // Application Constructor
    initialize: function() {
		console.log('Received Event: ' + "initialize");
        this.bindEvents();
		console.log('Received Event: ' + "initialize after");
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
		console.log('Received Event: ' + "bindEvents");
        document.addEventListener('deviceready', this.onDeviceReady, false);
		console.log('Received Event: ' + "bindEvents after");
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
		console.log('Received Event: ' + "onDeviceReady");
        app.receivedEvent('deviceready');
		console.log('Received Event: ' + "after onDeviceReady");
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
		console.log('Received Event: ' + device.platform);
		var platform = $("<li>",{
			"html":"Device platform: " + device.platform
		});
		$("#phoneInfos").append(platform);
		var cordova = $("<li>",{
			"html":"Device cordova: " + device.cordova
		});
		$("#phoneInfos").append(cordova);
		var uuid = $("<li>",{
			"html":"Device uuid: " + device.uuid
		});
		$("#phoneInfos").append(uuid);
		var version = $("<li>",{
			"html":"Device version: " + device.version
		});
		$("#phoneInfos").append(version);

        console.log('Received Event: ' + id);
    }
};