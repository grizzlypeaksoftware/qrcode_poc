// First, install the qrcode package:
// npm install qrcode

const QRCode = require('qrcode');

// URL to encode in the QR code
const url = 'https://www.example.com';

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

// Generate QR code and save as image
QRCode.toFile('qrcode.png', url, options, function (err) {
  if (err) throw err;
  console.log('QR code saved!');
});