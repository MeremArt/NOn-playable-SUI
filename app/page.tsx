/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { TextCarousel } from "./components/TextCarousel";
import { useState } from "react";
import Navigation from "./components/Navigation";
import { ImageCarousel } from "./components/ImageCarousel";
import Image from "next/image";

export default function Page() {
  const [copied, setCopied] = useState(false);
  const address = "0xd9773016f31a1216fb0a1e0b0937fc";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
  const images = [
    "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1734693155/wbe33_czxjyc.png",
    "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1734693157/web333_lxmprn.png",
    "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1734693154/web3_edjekd.png",
    "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1734693156/websui_eygupm.png",
    "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1734696064/upsui_yiigfr.png",
    "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1734693155/wbe33_czxjyc.png",
  ];
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <main className="w-full min-h-screen bg-[#53B0FF] overflow-x-hidden">
      <Navigation scrollToSection={scrollToSection} />
      {/* Navigation */}
      {/* https://t.me/nonplayablesuisportal */}
      <div className="h-1 md:h-[2px] bg-[#333333] w-full" />

      <div className="mt-10">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-8 md:mb-12">
          <h1 className="text-white font-fredoka font-extrabold text-4xl md:text-[56px] leading-tight md:leading-[72px] mb-4 text-center drop-shadow-lg">
            NPSUI
          </h1>
          <p className="text-white font-montserrat font-medium text-lg md:text-2xl leading-relaxed md:leading-[38.4px] text-center max-w-[886px] px-4">
            NPC&apos;s are bridging from Sol to Sui and becoming{" "}
            <span className="font-fredoka font-bold"> $NPSUI</span> Degen&apos;s
            unite. This is no pump and dump, this is the next greatest meme coin
            on the market
          </p>
        </div>
        <center className="mb-10">
          <button className="flex justify-center font-fredoka items-center bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all drop-shadow-lg ">
            GET STARTED
          </button>
        </center>

        {/* Copy Section */}
        <center className="mb-10">
          <div className="flex w-[440px] items-center gap-2 bg-white rounded-full px-4 py-2">
            <span className="text-black font-mono">{address}</span>
            <button
              onClick={handleCopy}
              className="bg-black text-white px-4 py-1 rounded-full hover:bg-opacity-80 transition-all"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </center>

        <div className="relative mb-10">
          {/* Top line */}
          <div className="h-1 md:h-2 bg-[#333333] w-full" />

          <TextCarousel text="$NPSUI" />

          {/* Bottom line */}
          <div className="h-2 md:h-2 bg-[#333333] w-full" />

          {/* Image positioned on top */}
          <div className="hidden md:block absolute -top-[240px] left-[1200px]">
            <Image
              src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1734701445/WhatsApp_Image_2024-12-18_at_20.54.04_2_feschi.png"
              width={400}
              height={400}
              alt="Decorative image"
              className="object-contain"
            />
          </div>
        </div>

        {/* Social Links */}
        <div
          id="links"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-24 mb-12  max-w-[1440px] py-4 md:py-8mx-auto  px-4 md:px-6 lg:px-8"
        >
          {[
            {
              text: "TELEGRAM",
              color: "#4EA1FF",
              image: "/v1734693156/wbe333_oz7sew.png",
              url: "https://t.me/nonplayablesuis",
            },
            {
              text: "BUY",
              color: "#4EFFE6",
              image: "/v1734696064/upsui_yiigfr.png",
              url: "https://hop.ag/swap",
            },
            {
              text: "TWITTER",
              color: "#A1FF4E",
              image: "/v1734693157/web333_lxmprn.png",
              url: " https://x.com/NonPlayableSui",
            },
          ].map((item) => (
            <div
              key={item.text}
              onClick={() => window.open(item.url, "_blank")}
              className="bg-white p-6 md:p-12 rounded-xl flex flex-col items-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 transform cursor-pointer"
              style={{
                border: `4px solid ${item.color}`,
              }}
            >
              <div
                className="w-32 h-32 md:w-[164px] md:h-[164px] rounded-full mb-6 md:mb-10 overflow-hidden flex items-center justify-center transition-transform duration-300 hover:scale-105"
                style={{
                  border: `5px solid ${item.color}`,
                }}
              >
                <Image
                  src={`https://res.cloudinary.com/dtfvdjvyr${item.image}`}
                  width={164}
                  height={164}
                  alt={item.text}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="font-fredoka font-semibold text-xl md:text-2xl leading-tight md:leading-[38.4px] text-[#212121]">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        {/* Description */}
        <p
          id="style"
          className="text-white font-fredoka font-semibold text-lg md:text-2xl leading-relaxed md:leading-[38.4px] text-center max-w-[937px] mx-auto mb-12 px-4"
        >
          $NPSUI is world-famous and on the road a lot. Take a look at our media
          section and get a feel for his lifestyle. From brokie to
          multi-millionaire thanks to SUI-CHAIN!
        </p>

        {/* Image Carousel */}
        <div className="mb-20">
          <ImageCarousel images={images} />
        </div>

        {/* How to Buy Section */}
        <div
          id="how-to-buy"
          className="flex justify-center w-full px-4 mb-12 md:mb-20"
        >
          <div className="flex w-full md:w-[1200px] bg-white rounded-[25px] md:rounded-[50px] p-6 md:p-14 relative justify-center items-center shadow-2xl mx-auto">
            {/* Inner border div */}
            <div className="absolute inset-4 border-2 border-[#53B0FF] rounded-[25px] md:rounded-[50px]" />

            {/* Content container */}
            <div className="flex flex-col md:flex-row w-full justify-between items-center relative z-10 px-4 md:px-8 gap-8">
              <div className="w-full md:w-1/2">
                <div className="flex-row justify-center items-start">
                  <h2 className="text-[#212121] font-fredoka font-bold text-4xl md:text-[66px] leading-tight md:leading-[72px] mb-6 md:mb-10">
                    HOW TO BUY
                  </h2>
                  <div className="space-y-4 md:space-y-6">
                    <div>
                      <h3 className="text-[#53B0FF] font-fredoka font-bold text-xl md:text-2xl leading-tight md:leading-[34px] mb-2 md:mb-3">
                        SET UP YOUR WALLET
                      </h3>
                      <p className="text-[#212121] font-fredoka font-semibold text-lg md:text-xl leading-tight md:leading-[30px]">
                        Download the SUIS wallet and create wallet
                      </p>
                    </div>
                    <h3 className="text-[#53B0FF] font-fredoka font-bold text-xl md:text-2xl leading-tight md:leading-[34px]">
                      GET SOME SUI
                    </h3>
                    <h3 className="text-[#53B0FF] font-fredoka font-bold text-xl md:text-2xl leading-tight md:leading-[34px]">
                      CONVERT SUI TO $NPSUI
                    </h3>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 flex justify-center">
                <Image
                  src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1734693195/WhatsApp_Image_2024-12-18_at_20.54.03_2_2_fqa8di.png"
                  width={500}
                  height={500}
                  alt="Chil guy"
                  className="object-contain w-full md:w-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Text Carousel Banner */}
        <div className="mb-16 md:mb-32 relative">
          <div className=" transform -rotate-[3deg]">
            <div className="h-1 md:h-2 bg-[#333333]  w-full" />
            <TextCarousel text="$NPSUI" />
            <div className="h-1 md:h-2 bg-[#333333]  w-full" />
          </div>
        </div>

        {/* Footer */}
        <footer
          id="footer"
          className="bg-white py-4 md:py-5 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 mt-16 md:mt-32"
        >
          <img
            src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1734725124/WhatsApp_Image_2024-12-18_at_20.54.03_3_1_wv4kjt.png"
            alt="Logo"
            className="w-[48px] h-[64px] md:w-[58px] md:h-[74px]"
          />
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <span className="text-[#53B0FF] font-medium text-sm md:text-base leading-5 text-center md:text-left">
              © 2024, NPSUI | All Rights Reserved
            </span>
            <div className="flex gap-4">
              {["twitter", "instagram", "linkedin"].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#53B0FF] w-6 h-6"
                >
                  <span className="sr-only">{social}</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
