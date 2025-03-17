
import { FC } from 'react';
import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';
import InfoSection from '@/components/InfoSection';
import Footer from '@/components/Footer';

const Index: FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      
      <main className="flex-grow">
        <section className="py-12 bg-gradient-to-b from-brand-blue to-brand-lightBlue text-white">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">We're Here to Help</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Have a question, feedback, or need assistance? Reach out to us using the form below and our team will get back to you as soon as possible.
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Get in Touch With Us</h2>
              <ContactForm />
            </div>
          </div>
        </section>
        
        <InfoSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
