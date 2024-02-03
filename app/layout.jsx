/** @format */

import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header></header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
