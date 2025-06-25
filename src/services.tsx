import Header from './components/ui/header'
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Monitor, Cpu, Eye, Network, LayoutDashboard, Smartphone, Earth, Bot, Coins} from 'lucide-react'


function Services() {
  return (
    <div >
      <Header />
      <div className='bg-gradient-to-l from-gray-200 to-orange-100 h-screen flex items-center justify-center'>
        <div className='bg-white p-8 rounded-lg shadow-lg w-full mx-20 my-10'>
          <h1 className='text-bold text-2xl text-center'>Our Services At A Glance</h1>
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
                  <CardAction><Monitor className='text-orange-300' /></CardAction>
                </CardHeader>
              </Card>
              <Card className='mt-3 shadow-2xl shadow-gray-500 mx-5'>
                <CardHeader>
                  <CardTitle className='text-orange-300'>📱 Mobile App Development</CardTitle>
                  <CardDescription>Cross-platform apps for iOS and Android with a focus on user experience.</CardDescription>
                  <CardAction><Monitor className='text-orange-300' /></CardAction>
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
    </div>
  )
}

export default Services