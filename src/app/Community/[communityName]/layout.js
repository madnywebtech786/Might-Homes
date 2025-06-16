import Footer from "@/app/sections/Footer";

export default function CommunityLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}