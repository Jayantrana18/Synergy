import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase"; // Import your firebase config here
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const noLayoutRoutes = [
    "/patients",
    "/login",
    "/appointment",
    "/store",
    "/messages",
  ];
  const hideLayout = noLayoutRoutes.includes(router.pathname);

  // Handle authentication state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Logged In");
        setLoading(false);
        // Redirect if already logged in (if needed)
        if (router.pathname === "/login") {
          router.push("/"); // Redirect to home if logged in
        }
      } else {
        console.log("Logged Out");
        setLoading(false);
        // Redirect to login page if logged out
        if (router.pathname !== "/login") {
          router.push("/login");
        }
      }
    });

    return () => unsubscribe(); // Clean up subscription on unmount
  }, [router]);

  // If loading, display a loading spinner or similar UI
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <ToastContainer theme="dark" />
      {/* Conditionally render Header and Footer based on routes */}
      {!hideLayout && <Header />}
      <Component {...pageProps} />
      {!hideLayout && <Footer />}
    </ThemeProvider>
  );
}

export default MyApp;
