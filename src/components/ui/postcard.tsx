import { Button } from "@/components/ui/button";
import {Book} from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Post } from "@/types/types";


function PostCard({ image, title, description, author, date }:Post) {
  return (
    <Card className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col mb-5">
      <img
        src={image}
        alt={title}
        className="w-full h-48 sm:h-56 object-cover rounded-t-lg"
      />

      <CardHeader className="px-6 pt-6 flex-grow">
        <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 mb-3 leading-tight">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-600 text-sm sm:text-base">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="px-6 py-3 border-t border-gray-100 flex justify-between items-center text-gray-700 text-sm sm:text-base">
        <p>
          Author: <span className="font-semibold">{author}</span>
        </p>

        <CardAction>
          <Button
            className="flex items-center justify-center px-5 py-2 text-sm sm:text-base rounded-md bg-black text-white font-semibold shadow-md hover:brightness-110 transition focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-1"
            aria-label={`Read article: ${title}`}
          >
            <Book className="w-5 h-5 mr-2" />
            Read
          </Button>
        </CardAction>
      </CardContent>

      <CardFooter className="px-6 py-3 border-t border-gray-100 text-gray-400 text-xs sm:text-sm text-right italic">
        <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
      </CardFooter>
    </Card>
  );
}
export default PostCard;