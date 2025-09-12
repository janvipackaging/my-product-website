// app/bopp-film/[city]/page.tsx

"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// --- DYNAMIC PAGE COMPONENT ---
export default function CityPage({ params }: { params: { city: string } }) {
  const citySlug = params.city;
  const cityName = citySlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  const contactFormRef = useRef<HTMLFormElement>(null);
  const [formMessage, setFormMessage] = useState({ text: '', type: '' });
  const [isLoading, setIsLoading] = useState(false);

  // Effect for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    return () => document.querySelectorAll('.animate-on-scroll').forEach(el => observer.unobserve(el));
  }, []);
  
  // Form submission handler
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!contactFormRef.current) return;
    setIsLoading(true);
    setFormMessage({ text: '', type: '' });
    const formData = new FormData(contactFormRef.current);
    const scriptURL = 'https://script.google.com/macros/s/AKfycbykJIQXJYuuqxMiYntmZ2MdAB57NS3Yr2XzI5iChb_SUDHHaTNfs6te0A3M-3VkcpjNYg/exec';

    try {
      const response = await fetch(scriptURL, { method: 'POST', body: formData });
      if (response.ok) {
        setFormMessage({ text: 'Thank you! Your message has been sent.', type: 'success' });
        contactFormRef.current.reset();
      } else {
        throw new Error('Server responded with an error.');
      }
    } catch (error) {
      setFormMessage({ text: 'Failed to send message. Please try again.', type: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <main>
        {/* --- HERO SECTION --- */}
        <section 
          id="hero" 
          className="relative text-white overflow-hidden rounded-b-3xl shadow-xl flex items-center justify-center section-padding"
          style={{ backgroundImage: "url('https://s.alicdn.com/@sc04/kf/Ha6e3c2151c21490e9c3d52cda266dbcbu.jpg_720x720q50.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-primary-dark opacity-75 z-0"></div>
          <div className="container mx-auto text-center px-4 md:px-8 relative z-10 animate-on-scroll">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
              Your Trusted Supplier for BOPP Film in {cityName}
            </h1>
            <p className="text-lg md:text-xl mb-10 max-w-4xl mx-auto opacity-90">
              Elevate your packaging with our premium films. Get consistent quality, competitive pricing, and a reliable supply chain for your business in <strong>{cityName}</strong>.
            </p>
            <a href="#contact" className="inline-block bg-accent-main hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-full text-lg shadow-xl transform hover:scale-105 transition">
              Request a Quote for {cityName}
            </a>
          </div>
        </section>

        {/* --- INTRO CONTENT SECTION --- */}
        <section className="bg-section-light section-padding">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold text-center text-heading-dark mb-10 animate-on-scroll">
              Reliable & Regular BOPP Film Supply in {cityName}
            </h2>
            <div className="max-w-4xl mx-auto text-base text-gray-700 space-y-5 leading-relaxed animate-on-scroll">
              <p>As a trusted <strong>BOPP film supplier in {cityName}</strong>, Janvi Packaging understands that a consistent supply chain is vital for your operations. We offer a dependable source of high-quality films, ensuring your production lines never face a shortage.</p>
            </div>
          </div>
        </section>
        
        {/* --- CONTACT FORM SECTION --- */}
        <section id="contact" className="bg-section-mid section-padding">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold text-center text-heading-dark mb-4 animate-on-scroll">Get a Competitive Quote for BOPP Film in {cityName}</h2>
            <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto animate-on-scroll">
              Fill out the form below for a custom, no-obligation quote.
            </p>
            <div className="max-w-2xl mx-auto bg-card-bg p-8 rounded-xl shadow-lg animate-on-scroll">
              <form ref={contactFormRef} onSubmit={handleFormSubmit} className="space-y-4">
                <input type="hidden" name="Source Page" value={`BOPP Film in ${cityName}`} />
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">Your Name</label>
                  <input type="text" id="name" name="Name" className="w-full p-3 border rounded-lg" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">Your Business Email</label>
                  <input type="email" id="email" name="Email" className="w-full p-3 border rounded-lg" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">Your Specific Requirements</label>
                  <textarea id="message" name="Message" rows={4} className="w-full p-3 border rounded-lg" required></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-md transition flex items-center justify-center" disabled={isLoading}>
                  {isLoading ? 'Submitting...' : 'Submit Request'}
                  {isLoading && <span className="h-5 w-5 border-t-2 border-r-2 border-white rounded-full ml-2 animate-spin"></span>}
                </button>
                {formMessage.text && (
                  <div className={`mt-4 text-center p-3 rounded-lg ${formMessage.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {formMessage.text}
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}