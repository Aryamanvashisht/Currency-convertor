# Currency Converter Application

A simple currency converter built using **React.js**, **Typescript**, and **Tailwind CSS**. This application allows users to convert amounts between different currencies using live exchange rates provided by a currency conversion API.

## Features

- Convert amounts between various currencies in real-time.
- Simple and intuitive user interface.
- Dropdown selection for "From Currency" and "To Currency".
- Displays the converted amount upon calculation.

## Technologies Used

- **React.js**: Frontend framework for building the user interface.
- **Typescript**: Adds static typing to JavaScript, improving developer experience and code quality.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Currency Conversion API**: API used to fetch real-time exchange rates.

## Getting Started

### Prerequisites

Make sure you have the following tools installed:

- [Node.js](https://nodejs.org/en/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Aryamanvashisht/Currency-convertor.git
   cd currency-converter
   ```

2. Install the dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```


### Running the Application

To start the development server, run:

```bash
npm start
# or
yarn start
```

This will start the app in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Building for Production

To build the project for production, run:

```bash
npm run build
# or
yarn build
```

This will bundle the app into the `build` folder for deployment.


## How It Works

1. The user selects the currency they want to convert from and to, and inputs an amount.
2. When the conversion is triggered, the application sends a request to the currency conversion API with the selected currencies.
3. The API returns the current exchange rate, and the app calculates the converted amount which is then displayed on the screen.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.