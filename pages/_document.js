import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html lang="en">
        <Head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <meta name="description" content="Chris Chijioke website" />
            <link
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
            integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
            crossOrigin="anonymous"
            />
            <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans&display=swap"
            rel="stylesheet"
            />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Arizonia&display=swap" rel="stylesheet" />
        </Head>
        <body className="font-notosans">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
