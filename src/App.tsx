import { ThemeProvider } from 'styled-components'
import { AppContainer, GlobalStyle } from './App.style'
import { useAppContext } from './context/App.context';
import { THEMES } from './utils/themes';
import { Header } from './components/header/Header';
import { ToolTips } from './utils/toolTips.style';

function App() {

	const { theme } = useAppContext();

	return (
		<>
			<ThemeProvider theme={THEMES[theme]}>
				<GlobalStyle />
				<ToolTips />
				<AppContainer>
					<Header />
				</AppContainer>
			</ThemeProvider>
		</>
	)
}

export default App
