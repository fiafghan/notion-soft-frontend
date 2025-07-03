import Header from './components/ui/header';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Info,
  Settings,
  HeartHandshake,
  MousePointerClick,
  User,
  Mail,
  MessageCircle,
} from 'lucide-react';
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { Button } from './components/ui/button';
import Footer from './components/ui/footer';
import { Input } from './components/ui/input';
import { Textarea } from '@/components/ui/textarea';

function AboutUs() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Example transforms:
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["0px", "60px"]);
  return (
    <>
      <Header />
      <motion.div
        ref={containerRef}
        style={{ scale, opacity, y }}
        className="grid grid-cols-1 transition-transform duration-500"
      >

      <section className="text-center py-10 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-500 to-orange-200 bg-clip-text text-transparent">
          About Us
        </h1>
        <h2 className="mt-3 text-md md:text-lg text-gray-500 max-w-2xl mx-auto">
          Our strength is in our unparalleled commitment to care for your business and its changing needs.
        </h2>
      </section>

      {[{
        title: "Who We Are?",
        description: `NotionSoft is a leading IT solution provider delivering innovative, secure, and scalable technology \nsolutions across various industries. We specialize in AI, mobile and desktop app development, biometrics, network \ntroubleshooting, and more, helping businesses transform digitally with ease and efficiency.`,
        icon: <Info className='text-orange-400 w-6 h-6' />,
        image: "/who-we-are.jpeg",
      }, {
        title: "What We Do?",
        description: `We build scalable digital technology solutions to encourage sustainable business growth.`,
        icon: <Settings className='text-orange-400 w-6 h-6' />,
        image: "/about-us-whatWeDo.png",
      }, {
        title: "Who We Help?",
        description: `We help customers to adopt and migrate to new technologies, so businesses can modernize \nthe way they operate and create unparalleled customer experiences.`,
        icon: <HeartHandshake className='text-orange-400 w-6 h-6' />,
        image: "/about-us-whoWeHelp.jpg",
      }, {
        title: "Why Choose Us?",
        description: `We are an innovative technology and digital partner. We endeavor to continue to inspire, transform, \nand create synergies that shape the digital world and ensure shared prosperity for all.`,
        icon: <MousePointerClick className='text-orange-400 w-6 h-6' />,
        image: "/about-us-whyChooseUs.jpg",
      }].map(({ title, description, icon, image }, index) => (
        <section key={index} className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 md:px-20 py-10">
          <Card className="bg-white/80 shadow-xl p-6 rounded-2xl">
            <CardHeader className="space-y-4">
              <CardAction>{icon}</CardAction>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-200 bg-clip-text text-transparent">
                {title}
              </CardTitle>
              <CardDescription className="text-gray-600 whitespace-pre-line">
                {description}
              </CardDescription>
            </CardHeader>
          </Card>
          <div className="text-center">
            <img
              src={image}
              alt={title}
              className="w-full max-w-md rounded-xl shadow-2xl shadow-gray-700 border-[3px] border-orange-400 mx-auto"
            />
          </div>
        </section>
      ))}

      {/* Core Values */}
      <section className="text-center mt-16 px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-orange-400">Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {["Integrity — Fair, transparent, and ethical conduct",
            "Innovation — Sustainable growth through creativity",
            "Empowerment — Turning challenges into opportunities",
            "Diversity — Embracing all cultures and perspectives",
            "Sustainability — Digital ecosystem for the future",
            "Shared Prosperity — Growth for all stakeholders"].map((value, idx) => (
            <Card key={idx} className='bg-gradient-to-r from-gray-300 to-orange-300 text-gray-800 p-6 rounded-xl shadow-md'>
              {value}
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="mt-20 mb-20 px-6">
        <Card className="max-w-xl mx-auto rounded-3xl border border-orange-100 bg-white/40 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all">
          <CardContent className="p-10 space-y-8">
            <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text text-center">
              Contact Us
            </h2>

            <div className="space-y-6">
              {[{
                icon: <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-500" size={22} />,
                type: "text",
                placeholder: "Your Name",
              }, {
                icon: <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-500" size={22} />,
                type: "email",
                placeholder: "Your Email",
              }].map((input, index) => (
                <div className="relative" key={index}>
                  {input.icon}
                  <Input
                    type={input.type}
                    placeholder={input.placeholder}
                    className="pl-12 py-3 rounded-2xl border border-orange-200 bg-white/70 shadow-inner focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all w-full"
                  />
                </div>
              ))}

              <div className="relative">
                <MessageCircle className="absolute left-4 top-4 text-orange-500" size={22} />
                <Textarea
                  placeholder="Your Message"
                  className="pl-12 pt-3 pb-3 rounded-2xl border border-orange-200 bg-white/70 shadow-inner resize-none focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all w-full"
                  rows={5}
                />
              </div>
            </div>

            <Button className="w-full py-3 font-semibold text-white rounded-2xl bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 hover:brightness-110 hover:scale-[1.01] transition-transform duration-300">
              Send Message
            </Button>
          </CardContent>
        </Card>
      </section>
    </motion.div>
      <Footer />
      </>
  );
}

export default AboutUs;
