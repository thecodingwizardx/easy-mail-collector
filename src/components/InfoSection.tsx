
import { FC } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const InfoSection: FC = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-brand-darkBlue">Why Contact Us?</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
            <h3 className="text-xl font-semibold mb-3 text-brand-blue">Quick Response</h3>
            <p className="text-gray-600">Our team is committed to responding to all inquiries within 24 hours.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
            <h3 className="text-xl font-semibold mb-3 text-brand-blue">Expert Support</h3>
            <p className="text-gray-600">Get help from our team of specialists who can assist with any questions.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
            <h3 className="text-xl font-semibold mb-3 text-brand-blue">Personalized Solutions</h3>
            <p className="text-gray-600">We provide customized solutions tailored to your specific needs.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
            <h3 className="text-xl font-semibold mb-3 text-brand-blue">Secure Communication</h3>
            <p className="text-gray-600">Your information is safe with us - we use secure channels for all communications.</p>
          </div>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-brand-darkBlue">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-brand-blue mr-3 mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">contact@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-brand-blue mr-3 mt-1" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">+1 (123) 456-7890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-brand-blue mr-3 mt-1" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-600">123 Business Street, Suite 100<br />City, State 12345</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-brand-blue mr-3 mt-1" />
                <div>
                  <p className="font-medium">Business Hours</p>
                  <p className="text-gray-600">Monday - Friday: 9am - 5pm<br />Weekends: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-brand-darkBlue">Frequently Asked Questions</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-brand-blue">What information should I include in my message?</h4>
                <p className="text-gray-600 mt-1">Please include your name, a detailed description of your inquiry, and any relevant details that will help us assist you better.</p>
              </div>
              
              <div>
                <h4 className="font-medium text-brand-blue">How long does it take to get a response?</h4>
                <p className="text-gray-600 mt-1">We aim to respond to all inquiries within 24 business hours.</p>
              </div>
              
              <div>
                <h4 className="font-medium text-brand-blue">Is my information secure?</h4>
                <p className="text-gray-600 mt-1">Yes, we take data security seriously and have measures in place to protect your personal information.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
