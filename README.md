# react-native-kk-styles

React Native KK For easy UI styling based on common style guidelines.

## Installation

```sh
yarn add @klutchkyle/react-native-kk-styles
```

## Usage

```js

import {ThemeProvider} from '@klutchkyle/react-native-kk-styles'

const AppColors = (isDark: boolean = false) => ({
  // Backgrounds
  bg_dark: isDark ? 'hsl(0, 100%, 7%)' : 'hsl(0, 100%, 95%)',
  bg: isDark ? 'hsl(0, 70%, 10%)' : 'hsl(0, 70%, 92%)',
  bg_light: isDark ? 'hsl(0, 60%, 15%)' : 'hsl(0, 60%, 96%)',

  // Borders
  border: isDark ? 'hsl(0, 50%, 35%)' : 'hsl(0, 50%, 65%)',
  border_muted: isDark ? 'hsl(0, 60%, 25%)' : 'hsl(0, 60%, 75%)',

  // Text
  text: isDark ? 'hsl(0, 100%, 97%)' : 'hsl(0, 100%, 10%)',
  text_muted: isDark ? 'hsl(0, 30%, 70%)' : 'hsl(0, 30%, 30%)',

  // Highlights / brand
  highlight: 'hsl(0, 60%, 50%)',

  primary: 'hsl(0, 100%, 70%)',     // Soft pink-red
  secondary: 'hsl(350, 80%, 45%)',  // Deeper red

  // States
  success: 'hsl(120, 60%, 40%)',     // green
  warning: 'hsl(40, 100%, 40%)',     // orange-yellow
  danger: 'hsl(0, 80%, 60%)',        // red
  info: 'hsl(200, 90%, 60%)',        // blue
});


function App() {
  return (
    <ThemeProvider
      getAppColors={AppColors}>
      <NotifierWrapper>
        <NavigationWithTheme />
      </NotifierWrapper>
    </ThemeProvider>
  );
}
```

Then in your component you can do:

```js
import { useTheme, mdValue, h1FontSize } from '@klutchkyle/react-native-kk-styles'

const YourComponent = () => {
  const {theme,isDark,toggleTheme} = useTheme()
  <View style={{backgroundColor: theme.bg, padding: mdValue}}>
    <Text style={{
      color: theme.text, 
      fontSize: h1FontSize
    }}>
      This is some example text themed with common theme colors
    </Text>
  </View>
}

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
