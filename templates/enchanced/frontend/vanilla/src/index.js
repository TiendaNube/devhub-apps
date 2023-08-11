const helpers = require('@tiendanube/nexo/helpers');
const axios = require('./axios');
const nexoClient = require('./nexo');

helpers.connect(nexoClient).then(() => {
  helpers.iAmReady(nexoClient);

  showConnected();

  setSomeActions();
  
}).catch(() => {
  showNoConnected();
})

function showConnected(){
  const element = document.createElement('h1');
  element.innerHTML = "The application has successfully connected with Admin";
  insertApp(element);
}

function showNoConnected(){
  const element = document.createElement('h1');
  element.innerHTML = "This application is only visible within the Admin";
  insertApp(element);
}

function setSomeActions(){
  const buttonGoTo = document.createElement('button');
  buttonGoTo.innerText = 'Go to orders';
  buttonGoTo.addEventListener('click', () => {
    helpers.goTo(nexoClient, '/orders');
  });
  insertApp(buttonGoTo);


  const buttonSessionToken = document.createElement('button');
  buttonSessionToken.innerText = 'Get session token';

  const textToken = document.createElement('pre');

  buttonSessionToken.addEventListener('click', () => {
    helpers.getSessionToken(nexoClient).then(token => {
      textToken.innerHTML = token;
    });
  });
  insertApp(buttonSessionToken);

  const buttonGetPrivateInfo = document.createElement('button');
  buttonGetPrivateInfo.innerText = 'Get private info';

  insertApp(buttonGetPrivateInfo);

  buttonGetPrivateInfo.addEventListener('click', () => {
    axios.get('/secret').then(({data}) => {
      textToken.innerHTML = JSON.stringify(data);
    });
  });

  insertApp(textToken);
}

function insertApp(element){
  document.body.appendChild(element);
}
