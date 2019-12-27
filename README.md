
# expo-notifications-app

![Preview-Screens](https://github.com/steniowagner/expo-notifications-app/blob/master/img/flow.png)

If you want to take a look on all screens of the App, they are [here](https://github.com/steniowagner/expo-notifications-app/tree/master/img).


## About this Project

The idea of the App is:

_"Offer an example of how to setup an expo app to receive notifications"._

## Why?

This project is part of my personal portfolio, so, I'll be happy if you could provide me any feedback about the project, code, structure or anything that you can report that could make me a better developer!

Email-me: stenio.wagner1@gmail.com

Connect with me at [LinkedIn](https://www.linkedin.com/in/steniowagner/).

Also, you can use this Project as you wish, be for study, be for make improvements or earn money with it!

It's free!

## Some Observations about this App

- This app uses Typescript, so, if you never used it before with Expo, React-Native or React, this project could be a very good kickstart for you (I'm still learning, ok?  😉).

- This project uses the React hooks all around (useCallback, useState, useEffect...), so, if you want to see these features in action, take a look on the project!

- Speaking about hooks, this project shares a specific functionality with the [expo-notifications-dashboard](https://github.com/steniowagner/expo-notifications-dashboard), that is the functionality to fetch data using HTTP protocol. Both projects use exactly the same implementation, take a look: [expo-useFetch](https://github.com/steniowagner/expo-notifications-app/blob/master/src/hooks/useFetch.ts) and [web-useFetch](https://github.com/steniowagner/expo-notifications-dashboard/blob/master/src/hooks/useFetch.ts).
This is a perfect example of how we can share code using hooks, we can write the functionality once and reuse them on the web, mobile and wherever you can use React!

## Getting Started

### Prerequisites

To run this project in the development mode, you'll need to have a basic environment to run a Expo App, that can be found [here](https://docs.expo.io/versions/latest/get-started/installation/).

Also, you'll need to the server running locallyon your network. You can find the server and all the instructions to start the server [here](https://github.com/steniowagner/expo-notifications-api).

### Installing

**Cloning the Repository**

```
$ git clone https://github.com/steniowagner/expo-notifications-app

$ cd expo-notifications-app
```

**Installing dependencies**

```
$ yarn
```

_or_

```
$ npm install
```

### Connecting the App with the Server

1 - Follow the instructions on the [expo-notifications-api](https://github.com/steniowagner/expo-notifications-api) to have the server up and running on your machine.

2 - With the server up and running, go to the [api file](https://github.com/steniowagner/expo-notifications-app/blob/master/src/api/index.ts#L1)  and reaplace the *< YOUR IP HERE >* for the IP of your machine (you can have some issues with _localhost_ if you're running on an android physical device, but you can use localhost safely on iOS).

It should looks like this:

SERVER_BASE_URL = 'http://192.168.25.1:4000/expo-notifications/api/v1';

*or*

SERVER_BASE_URL = 'http://localhost:4000/expo-notifications/api/v1';

### Running

With all dependencies installed and the environment properly configured, you can now run the app:

Android

```
$ yarn android
```

iOS

```
$ yarn ios
```

## Built With

- [React-Native](https://facebook.github.io/react-native/) - Build the native app using React
- [Expo](https://expo.io/) - Bootstrap React-Native development
- [Typescript](https://www.typescriptlang.org/) - Programming language used
- [ESlint](https://eslint.org/) - Linter
- [Prettier](https://prettier.io/) - Code Formatter
- [Babel](https://babeljs.io/) - JavaScript Compiler
- [Styled-Components](https://www.styled-components.com/) - Styles
- [Husky](https://github.com/typicode/husky) - Git hooks
- [Lint-Staged](https://github.com/okonet/lint-staged) - Run linters on git staged files


## Contributing

You can send how many PR's do you want, I'll be glad to analyse and accept them! And if you have any question about the project...

Email-me: stenio.wagner1@gmail.com

Connect with me at [LinkedIn](https://www.linkedin.com/in/steniowagner/)

Thank you!

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/steniowagner/expo-notifications-app/blob/master/LICENSE) file for details.
