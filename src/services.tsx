import Header from './components/ui/header'
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Monitor, Cpu, Eye, Network, LayoutDashboard, Smartphone, Earth, Bot, Coins, Code} from 'lucide-react'
import Footer from './components/ui/footer'


function Services() {
  return (
    <div>
      <Header />
      <div className='bg-gradient-to-l from-gray-200 to-orange-100 h-screen flex items-center justify-center'>
        <div className='bg-white p-5 rounded-lg shadow-lg w-full mx-20'>
          <h1 className='text-bold text-4xl text-center bg-gradient-to-r from-orange-500 to-gray-100 bg-clip-text text-transparent'>Our Services At A Glance</h1>
          <h1 className='text-bold text-1xl text-center text-gray-500'>We deliver smart, scalable, and reliable tech solutions — from AI and 
            desktop apps to secure networks and biometric systems.</h1>
            <div className='grid grid-cols-3'>
              <Card className='mt-3 shadow-2xl shadow-gray-500 mx-5'>
                <CardHeader>
                  <CardTitle className='text-orange-300'>🖥 Desktop Development</CardTitle>
                  <CardDescription>Custom software for business productivity, automation, and offline access.</CardDescription>
                  <CardAction><Monitor className='text-orange-300' /></CardAction>
                </CardHeader>
              </Card>
              <Card className='mt-3 shadow-2xl shadow-gray-500 mx-5'>
                <CardHeader>
                  <CardTitle className='text-orange-300'>🧠 AI App Development</CardTitle>
                  <CardDescription>Build smart apps with chatbots, computer vision, and predictive analytics.</CardDescription>
                  <CardAction><Cpu className='text-orange-300' /></CardAction>
                </CardHeader>
              </Card>
              <Card className='mt-3 shadow-2xl shadow-gray-500 mx-5'>
                <CardHeader>
                  <CardTitle className='text-orange-300'>🔐 Biometrics & Facial Recognition</CardTitle>
                  <CardDescription>Accurate, secure attendance with fingerprint and face detection systems.</CardDescription>
                  <CardAction><Eye className='text-orange-300' /></CardAction>
                </CardHeader>
              </Card>
                <Card className='mt-3 shadow-2xl shadow-gray-500 mx-5'>
                <CardHeader>
                  <CardTitle className='text-orange-300'>📶 Network Troubleshooting</CardTitle>
                  <CardDescription>Diagnose, secure, and optimize home and enterprise network systems.</CardDescription>
                  <CardAction><Network className='text-orange-300' /></CardAction>
                </CardHeader>
              </Card>
              <Card className='mt-3 shadow-2xl shadow-gray-500 mx-5'>
                <CardHeader>
                  <CardTitle className='text-orange-300'>📊 Data Dashboards</CardTitle>
                  <CardDescription>Interactive dashboards to visualize KPIs, metrics, and analytics in real-time.</CardDescription>
                  <CardAction><LayoutDashboard className='text-orange-300' /></CardAction>
                </CardHeader>
              </Card>
              <Card className='mt-3 shadow-2xl shadow-gray-500 mx-5'>
                <CardHeader>
                  <CardTitle className='text-orange-300'>📱 Mobile App Development</CardTitle>
                  <CardDescription>Cross-platform apps for iOS and Android with a focus on user experience.</CardDescription>
                  <CardAction><Smartphone className='text-orange-300' /></CardAction>
                </CardHeader>
              </Card>
                <Card className='mt-3 shadow-2xl shadow-gray-500 mx-5'>
                <CardHeader>
                  <CardTitle className='text-orange-300'>🌐 Web Development</CardTitle>
                  <CardDescription>Responsive websites and web apps tailored to your brand and goals.</CardDescription>
                  <CardAction><Earth className='text-orange-300' /></CardAction>
                </CardHeader>
              </Card>
              <Card className='mt-3 shadow-2xl shadow-gray-500 mx-5'>
                <CardHeader>
                  <CardTitle className='text-orange-300'>🧾 Inventory & ERP Systems</CardTitle>
                  <CardDescription>Manage resources, sales, and reporting in real-time with custom ERP tools.</CardDescription>
                  <CardAction><Coins className='text-orange-300' /></CardAction>
                </CardHeader>
              </Card>
              <Card className='mt-3 shadow-2xl shadow-gray-500 mx-5'>
                <CardHeader>
                  <CardTitle className='text-orange-300'>💬 Chatbot Integration</CardTitle>
                  <CardDescription>AI-driven bots for customer support, learning, and automated services.</CardDescription>
                  <CardAction><Bot className='text-orange-300' /></CardAction>
                </CardHeader>
              </Card>
            </div>
        </div>
      </div>
      <div className='grid grid-cols-1 bg-gradient-to-r from-gray-200 to-orange-100'>
              <div className='grid grid-cols-2 h-screen items-center justify-center'>
                <img src = "/web_dev.jpg" className='ml-50 mt-5 rounded-md w-2/3 shadow-2xl shadow-gray-700'></img>
                <Card className='mr-50 mt-5 shadow-0 border-none bg-transparent shadow-none'>
                    <CardHeader>
                      <CardTitle className='text-5xl text-orange-300'>Web Development</CardTitle>
                      <CardDescription className='text-xl'>We design and develop elegant, scalable, and high-performance websites 
                        that elevate your brand and streamline 
                        your digital services. From responsive corporate sites to 
                        complex web portals, we deliver customized 
                        solutions with cutting-edge technologies.</CardDescription>
                      <CardAction><Code className='text-orange-300' /></CardAction>
                    </CardHeader>
                </Card>
              </div>
              <div className='grid grid-cols-2 h-screen items-center justify-center'>
                <img src = "/mob_dev.png" className='ml-50 mt-5 rounded-md w-2/3 shadow-2xl shadow-gray-700'></img>
                <Card className='mr-50 mt-5 shadow-0 border-none bg-transparent shadow-none'>
                    <CardHeader>
                      <CardTitle className='text-5xl text-orange-300'>Mobile App Development</CardTitle>
                      <CardDescription className='text-xl'>We build modern, high-performing mobile apps that are visually stunning, fast, and user-friendly — 
                        helping you reach your audience anytime, anywhere. 
                        Whether you're building a customer-facing app, a digital service platform, 
                        or a business utility, we tailor the experience to your goals.</CardDescription>
                      <CardAction><Smartphone className='text-orange-300' /></CardAction>
                    </CardHeader>
                </Card>
              </div>
              <div className='grid grid-cols-2 h-screen items-center justify-center'>
                <img src = "/desktop_dev.jpg" className='ml-50 mt-5 rounded-md w-2/3 shadow-2xl shadow-gray-700'></img>
                <Card className='mr-50 mt-5 shadow-0 border-none bg-transparent shadow-none'>
                    <CardHeader>
                      <CardTitle className='text-5xl text-orange-300 '>Desktop App Development</CardTitle>
                      <CardDescription className='text-xl'>Our team specializes in building intuitive desktop 
                        apps that run seamlessly on Windows, macOS, and Linux. 
                        From business productivity tools to specialized industry software, w
                        We create secure, reliable, and high-performing solutions.</CardDescription>
                      <CardAction><Monitor className='text-orange-300' /></CardAction>

                    </CardHeader>
                </Card>
              </div>
              <Footer />
            </div>
    </div>
  )
}

export default Services