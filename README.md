# Shipra AI

An intelligent mobile assistant powered by AI, built with React Native and TypeScript.

## Features

- 🤖 AI-powered conversations
- 📱 Mobile-optimized interface
- 🎯 Smart assistance capabilities
- 🔄 Real-time messaging
- 📍 Cross-platform support (iOS & Android)

## Tech Stack

- **React Native** - Cross-platform mobile framework
- **TypeScript** - Type-safe JavaScript
- **React Navigation** - Navigation library
- **React Native Screens** - Native screen support
- **React Native Safe Area Context** - Safe area handling

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- React Native development environment
- Android Studio (for Android development)
- Xcode (for iOS development on macOS)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd shipra-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **For iOS development** (macOS only)
   ```bash
   cd ios && pod install
   ```

### Running the App

#### Android
```bash
npm run android
```

#### iOS
```bash
npm run ios
```

#### Development server
```bash
npm start
```

## Project Structure

```
shipra-ai/
├── src/
│   ├── components/     # Reusable UI components
│   ├── screens/        # Screen components
│   ├── navigation/     # Navigation configuration
│   ├── utils/         # Utility functions
│   └── services/      # API services
├── android/           # Android native code
├── ios/              # iOS native code
├── App.tsx           # Main app component
├── index.js          # Entry point
├── package.json      # Dependencies and scripts
└── tsconfig.json     # TypeScript configuration
```

## Development

### Building for Production

#### Android APK
```bash
npm run build:android
```

#### iOS Archive
```bash
npm run build:ios
```

### Code Quality

- **Linting**: `npm run lint`
- **Testing**: `npm test`

## Features Overview

### Home Screen
- Welcome interface
- Navigation to AI chat
- Feature overview

### AI Chat Screen
- Real-time messaging interface
- AI response simulation
- Message history

## Customization

### Adding New Screens

1. Create a new screen component in `src/screens/`
2. Add the screen to the navigation stack in `App.tsx`
3. Configure navigation options as needed

### Styling

The app uses React Native's built-in styling system. Custom styles can be found in each component file.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

ISC License - see LICENSE file for details.

## Support

For support and questions, please open an issue in the repository.

---

Built with ❤️ using React Native and TypeScript