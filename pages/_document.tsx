import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="dark:bg-black bg-white text-black dark:text-gray-300">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
