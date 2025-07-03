import React from "react";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Header from "./components/ui/header";
import Footer from "./components/ui/footer";
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { motion, useScroll, useTransform  } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const ImagesUrl = [
    "/about-us-whoWeHelp.jpg",
    "/about-us-whatWeDo.png",
    "/about-us-whyChooseUs.jpg",
  ];

  const texts = [
    "Innovate. Build. Elevate.",
    "Code Your Future Today.",
    "Crafting Solutions, Driving Success.",
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const containerRef = useRef(null);
  // Scroll progress from top (0) to bottom (1)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

      // Scale elements based on scroll position
    const scale = useTransform(scrollYProgress, [0, 0.80], [1, 0.90]);
    const opacity = useTransform(scrollYProgress, [0.70, 0.70], [1, 1]);
    const skewY = useTransform(scrollYProgress, [0, 1, 1], ["0deg", "0.2deg", "2deg"]);
    const borderRadius = useTransform(scrollYProgress, [1, 1], ["2rem", "2rem"])

  return (
   
    <div className="bg-white text-gray-900 font-sans">
      <Header />
          <motion.div
            ref={containerRef}
            style={{
              scale,
              opacity,
              borderRadius: borderRadius,
              skewY: skewY,
            }}
            className="bg-white text-gray-900 font-sans transition-all duration-500 ease-in-out overflow-hidden"
          >
      <section className="relative w-full py-16 sm:py-20 bg-gradient-to-br from-white to-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Card className="bg-transparent border-none shadow-none">
            <CardHeader className="space-y-6">
              <CardTitle className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center text-gray-800">
                Empowering Your Business with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
                  Web, Mobile, AI, Desktop
                </span>{' '}
                Applications
              </CardTitle>
              <CardDescription className="text-center max-w-3xl mx-auto text-base sm:text-lg text-gray-600">
                Innovative solutions for web, mobile, and AI applications that grow your business.
              </CardDescription>
            </CardHeader>
            <CardAction className="mt-8">
              <Carousel
                plugins={[plugin.current]}
                className="w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg"
              >
                <CarouselContent>
                  {ImagesUrl.map((url, index) => (
                    <CarouselItem key={index}>
                      <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] w-full">
                        <img
                          src={url}
                          alt={`Slide ${index + 1}`}
                          className="w-full h-full object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center">
                          <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold text-white text-center px-4">
                            {texts[index]}
                          </h2>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="bg-white text-black shadow-md hover:scale-110 transition duration-300" />
                <CarouselNext className="bg-white text-black shadow-md hover:scale-110 transition duration-300" />
              </Carousel>
            </CardAction>
          </Card>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[
          {
            title: "Software",
            desc: "Data integration for an insurance provider.",
          },
          {
            title: "Testing",
            desc: "Reliable software testing frameworks.",
          },
          {
            title: "BPM",
            desc: "Business process management solutions.",
          },
          {
            title: "Automotive",
            desc: "Automation & breach protection solutions.",
          },
          {
            title: "Retail",
            desc: "Online support for top USA brands.",
          },
          {
            title: "E-commerce",
            desc: "E-commerce portals for manufacturers.",
          },
        ].map(({ title, desc }, i) => (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
          <Card key={i} className="bg-gradient-to-br from-gray-100 to-white p-6 rounded-xl shadow hover:shadow-md transition">
            <CardTitle className="text-lg sm:text-xl font-semibold mb-2">{title}</CardTitle>
            <CardDescription className="text-sm sm:text-base text-gray-600 mb-4">{desc}</CardDescription>
            <Button variant="outline" className="bg-black text-white">Learn More</Button>
          </Card>
          </motion.div>
        ))}
      </section>

      <section className="bg-white py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Executive Notes</h2>
        </div>
        <div className="max-w-5xl mx-auto bg-gray-300 text-white rounded-3xl shadow-xl p-6 sm:p-10">
          <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0">
            <img src="/naweed.png" alt="CEO" className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-black border-1 shadow-lg shadow-black" />
            <div>
              <CardTitle className="text-lg sm:text-xl text-black">Sayed Naweed Sayedy, Founder & CEO</CardTitle>
              <CardDescription className="text-black mt-2 text-sm sm:text-base">
                "At NotionSoft, our mission goes beyond delivering technology — we create meaningful digital experiences that drive real transformation. We are not just a service provider, but a long-term partner in our clients' growth."
              </CardDescription>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[
          ["/jala.jpeg", "Jalal Bakhty", "Co-Founder"],
          ["/waheed.png", "Waheed Safi", "Co-Founder"],
          ["/imran.png", "Imran Orya", "Frontend Developer"],
          ["/fardin.jpg", "Fardin Ibrahimi", "AI Engineer"],
          ["/nesar.jpg", "Nesar Awwab", "Backend Developer"],
        ].map(([img, name, title], i) => (
          
          <Card key={i} className="flex flex-col items-center text-center bg-gray-200 p-6 rounded-xl">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.12)" }}
              whileTap={{ scale: 0.97 }}
              className="flex flex-col items-center text-center bg-gray-200 p-6 rounded-xl cursor-pointer"
            >
                <div className="relative inline-block">
            <div className="absolute inset-0 rounded-full"></div>
            <img
              src={img}
              alt={name}
              className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1
                        border-1 border-gray-600"
            />
          </div>
            <CardTitle className="text-lg sm:text-xl md:text-xl font-bold drop-shadow-md text-center text-gray-700">
              {name}
            </CardTitle>
            <CardDescription className="text-md text-gray-600">{title}</CardDescription>
            </motion.div>
          </Card>
        ))}
      </section>
      </motion.div>
      <Footer />
    </div>
    
  );
}
