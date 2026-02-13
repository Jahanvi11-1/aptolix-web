// 1. Import your downloaded webp images
import brand1 from '../assets/brand1.webp'
import brand2 from '../assets/brand2.webp'
import brand3 from '../assets/brand3.webp'
import brand4 from '../assets/brand4.webp'
import brand5 from '../assets/brand5.webp'

export default function Logos() {
  // 2. Put the imported variables into an array
  const brands = [brand1, brand2, brand3, brand4, brand5];
  
  return (
    <div className="py-20 border-y border-gray-200/50 dark:border-white/5 overflow-hidden">
      <p className="text-center text-sm font-semibold text-gray-400 mb-12 tracking-[0.2em] uppercase">
        Trusted by businesses worldwide
      </p>

      {/* Row 1: Moving Right (---->) */}
      <div className="flex mb-16">
        <div className="flex animate-marquee whitespace-nowrap gap-24 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {[...brands, ...brands, ...brands].map((logo, index) => (
            <img 
              key={index} 
              src={logo} 
              alt="Partner Logo" 
              className="h-10 w-auto object-contain flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Row 2: Moving Left (<----) */}
      <div className="flex">
        <div className="flex animate-marquee-reverse whitespace-nowrap gap-24 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {[...brands, ...brands, ...brands].map((logo, index) => (
            <img 
              key={index} 
              src={logo} 
              alt="Partner Logo" 
              className="h-10 w-auto object-contain flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
}