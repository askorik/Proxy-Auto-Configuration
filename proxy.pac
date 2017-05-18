var direct = "DIRECT"; 
var proxy = "PROXY 127.0.0.1:3008";

var blockedDomains = [
  'yandex.ru',
  'vk.com',
  'adfox.ru',
  'yastatic.net'
];

function isBlocked(host) {
	return blockedDomains.some(function(blockedHost) {
  	return host.indexOf(blockedHost) > -1;
  });
}

function FindProxyForURL(url, host) {
    if(isBlocked(host)) {
        return proxy;
    }
    return direct;
}