# Countdown App

A responsive and user-friendly app to create and track custom countdowns to important events. The app ensures persistence of data even after a refresh or closure using `localStorage`.

## 📋 Table of Content

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Demo

You can view the live demo of the app [here](https://yamami-mohammed-monsif.github.io/custom-countdown/)

## Features

- Create custom countdowns with a title and target date.
- Automatically switch views between:
  - Countdown creation
  - Active countdown timer
  - Completion screen upon countdown end.
- Persistent storage of countdown data using `localStorage`.
- Responsive design for seamless usage on all devices.
- Reset functionality to clear data and start a new countdown.

## Technologies Used

- **React**: For building the user interface.
- **CSS Modules**: For styling individual components.
- **JavaScript (ES6+)**: For logic and interactivity.
- **LocalStorage API**: To persist countdown data between sessions.

## Installation

1. Clone the repository

```bash
    git clone https://github.com/yamami-mohammed-monsif/custom-countdown.git
    cd custom-countdown
```

2. Install the dependencies

```
    npm install
```

3. Start the developement server

```
    npm start
```

## Usage

1. Enter a title and select a future date in the Input Screen.
2. View the countdown in the Countdown Screen.
3. Once the countdown ends, the app switches to the Complete Screen.
4. Reset and create new countdowns as needed.

## Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a new branch:

```
    git checkout -b feature-name
```

3. Make your changes and commit them:

```
    git commit -m "Add new feature"
```

4. Push the branch

```
    git push origin feature-name
```

5. Open a pull request to merge your changes into the main branch.

## License

This project is licensed under the MIT License.
