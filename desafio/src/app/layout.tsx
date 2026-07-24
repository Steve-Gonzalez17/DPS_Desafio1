"use client";

import { Provider } from "react-redux";
import store from "../redux/store";

import Navbar from "../components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
            <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4" />  
      </head>
      <body>
        <Provider store={store}>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}