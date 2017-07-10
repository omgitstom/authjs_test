var orgUrl = 'https://dev-969118.oktapreview.com/';
var oktaSignIn = new OktaSignIn({
  baseUrl: orgUrl,
  clientId:'mlcNH32nNi56u8wrdz1b',
  redirectUri:'http://localhost:3000',
  authParams: {
    responseType: 'code',
    responseMode: 'query',
    scopes: ['offline_access','email','profile','openid']
  }
});

var renderWidget = function(){
  oktaSignIn.renderEl(
    {
      el: '#widget'
    },
    function success(res) {
      if (res.status === 'SUCCESS') {
        console.log(res)
      }
    },
    function error(err) {
        console.log(err);
    }
  );
}

window.onload = renderWidget;
