'use client'
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
export default function Gallery(){
    
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center' }, [Autoplay({delay:2000, stopOnInteraction: false})])
    const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpeg",
    "/images/6.jpeg",
    "/images/7.jpeg",
    "/images/8.jpeg"
  ]

  return(
    <div
  className="mx-auto"
  style={{
    "--slide-height": "19rem",
    "--slide-spacing": "1rem",
    "--slide-size": "70%",
  } as React.CSSProperties}
    >
    <div className="overflow-hidden w-[1100px]" ref={emblaRef}>
    <div className="flex items-center h-[360px]"> 
        {images.map((path, index) => (
            <div className="translate-z-0 flex-[0_0_65%] min-w-0 pl-[var(--slide-spacing)] flex items-center justify-center" key={index}>
                
                <Image key ={index} className="block w-full object-cover rounded-[0.5 rem]" 
                src={path} 
                alt="Past project" 
                width={500} 
                height={300}>              
                </Image>
                             
            </div>
        ))}     
    </div>
    </div>
    </div>
  )
}