import Link from 'next/link';
import Image from 'next/image';

export default function Footer(){
    return(
        <>
       <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/sujoy-dhar-architect-00a7155/"
          target="_blank"
          rel="noopener noreferrer"
        >
            <Image
            aria-hidden
            src="/linkedIn_blue.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />

          Sujoy Dhar
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/sutapa-roy-561209368/?originalSubdomain=in"
          target="_blank"
          rel="noopener noreferrer"
        >
            <Image
            aria-hidden
            src="/linkedIn_blue.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />

          Sutapa Roy
        </a>
        </>
    )
}