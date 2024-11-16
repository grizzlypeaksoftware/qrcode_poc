const QRCode = require('qrcode');
const readline = require('readline');

// Get the URL from command line argument or prompt the user
let url = process.argv[2];

if (!url) {
  // No URL provided as command line argument, prompt the user
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Please enter the URL to encode: ', function(answer) {
    url = answer;

    rl.close();

    generateQRCode(url);
  });
} else {
  // URL provided as command line argument
  generateQRCode(url);
}

function generateQRCode(url) {
  // Options for QR code generation
  const options = {
    errorCorrectionLevel: 'H',
    type: 'image/png',
    quality: 0.92,
    margin: 1,
    color: {
      dark: '#000000',
      light: '#FFFFFF'
    }
  };

  // Generate unique filename
  const filename = `qrcode_${Date.now()}.png`;

  // Generate QR code and save as image
  QRCode.toFile(filename, url, options, function (err) {
    if (err) throw err;
    console.log(`QR code saved as ${filename}!`);
  });
}
