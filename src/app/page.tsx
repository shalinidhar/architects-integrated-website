'use client'
import Header from "./components/header";
import React from 'react'
import Gallery from "./components/gallery";
import Footer from "./components/footer";
export default function Home() {

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_10px] w-[1260px] max-h-screen pr-[160px] gap-20 sm:p-6 ">
      <header className="h-[22px] pr-8">
       <Header currPage="home"></Header>
      </header>
      <main className="flex flex-col gap-[36px] row-start-2 justify-center items-center bg-[url('/baground.jpg')] bg-cover bg-center w-[1230px] h-[530px] py-5">
        <Gallery></Gallery>
        <div className="flex gap-[24px] justify-center pt-10">
          <Footer></Footer>
        </div>
      </main>

    </div>
  );
}
