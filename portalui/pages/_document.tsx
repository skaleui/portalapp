import Document, { DocumentContext, DocumentInitialProps } from "next/document";
import React, {Fragment} from "react";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
   static async getInitialProps(ctx: DocumentContext)
                      : Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          // eslint-disable-next-line react/display-name
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} key={null}/>),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <Fragment key="1">
            {initialProps.styles}
            {sheet.getStyleElement()}
          </Fragment>,        
        ],
      };
    } finally {
      sheet.seal();
    }
  }
}