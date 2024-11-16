# Simple QR Code Generator

This is a simple Node.js application that generates a QR code from a given URL and saves it as an image file with a unique filename.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed **Node.js** (version 12.0 or later recommended).
- You have a basic understanding of **JavaScript** and **Node.js**.

## Installing Simple QR Code Generator

To install the Simple QR Code Generator, follow these steps:

1. **Clone the repository** or **download the source code**.
2. **Navigate to the project directory** in your terminal.
3. Run the following command to install the required dependencies:

   ```bash
   npm install
   ```

## Using Simple QR Code Generator

You can use the Simple QR Code Generator by providing a URL as a command line argument or by entering it when prompted.

### Option 1: Provide URL as Command Line Argument

Run the script with the URL as an argument:

```bash
node index.js https://www.example.com
```

Replace `https://www.example.com` with the URL you want to encode.

### Option 2: Enter URL When Prompted

If you run the script without a URL argument, it will prompt you to enter one:

```bash
node index.js
```

You'll see a prompt like:

```
Please enter the URL to encode:
```

Enter your URL and press **Enter**.

### Output

The script will generate a QR code and save it as an image file with a unique filename in the format `qrcode_<timestamp>.png` in the same directory.

Example output:

```
QR code saved as qrcode_1633024800000.png!
```

## Customizing the QR Code

You can customize the QR code by modifying the `options` object in `index.js`. Here are some properties you can change:

- **`errorCorrectionLevel`**: Error correction level of the QR Code (`L`, `M`, `Q`, `H`).
- **`type`**: Image format (`png`, `svg`, `utf8`).
- **`quality`**: Image quality (`0.0` - `1.0`).
- **`margin`**: White space margin around the QR code (`0` - `4`).
- **`color`**: Colors for the QR code (`dark` and `light`).

Example:

```javascript
const options = {
  errorCorrectionLevel: 'H',
  type: 'image/png',
  quality: 0.92,
  margin: 1,
  color: {
    dark: '#000000', // Dark dots
    light: '#FFFFFF' // Light background
  }
};
```

## Contributing to Simple QR Code Generator

To contribute to Simple QR Code Generator, follow these steps:

1. **Fork** this repository.
2. **Create a branch**: `git checkout -b <branch_name>`.
3. **Make your changes** and **commit them**: `git commit -m '<commit_message>'`.
4. **Push to the original branch**: `git push origin <project_name>/<location>`.
5. **Create the pull request**.

Alternatively, see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## License

This project uses the following license: [MIT License](LICENSE).
