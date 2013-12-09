UberAuth = new Array();
UberAuth['username'] = 'username';
UberAuth['password'] = 'password';
UberAuth['url'] = 'https://ubersmith.appliance/api/2.0';
UberAuth['refresh.interval'] = 1;

var ubersmith = require('ubersmith');
ubersmith.uberAuth = UberAuth;
ubersmith.uberRefreshData('device.list');
ubersmith.uberScheduleRefresh('device.list', UberAuth['refresh.interval']);

ubersmith.on('ready.device.list',
  function(body) {
    console.log(body);
  }
);
ubersmith.on('failed.device.list',
  function(err) {
    console.log(err);
  }
);
