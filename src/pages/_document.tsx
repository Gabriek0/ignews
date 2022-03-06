import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Poppins:wght@300;400;500;600;700&family=Roboto:wght@400;700;900&display=swap"
                    rel="stylesheet" />
                <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}