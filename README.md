
# React Native Offline Tambola

An **offline-first Tambola (Housie) game** built with **React Native**, designed for local multiplayer gameplay without any internet dependency. The application supports ticket generation, number calling, and rule-based win validation, making it ideal for family gatherings, classrooms, and small events.

---

## ✨ Features

* 📱 Cross-platform support (Android & iOS)
* 🚫 100% offline gameplay (no network required)
* 🎟️ Automatic Tambola ticket generation
* 🔢 Randomized number calling (1–90)
* ✅ Real-time ticket marking and validation
* 🏆 Support for common winning patterns:

  * Early Five
  * Top Line
  * Middle Line
  * Bottom Line
  * Full House
* 🧠 Local state management
* 🎨 Clean and responsive UI

---

## 🛠️ Tech Stack

* **React Native**
* **JavaScript (ES6+)**
* **React Hooks**
* **Local state / AsyncStorage** (if persistence is enabled)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

* Node.js (>= 16)
* npm or yarn
* React Native CLI or Expo CLI
* Android Studio / Xcode (for emulators)

---

### Installation

```bash
git clone https://github.com/suman12-24/React-Native-Offline-Tambola.git
cd react-native-offline-tambola
npm install
```

or

```bash
yarn install
```

---

### Running the App

#### Android

```bash
npx react-native run-android
```

#### iOS

```bash
npx react-native run-ios
```

---

## 🎮 How to Play

1. Launch the app and start a new game
2. Generate Tambola tickets for players
3. Begin number calling (1–90)
4. Players mark numbers on their tickets
5. Claim winning patterns
6. The app validates claims automatically

---

## 🧩 Future Enhancements

* 🎤 Voice-based number calling
* 👥 Player management screen
* 💾 Save & resume games
* 🧾 Export or share tickets
* 🌙 Dark mode support

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

Developed using React Native for offline-first mobile gameplay.

---

## ⭐ Support

If you find this project useful, please consider giving it a star on GitHub.

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
