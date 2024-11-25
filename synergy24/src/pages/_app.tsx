import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const noLayoutRoutes = [
    "/dashboard",
    "/login",
    "/appointment",
    "/store",
    "/messages",
  ];
  const hideLayout = noLayoutRoutes.includes(router.pathname);

  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      {!hideLayout && <Header />}
      <Component {...pageProps} />
      {!hideLayout && <Footer />}
    </ThemeProvider>
  );
}

export default MyApp;
