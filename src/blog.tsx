import Footer from "./components/ui/footer";
import Header from "./components/ui/header";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {Button} from "@/components/ui/button";
import PostCard from "./components/ui/postcard";
import { motion } from "framer-motion";

function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Search Bar */}
        <form
          role="search"
          className="max-w-lg mx-auto mb-12 flex rounded-md shadow-sm overflow-hidden border border-orange-300"
          onSubmit={(e) => e.preventDefault()}
          aria-label="Search blog posts"
        >
          <Input
            type="search"
            placeholder="Search Posts..."
            aria-label="Search Posts"
            className="flex-grow rounded-none focus:ring-orange-500 focus:border-orange-500 border-r-0"
          />
          <Button
            type="submit"
            variant="outline"
            className="bg-white rounded-none rounded-r-md border-l-0 border-orange-300 hover:bg-orange-50 focus:ring-2 focus:ring-orange-500 focus:ring-offset-0"
            aria-label="Submit Search"
          >
            <Search className="w-5 h-5 text-orange-600" />
          </Button>
        </form>

        {/* Heading */}
        <header className="text-center mb-14">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Posts</h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Explore our latest articles and insights.
          </p>
        </header>
        <motion.div
  initial={{ opacity: 0, y: 20, scale: 0.95 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
>
        <PostCard 
         image="/soft-eng.png"
         title = "me"
          description = "description here..."
          author = "Fardin IBrahimi"
          date = "1/1/2025"
        />

        </motion.div>

        {/* Posts Grid */}

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Blog;
