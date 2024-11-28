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

  // Define routes that should be protected and require authentication
  const protectedRoutes = ["/patients", "/appointment", "/store", "/messages"];
  const publicRoutes = ["/services", "/aboutus"]; // Allow these routes for all users

  const hideLayout = protectedRoutes.includes(router.pathname);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);

      // If the user is logged in and on a protected route, keep them there
      if (user) {
        console.log("Logged In");
        // Redirect to '/patients' or the desired page if they are logged in
        if (
          !protectedRoutes.includes(router.pathname) &&
          !publicRoutes.includes(router.pathname)
        ) {
          router.push("/patients");
        }
      } else {
        console.log("Logged Out");
        // Redirect unauthenticated users to the home page unless they are on a public route
        if (
          !publicRoutes.includes(router.pathname) &&
          router.pathname !== "/"
        ) {
          router.push("/");
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
