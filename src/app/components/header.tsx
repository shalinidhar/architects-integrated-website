import Link from 'next/link';

type Prop = {
    currPage: string;
};

export default function Header({currPage}:Prop){

    return(
        <div className="h-[20px] flex justify-between p-0">
                <Link href='/'>
                            <img
                            aria-hidden
                            src="/logo.svg"
                            alt="Home"
                            width={250}
                            height={1000}
                          />
                </Link>
                <div className="flex space-x-15 pt-16 font-medium">
                <Link className= "text-base hover:text-xl transform hover:scale-105 transition-all duration-150 hover:underline hover:underline-offset-7" href='/about_us'>
                    <div className= {currPage==="about"?"underline font-bold text-[#630f11] text-decoration-line: underline-offset-7": ""}>
                        About Us
                    </div>
                </Link>
                <Link className= "text-base hover:text-xl transform hover:scale-105 transition-all duration-150 hover:underline hover:underline-offset-7" href='/portfolio'>
                    <div className= {currPage==="portfolio"?"underline font-bold text-[#630f11] text-decoration-line: underline-offset-7": ""}>
                        Portfolio
                    </div>
                </Link>                
                <Link className= "text-base hover:text-xl transform hover:scale-105 transition-all duration-150 hover:underline hover:underline-offset-7" href='/contact_us'>
                <div className= {currPage==="contact"?"underline font-bold text-[#630f11] text-decoration-line: underline-offset-7": ""}>
                        Contact
                    </div>
                </Link>
                </div>
        </div>
    )
}