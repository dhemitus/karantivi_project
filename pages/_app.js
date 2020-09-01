import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Provider } from 'react-redux'

import "node_modules/video-react/dist/video-react.css"
import theme from '../styles/themes/theme'
import store from '../src/redux/store/index'

//import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
