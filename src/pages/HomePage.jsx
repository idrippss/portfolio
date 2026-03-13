
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import StaticHero from '@/components/StaticHero.jsx';
import HighlightsSlider from '@/components/HighlightsSlider.jsx';
import CategoriesSection from '@/components/CategoriesSection.jsx';
import GallerySlider from '@/components/GallerySlider.jsx';
import ReelsSection from '@/components/ReelsSection.jsx';
import ContactForm from '@/components/ContactForm.jsx';
import Footer from '@/components/Footer.jsx';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Idriss KACEM - Digital Creator | Photography & Videography Portfolio</title>
        <meta
          name="description"
          content="Explore the creative portfolio of Idriss KACEM, a professional digital creator specializing in photography and videography. View stunning visual stories and cinematic productions."
        />
      </Helmet>

      <div className="min-h-screen bg-[#1a1a1a]">
        <Header />
        <main>
          <StaticHero />
          <HighlightsSlider />
          <CategoriesSection />
          <GallerySlider />
          <ReelsSection />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
