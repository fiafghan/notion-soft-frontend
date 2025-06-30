import { MapPinHouse, Mail, Phone, Home, Settings, Info } from 'lucide-react';
import {
  Card,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-orange-200 to-gray-200 px-4 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <Card className="rounded-xl border-none shadow-none bg-transparent">
            <CardTitle>
              <img src="/notionsoft-logo.png" alt="NotionSoft Logo" className="w-40 mx-auto mb-4" />
            </CardTitle>
            <CardDescription className="text-center text-gray-600">
              Empowering digital transformation with innovative, secure, and scalable solutions.
            </CardDescription>
          </Card>
        </div>

        {/* Quick Links */}
        <div>
          <Card className="rounded-xl border-none shadow-none bg-transparent">
            <CardTitle className="text-lg text-center sm:text-left mb-4">Quick Links</CardTitle>
            <div className="space-y-2 text-gray-700">
              <div className="flex items-center"><Home className="text-orange-400 mr-2" /><a href="/home" className="hover:underline">Home</a></div>
              <div className="flex items-center"><Settings className="text-orange-400 mr-2" /><a href="/services" className="hover:underline">Services</a></div>
              <div className="flex items-center"><Info className="text-orange-400 mr-2" /><a href="/about-us" className="hover:underline">About Us</a></div>
              <div className="flex items-center"><Phone className="text-orange-400 mr-2" /><a href="/contact-us" className="hover:underline">Contact Us</a></div>
            </div>
          </Card>
        </div>

        {/* Contact Info */}
        <div>
          <Card className="rounded-xl border-none shadow-none bg-transparent">
            <CardTitle className="text-lg text-center sm:text-left mb-4">Contact</CardTitle>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-center"><MapPinHouse className="text-orange-400 mr-2" /><span>Shahr Naw, Kabul, AFG</span></div>
              <div className="flex items-center"><Mail className="text-orange-400 mr-2" /><span>info@notionsoft.com</span></div>
              <div className="flex items-center"><Phone className="text-orange-400 mr-2" /><span>0799769626</span></div>
            </div>
          </Card>
        </div>
      </div>
    </footer>
  );
}
