chrome.webRequest.onHeadersReceived.addListener(
  function(info) {
    var headers = info.responseHeaders;
    console.log(headers)
    for (var i = headers.length-1; i >= 0; --i) {
      var header = headers[i].name.toLowerCase();
      if (header === 'x-frame-options' ||
          header === 'frame-options' ||
          header === 'content-security-policy') {
        headers.splice(i, 1); // Remove header
      }
    }
    return {responseHeaders: headers};
  },
  {
    urls: [
      '*://www.linkedin.com/*',
      '*://us.linkedin.com/*',
      '*://ca.linkedin.com/*',
      '*://twitter.com/*',
      '*://www.twitter.com/*'
    ],
    types: [
      'main_frame',
      'sub_frame',
      'other'
    ]
  },
  ['blocking', 'responseHeaders']
)
