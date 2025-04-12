"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import type React from "react";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

const pageMetadata: Record<string, { title: string }> = {
  "/about": { title: "About ThinkViL" },
  "/login": { title: "Log in - ThinkViL" },
  "/signup": { title: "Sign Up - ThinkViL" },
  "/donate": { title: "Donate - ThinkViL | Empower Young Minds with Visual Learning" },
  "/simulations/physics": { title: "Physics Simulations" },
  "/simulations/chemistry": { title: "Chemistry Simulations" },
  "/simulations/mathematics": { title: "Mathematics Simulations" },
  "/simulations/physics/Rectilinear_Motion": { title: "Rectilinear Motion Simulation" },
  "/simulations/physics/Cannonball_Motion": { title: "Cannonball Motion Simulation" },
  "/simulations/physics/Cars_Relative_Motion": { title: "Cars Relative Motion Simulation" },
  "/simulations/physics/Rain_Person_Problem": { title: "Rain Person Problem Simulation" },
  "/simulations/physics/Mass_Block_Motion": { title: "Mass Block Motion Simulation" },
  "/simulations/physics/Incline_Plane_Pulley_Motion": { title: "Incline Plane Pulley Motion Simulation" },
  "/simulations/physics/Pulley_System": { title: "Pulley System Simulation" },
  "/simulations/physics/Vernier_Calipers": { title: "Vernier Calipers Simulation" },
  "/simulations/physics/Periodic_Table": { title: "Periodic Table Simulation" },
  "/simulations/physics/Quadratic_Equation": { title: "Quadratic Equation Simulation" },
};

const simulationPages = [
  "Rectilinear_Motion",
  "Cannonball_Motion",
  "Cars_Relative_Motion",
  "Rain_Person_Problem",
  "Mass_Block_Motion",
  "Incline_Plane_Pulley_Motion",
  "Pulley_System",
  "Vernier_Calipers",
  "Periodic_Table",
  "Quadratic_Equation",
];

simulationPages.forEach((sim) => {
  pageMetadata[`/simulations/physics/${sim}`] = {
    title: `${sim.replace(/_/g, " ")}`,
  };
  pageMetadata[`/simulations/mathematics/${sim}`] = {
    title: `${sim.replace(/_/g, " ")}`,
  };
  pageMetadata[`/simulations/chemistry/${sim}`] = {
    title: `${sim.replace(/_/g, " ")}`,
  };
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const defaultMetadata = { title: "ThinkViL - Explore Science & Math" };
    const { title } = pageMetadata[pathname] || defaultMetadata;
    document.title = title;
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/All_Images/Header/thinkvil_logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
          <Header />
          <main className="w-full px-1">
            {children}
          </main>
          <Footer />
      </body>
    </html>
  );
}
