"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TrustedBy from "../components/TrustedBy";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Footer from "../components/Footer";
import ContactModal from "../components/ContactModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative min-h-screen bg-brand-dark overflow-x-hidden">
      {/* Navigation Header */}
      <Header onOpenModal={openModal} />

      {/* Hero Banner Section */}
      <Hero onOpenModal={openModal} />

      {/* Client Scrolling Marquee */}
      <TrustedBy />

      {/* Bento Portfolio Grid Section */}
      <Portfolio />

      {/* Services Glass Card Grid Section */}
      <Services />

      {/* Corporate Footer */}
      <Footer onOpenModal={openModal} />

      {/* Shared Booking Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
