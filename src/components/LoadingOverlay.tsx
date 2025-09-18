"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LoadingOverlay() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative flex flex-col items-center gap-6">
        <motion.div
          className="w-32 h-32 border-4 border-white/30 border-t-blue-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />

        <motion.h2
          className="text-4xl font-extrabold tracking-[0.2em] text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <Link href="/" className="hover:text-blue-500 transition-colors">
            SMDB
          </Link>
        </motion.h2>
      </div>
    </motion.div>
  );
}
