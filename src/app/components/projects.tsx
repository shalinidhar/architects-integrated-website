'use client'
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
export default function Projects(){
    
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({delay:2000})])
    const images = [
    "/projects/1.jpg",
    "/projects/2.jpg",
    "/projects/3.jpg",
    "/projects/4.jpg",
    "/projects/5.jpg",
    "/projects/6.jpg",
    "/projects/7.jpg",
    "/projects/8.jpg",
    "/projects/9.jpg",
    "/projects/10.jpg",
    "/projects/11.jpg",
    "/projects/12.jpg",
    "/projects/13.jpg",
    "/projects/14.jpg",
    "/projects/15.jpg",
    "/projects/16.jpg",
    
  ]

  return(
    <div
  className="max-w-3xl mx-auto"
  style={{
    "--slide-height": "19rem",
    "--slide-spacing": "1rem",
    "--slide-size": "70%",
  } as React.CSSProperties}
    >
    <div className="overflow-hidden" ref={emblaRef}>
    <div className="flex"> 
        {images.map((path, index) => (
            <div className="translate-z-0 flex-[0_0_var(--slide-size)] min-w-0 pl-[var(--slide-spacing)] py-8 " key={index}>
                <Link href='/portfolio'>
                <Image key ={index} className="block w-full object-cover" 
                src={path} 
                alt="Past project" 
                width={500} 
                height={300}>              
                </Image>
                </Link>              
            </div>
        ))}     
    </div>
    </div>
    </div>
  )
}