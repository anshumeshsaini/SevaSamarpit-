import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Home, Phone, Heart } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo2.png";

const NotFound = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />

      <main className="min-h-[80vh] flex items-center justify-center bg-earth px-6 py-32">
        <div className="max-w-md w-full text-center space-y-6 bg-card p-8 rounded-3xl border border-border shadow-elevated">
          <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto flex items-center justify-center p-2">
            <img src={logo} alt="Seva Samarpit Logo" className="w-10 h-10 object-contain" />
          </div>

          <span className="text-xs uppercase tracking-widest text-accent font-bold">
            404 • Page Not Found
          </span>

          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
            Lost Your Way?
          </h1>

          <p className="text-sm text-muted-foreground leading-relaxed">
            The page you are looking for at <code className="bg-muted px-1.5 py-0.5 rounded text-xs">{location.pathname}</code> does not exist or may have been moved.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild className="bg-primary text-primary-foreground font-semibold rounded-full w-full sm:w-auto">
              <Link to="/" className="flex items-center gap-2 justify-center">
                <Home className="w-4 h-4" />
                <span>Return to Home</span>
              </Link>
            </Button>

            <Button asChild variant="outline" className="border-border rounded-full w-full sm:w-auto">
              <Link to="/contact">
                Contact Desk
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default NotFound;