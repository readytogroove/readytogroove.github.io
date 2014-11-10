var appLink = document.getElementById('app-button');
addListener(appLink, 'click', function() {
  ga('send', 'event', 'button', 'click', 'app-store-buttons');
});

var amazonLink = document.getElementById('amazon-link');
addListener(amazonLink, 'click', function() {
  ga('send', 'event', 'button', 'click', 'amazon-link-click');
});

function addListener(element, type, callback) {
 if (element.addEventListener) element.addEventListener(type, callback);
 else if (element.attachEvent) element.attachEvent('on' + type, callback);
}