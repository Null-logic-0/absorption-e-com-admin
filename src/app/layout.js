import "./globals.css";

export const metadata = {
  title: "The Absorption Company",
  description: "The Absorption Company Admin Panel.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
