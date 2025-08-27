"use client";

import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-transparent text-white flex justify-center items-center mt-40">
      <p className="flex items-center gap-2 text-sm">
        Made with <Heart className="w-4 h-4 text-red-500" /> by Stanley Pierre
        Louis
      </p>
    </footer>
  );
};

export default Footer;
