import { ThemeProvider } from 'styled-components'
import { AppContainer, GlobalStyle } from './App.style'
import { useAppContext } from './context/App.context';
import { useContext } from 'react';
import { THEMES } from './utils/themes';
import { Header } from './components/header/Header';

function App() {

	const { theme } = useAppContext();

	return (
		<>
			<ThemeProvider theme={THEMES[theme]}>
				<GlobalStyle />
				<AppContainer>
					<Header />
				</AppContainer>
			</ThemeProvider>
		</>
	)
}

export default App
