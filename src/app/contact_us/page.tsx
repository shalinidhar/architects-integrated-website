import Link from "next/link"
import Header from "../components/header"
import Footer from "../components/footer"
import Projects from "../components/projects"
import Image from "next/image"

export default function Portfolio(){
    return(
        <div className="font-sans grid grid-rows-[20px_1fr_10px] w-[1260px] max-h-screen pr-[160px] gap-20 sm:p-6 ">
            <header className="h-[22px] pr-8">
                <Header currPage="contact"></Header>
            </header>
            <main className="flex flex-col row-start-2 justify-center items-center bg-[url('/baground.jpg')] bg-cover bg-center w-[1230px] h-[530px] py-5">
                <div className="flex flex-col gap-y-[32px]" >
                <div className="flex gap-[6px] justify-center items-center">
                        <Image
                            aria-hidden
                            src="/telephone.svg"
                            alt="Globe icon"
                            width={32}
                            height={32}
                          />
                          316-665-4242
                </div>
                <div className="flex gap-[6px] justify-center items-center">
                    <Image
                            aria-hidden
                            src="/email_symbol.svg"
                            alt="Globe icon"
                            width={32}
                            height={32}
                          />
                          architectsintegrated@att.net

                </div>

                <div className="flex gap-[24px] justify-center">
                    <Footer></Footer>
                </div>
                </div>                
            </main>
        </div>
    )
}