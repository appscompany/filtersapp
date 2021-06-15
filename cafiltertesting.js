(function () {
  //var _productGridSelector = '.grid-uniform.grid-link__container';
  var _productGridSelector = '.ProductList.ProductList--grid.ProductList--removeMargin Grid';
  var _productGridElement = document.querySelectorAll(_productGridSelector)[0];
  var _testButton = document.createElement('button');
  _testButton.id = 'testingbtn';
  _testButton.className = 'btn';
  _testButton.innerHTML = 'Test It';
  var _header = document.querySelectorAll('header')[0];
  console.log(_header);
  if(_header != null)
  {
    _header.after(_testButton);
    //_header.parentNode.insertBefore(_testButton, _header.nextSibling);
  }
  _testButton.addEventListener("click", function() {
    var _nexturl = 'https://filterssearchswatchdemo.myshopify.com/collections/tops?page=1';
    var _request = new XMLHttpRequest();
    _request.onreadystatechange = function success() {
      if (!_request.responseXML) {
        return;
      }
      if (!_request.readyState === 4 || !_request.status === 200) {
        return;
      }
      var containerElement = document.querySelectorAll(_productGridSelector)[0];
      containerElement.innerHTML = '';
      var newContainer = _request.responseXML.querySelectorAll(_productGridSelector)[0];
      containerElement.insertAdjacentHTML('beforeend', newContainer.innerHTML);

    }
    _request.open('GET', _nexturl);
    _request.responseType = 'document';
    _request.send();
  });
})();
