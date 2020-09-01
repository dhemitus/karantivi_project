import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles';

import theme from '../styles/themes/theme'

class DivDocument extends Document {
  
  render() {
    return (
      <Html lang="en">
        <Head />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#515151" />
        <meta name="msapplication-TileImage" content="https://negeribaja.sgp1.cdn.digitaloceanspaces.com/2020/05/cropped-karantivi-icon-3-474x474.png"/>
        <meta name="theme-color" content={theme.palette.primary.main} />
        <link
          href="https://use.fontawesome.com/releases/v5.0.10/css/all.css"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&display=swap" rel="stylesheet" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

DivDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  }
}

  export default DivDocument