import "../styles/index.scss";
import { AuthProvider } from "@/context/Auth";
import { raleway, roboto } from "./font";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${roboto.variable}`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
