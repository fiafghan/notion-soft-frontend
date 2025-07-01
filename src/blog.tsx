import Footer from "./components/ui/footer"
import Header from "./components/ui/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {Search} from "lucide-react"

function Blog() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 items-center mt-10">
            <div className="grid grid-cols-2 items-center ml-100 mb-10">
          <Input type="email" placeholder="Search Posts..."
                className="
                  border-1 border-orange-200 rounded-r-none
                "
                aria-label="Search Posts"
              />
          <Button type="submit" variant="outline" className="w-20 ml-none bg-white rounded-l-none">
            <Search />
          </Button>
        </div>
        <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
        <p className="text-lg text-center mb-12">Explore our latest articles and insights.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Blog Post Card */}
          {[1, 2, 3].map((post) => (
            <div key={post} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-xl font-semibold mb-2">Blog Post Title {post}</h2>
              <p className="text-gray-600 mb-4">This is a brief description of the blog post. It gives an overview of the content.</p>
              <a href="#" className="text-blue-500 hover:underline">Read more</a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Blog