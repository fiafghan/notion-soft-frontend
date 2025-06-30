import Header from './components/ui/header';
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import {
  Monitor,
  Cpu,
  Eye,
  Network,
  LayoutDashboard,
  Smartphone,
  Earth,
  Bot,
  Coins,
  Code,
} from 'lucide-react';

import Footer from './components/ui/footer';

function Services() {
  return (
    <div>
      <Header />
      <section className="bg-gradient-to-l from-gray-200 to-orange-100 py-12">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-orange-500 to-gray-100 bg-clip-text text-transparent">
            Our Services At A Glance
          </h1>
          <p className="text-center text-gray-600 mt-4 text-base md:text-lg max-w-2xl mx-auto">
            We deliver smart, scalable, and reliable tech solutions — from AI and desktop apps to secure networks and biometric systems.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {[{
              title: "Desktop Development",
              desc: "Custom software for business productivity, automation, and offline access.",
              icon: <Monitor className="text-orange-400 w-7 h-7" />
            }, {
              title: "AI App Development",
              desc: "Build smart apps with chatbots, computer vision, and predictive analytics.",
              icon: <Cpu className="text-orange-400 w-7 h-7" />
            }, {
              title: "Biometrics & Facial Recognition",
              desc: "Accurate, secure attendance with fingerprint and face detection systems.",
              icon: <Eye className="text-orange-400 w-7 h-7" />
            }, {
              title: "Network Troubleshooting",
              desc: "Diagnose, secure, and optimize home and enterprise network systems.",
              icon: <Network className="text-orange-400 w-7 h-7" />
            }, {
              title: "Data Dashboards",
              desc: "Interactive dashboards to visualize KPIs, metrics, and analytics in real-time.",
              icon: <LayoutDashboard className="text-orange-400 w-7 h-7" />
            }, {
              title: "Mobile App Development",
              desc: "Cross-platform apps for iOS and Android with a focus on user experience.",
              icon: <Smartphone className="text-orange-400 w-7 h-7" />
            }, {
              title: "Web Development",
              desc: "Responsive websites and web apps tailored to your brand and goals.",
              icon: <Earth className="text-orange-400 w-7 h-7" />
            }, {
              title: "Inventory & ERP Systems",
              desc: "Manage resources, sales, and reporting in real-time with custom ERP tools.",
              icon: <Coins className="text-orange-400 w-7 h-7" />
            }, {
              title: "Chatbot Integration",
              desc: "AI-driven bots for customer support, learning, and automated services.",
              icon: <Bot className="text-orange-400 w-7 h-7" />
            }].map((service, index) => (
              <Card key={index} className="rounded-2xl p-6 shadow-xl hover:shadow-2xl transition duration-300 border border-orange-100 bg-white">
                <CardHeader className="space-y-3">
                  <CardAction>{service.icon}</CardAction>
                  <CardTitle className="text-lg font-bold text-gray-800">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-500 text-sm">
                    {service.desc}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-gray-200 to-orange-100 py-14">
        {[{
          title: "Web Development",
          desc: "We design and develop elegant, scalable, and high-performance websites that elevate your brand and streamline your digital services. From responsive corporate sites to complex web portals, we deliver customized solutions with cutting-edge technologies.",
          icon: <Code className="text-orange-400 w-6 h-6" />, img: "/web_dev.jpg"
        }, {
          title: "Mobile App Development",
          desc: "We build modern, high-performing mobile apps that are visually stunning, fast, and user-friendly — helping you reach your audience anytime, anywhere. Whether you're building a customer-facing app, a digital service platform, or a business utility, we tailor the experience to your goals.",
          icon: <Smartphone className="text-orange-400 w-6 h-6" />, img: "/mob_dev.png"
        }, {
          title: "Desktop App Development",
          desc: "Our team specializes in building intuitive desktop apps that run seamlessly on Windows, macOS, and Linux. From business productivity tools to specialized industry software, we create secure, reliable, and high-performing solutions.",
          icon: <Monitor className="text-orange-400 w-6 h-6" />, img: "/desktop_dev.jpg"
        }].map((item, i) => (
          <div key={i} className={`grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 px-6 md:px-20 py-10 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            <img
              src={item.img}
              alt={item.title}
              className="w-full max-w-lg rounded-xl shadow-2xl shadow-gray-700 mx-auto"
            />
            <Card className="bg-transparent shadow-none border-none">
              <CardHeader className="space-y-4">
                <CardAction>{item.icon}</CardAction>
                <CardTitle className="text-2xl md:text-4xl font-bold text-orange-500">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-base md:text-lg">
                  {item.desc}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        ))}
        <Footer />
      </section>
    </div>
  );
}

export default Services;
