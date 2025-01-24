import React, { ReactNode } from "react";
import './globals.css';
export default function NotFoundPage(): ReactNode {
  return (
    <html>
      <body>
        <React.Fragment>
          <main
            className=" 
            w-full h-screen flex flex-col items-center justify-center text-center text-foreground-primary text-4xl gap-4 p-10 transition-all duration-300"
          >
            <h1>
              <strong>404</strong> | Page not found
            </h1>
            <p>Sorry, the page you're looking for doesn't exist.</p>
          </main>
        </React.Fragment>
      </body>
    </html>
  );
}
