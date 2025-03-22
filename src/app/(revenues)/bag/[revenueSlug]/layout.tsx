import React from "react";

export default function BagLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <React.Fragment>
      {children}
      {modal}
    </React.Fragment>
  );
}
