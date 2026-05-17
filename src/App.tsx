import { useTheme } from './app/providers/theme-provider';
import './app/styles/themes.scss';
function App() {
  const ThemeProvider = useTheme();

  return (
    <>
      <button onClick={() => {
        ThemeProvider.setTheme(ThemeProvider.theme === 'dark' ? 'light' : 'dark');
      }}
      >
        Toggle theme
      </button>
    </>
  );
}

export default App;
