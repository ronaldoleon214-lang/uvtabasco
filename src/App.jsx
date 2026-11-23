import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OffersAndScholarships from './components/OffersAndScholarships';
import EducationLevels from './components/EducationLevels';
import ProgramsCatalog from './components/ProgramsCatalog';
import ServicesAndPartners from './components/ServicesAndPartners';
import EcosystemSection from './components/EcosystemSection';
import AdmissionContact from './components/AdmissionContact';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

export default function App() {
  const [selectedProgram, setSelectedProgram] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <OffersAndScholarships />
        <ProgramsCatalog onSelectProgram={setSelectedProgram} />
        <EducationLevels />
        <ServicesAndPartners />
        <EcosystemSection />
        <AdmissionContact selectedProgram={selectedProgram} />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
