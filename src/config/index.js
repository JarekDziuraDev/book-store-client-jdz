const environmentUrls = new Map();

environmentUrls.set('localhost', 'http://localhost:8090');
environmentUrls.set(
    'book-store-client-jdz.herokuapp.com',
    'https://book-store-serwer-jdz.herokuapp.com/'
);

export default environmentUrls.get(window.location.hostname);
