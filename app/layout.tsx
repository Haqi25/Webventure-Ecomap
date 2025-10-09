import Navbar from "@/component/ui/navbar";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import MapComponent from "@/component/ui/map";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white min-h-screen">
        <Navbar />
       
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
