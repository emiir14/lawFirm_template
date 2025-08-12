import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  className?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = "5493834649233",
  message = "Hola, necesito información sobre sus servicios legales.",
  className = ""
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (!phoneNumber) return;
    const encodedMessage = encodeURIComponent(message);
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    const whatsappUrl = isMobile
      ? `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        className={`relative flex items-center ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Tooltip to the left */}
        <div
          className={`absolute right-full mr-3 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg whitespace-nowrap transition-all duration-300 ${
            isHovered 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-2 pointer-events-none'
          }`}
        >
          Contáctanos
          <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-gray-800"></div>
        </div>

        {/* WhatsApp Button */}
        <button
          type="button"
          onClick={handleClick}
          className={`
            relative z-10
            flex items-center justify-center
            w-14 h-14 
            bg-green-500 hover:bg-green-600 
            text-white 
            rounded-full 
            shadow-lg hover:shadow-xl
            transition-all duration-300 ease-in-out
            transform hover:scale-110
            focus:outline-none focus:ring-4 focus:ring-green-300
          `}
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle size={24} />
        </button>

        {/* Ripple effect behind button */}
        {isHovered && (
          <div className="absolute inset-0 rounded-full bg-green-400 opacity-20 animate-ping pointer-events-none z-0"></div>
        )}
      </div>
    </div>
  );
};



