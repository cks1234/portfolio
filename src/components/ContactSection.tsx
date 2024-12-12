import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface ContactSectionProps {
  isDark: boolean;
}

const ContactSection: React.FC<ContactSectionProps> = ({ isDark }) => {
  const [copied, setCopied] = useState(false);
  const email = 'cks123456987@gmail.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 5000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <div className="text-center max-w-2xl">
      <h2 className={`text-4xl font-bold mb-8 ${isDark ? 'text-gray-100' : 'text-pink-700'}`}>
        Contact Me
      </h2>
      <p className={`text-xl mb-8 ${isDark ? 'text-gray-300' : 'text-pink-900'}`}>
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
      </p>
      <div className="space-y-4">
        <button
          onClick={handleCopyEmail}
          className={`group relative w-full flex items-center justify-center py-3 px-6 rounded-lg ${
            isDark 
              ? 'bg-gray-700 hover:bg-gray-600' 
              : 'bg-pink-600 hover:bg-pink-700'
          } text-white transition duration-300`}
        >
          <span className="flex items-center gap-2">
            {copied ? <Check size={20} /> : <Copy size={20} />}
            {email}
          </span>
          <span
            className={`absolute right-4 opacity-0 ${
              copied ? 'opacity-100' : 'group-hover:opacity-70'
            } transition-opacity duration-200`}
          >
            {copied ? 'Copied!' : 'Copy'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default ContactSection;