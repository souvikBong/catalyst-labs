import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Catalyst Laboratories Pvt. Ltd.",
  description:
    "Official website of Catalyst Laboratories Pvt. Ltd. – delivering quality pharmaceuticals, diagnostics, and healthcare innovation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 flex flex-col min-h-screen font-[Bahnschrift]">
        <Header />
        <main className="flex-grow container mx-auto p-6">{children}</main>
        <footer className="bg-blue-700 text-gray-100 py-6 mt-10 border-t border-blue-900">
          <div className="container mx-auto text-center text-sm">
            <p>
              &copy; {new Date().getFullYear()} Catalyst Laboratories Pvt. Ltd. All
              rights reserved.
            </p>
            <p className="mt-2">
              A321, Royal Palms, Goregaon (East),<br />
            Mumbai - 400065
            </p>
            <p className="mt-1">
              Email: catalystlaboratoriespvtltd@gmail.com
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}