if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js').then(function() {
        console.log('Service worker registration worked');
    }).catch(function() {
        console.log('Service worker registration failed');
    });
} else {
	console.log('Service Worker is not supported in this browser.')
}