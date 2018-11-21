const htmlMarkup = (markup, sheets) => `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Bob Project</title>
  <base href="/">

  <meta name="mobile-web-app-capable" content="yes">
  <meta name="theme-color" content="#ffffff">
  <meta name="application-name" content="Bob Project">
  <meta name="Description" content="Test project for bob.io">
  <style type="text/css" id="server-side-styles">
    ${sheets.toString()}
  </style>

  <script src="/bundle.js" defer></script>

  <style>
    html,
    body,
    #root {
      margin: 0;
      height: 100%;
    }
  </style>

</head>

<body>
<div id="root">${markup}</div>
</body>

</html>
`;

export default htmlMarkup;
