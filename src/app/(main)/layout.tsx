import { Footer, Navbar } from "~/components/shared";
import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.Fragment>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </React.Fragment>
  );
}
