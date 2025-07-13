import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import { CartProvider } from "./context/CartContext";
import { OrderProvider } from "./context/OrderContext";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "მაგნეტო • Memory Magnets",
  description: "Magneto - შენი ძვირფასი მომენტების შესანახი ადგილი",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <OrderProvider>
            <Header />
            {children}
            <Footer />
          </OrderProvider>
        </CartProvider>
      </body>
    </html>
  );
}
