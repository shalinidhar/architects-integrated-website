import Link from "next/link"
import Header from "../components/header"
import Footer from "../components/footer"
import Projects from "../components/projects"

export default function Portfolio(){
    return(
        <div className="font-sans grid grid-rows-[20px_1fr_10px] w-[1260px] max-h-screen pr-[160px] gap-20 sm:p-6 ">
            <header className="h-[22px] pr-8">
                <Header currPage="portfolio"></Header>
            </header>
            <main className="flex flex-col row-start-2 justify-center items-center bg-[url('/baground.jpg')] bg-cover bg-center w-[1230px] h-[530px] py-5">
                
                <Projects></Projects>
                <a className= "font-medium flex justify-center text-[#630f11] hover:underline hover:underline-offset-7 hover:font-bold hover:scale-105 transition-all duration-150" 
                target="_blank"
                rel="noopener noreferrer"
                href="/ai_portfolio.pdf"> View full portfolio
                </a>
                

                <div className="flex gap-[24px] justify-center pt-13">
                    <Footer></Footer>
                </div>
            </main>
        </div>
    )
}