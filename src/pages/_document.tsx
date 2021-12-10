import Document, { Html, Head, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body style={{ height: "100vh" }}>
          <div className="h-full bg-gray-200 dark:bg-gray-900 dark:text-white">
            <Main />
          </div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
