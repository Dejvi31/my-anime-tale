import "./globals.css";
import Layout from "@/components/Layout";

export const metadata = {
  title: "MyAnimeTale - Create Your Anime Story",
  description: "Create, share, and explore anime-inspired stories!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
