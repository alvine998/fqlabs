import Footer from "@/components/Footer";
import ListArticlePage from "@/components/ListArticle";
import Navbar from "@/components/Navbar";
import React from "react";

export default function index() {
  return (
    <div>
      <Navbar />
      <ListArticlePage />
      <Footer />
    </div>
  );
}
