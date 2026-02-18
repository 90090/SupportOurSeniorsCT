import { useState } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  details: string;
  imageSrc?: string;
}

export default function ServiceCard({ title, description, icon, details, imageSrc }: ServiceCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div 
        className="relative w-72 bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          backgroundImage: isHovered && imageSrc ? `url(${imageSrc})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay for readability when hovered */}
        {isHovered && imageSrc && (
          <div className="absolute inset-0 bg-black/50 transition-opacity duration-300"></div>
        )}
        
        {/* Content */}
        <div className="relative z-10 p-8 flex flex-col items-center text-center flex-1">
          {/* Icon */}
          <div 
            className={`w-20 h-20 mb-6 transition-colors duration-300 ${isHovered && imageSrc ? 'text-white' : 'text-[var(--color-primary)]'}`}
            dangerouslySetInnerHTML={{ __html: icon }} 
          />
          
          {/* Title */}
          <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${isHovered && imageSrc ? 'text-white' : 'text-[var(--color-primary)]'}`}>
            {title}
          </h3>
          
          {/* Description */}
          <p className={`text-base leading-relaxed mb-6 flex-1 transition-colors duration-300 ${isHovered && imageSrc ? 'text-white' : 'text-[var(--color-text)]'}`}>
            {description}
          </p>
          
          {/* Button */}
          <button 
            className={`inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold border-2 transition-all duration-300 ${
              isHovered && imageSrc 
                ? 'bg-white text-[var(--color-primary)] border-white hover:bg-[var(--color-primary)] hover:text-white' 
                : 'bg-transparent text-[var(--color-primary)] border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white'
            }`}
            onClick={openModal}
            aria-label={`Read more about ${title}`}
          >
            <span>READ MORE</span>
            <svg 
              viewBox="0 0 200 200" 
              height="20" 
              width="20" 
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current transition-transform duration-300 group-hover:rotate-90"
            >
              <path d="M180 85.574h-65.517V20H85.559v65.574H20v28.917h65.559V180h28.924v-65.509H180V85.574z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/75 flex items-center justify-center z-[2000] p-4 animate-fadeIn"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-lg p-10 max-w-4xl w-full max-h-[85vh] overflow-y-auto relative animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 text-gray-600 text-2xl flex items-center justify-center transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-white hover:rotate-90"
              onClick={closeModal} 
              aria-label="Close modal"
            >
              ×
            </button>
            
            {/* Modal Content */}
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6 pr-8">{title}</h2>
            <div 
              className="prose prose-lg max-w-none [&_p]:mb-4 [&_p]:leading-relaxed [&_ul]:my-4 [&_ul]:pl-6 [&_li]:mb-2 [&_li]:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: details }} 
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease;
        }
      `}</style>
    </>
  );
}