import Header from "../components/header"
import Footer from "../components/footer";

export default function About(){
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_10px] w-[1260px] max-h-screen pr-[160px] gap-20 sm:p-6 ">
      <header className="h-[22px] pr-8">
       <Header currPage="about"></Header>
      </header>
      <main className="flex flex-col gap-[36px] row-start-2 justify-center items-center bg-[url('/baground.jpg')] bg-cover bg-center w-[1230px] h-[530px] py-5">

        <a className= "font-semibold hover:underline hover:underline-offset-7 hover:underline hover:underline-offset-7 hover:font-bold hover:scale-105 transition-all duration-150" 
            target="_blank"
            rel="noopener noreferrer"
            href="/about.pdf"> View Company Profile
        </a>
      </main>

    </div>
  );
}