import { ThemeProvider } from 'styled-components'
import { AppContainer, GlobalStyle } from './App.style'
import { THEMES } from './utils/themes'

function App() {

	const currentTheme = 'dark';

	return (
		<>
			<ThemeProvider theme={THEMES[currentTheme]}>
				<GlobalStyle />
				<AppContainer>
					Hello from react with TS
				</AppContainer>
			</ThemeProvider>
		</>
	)
}

export default App
