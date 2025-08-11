import { formatDate } from "@/lib/utils";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  //destructure
  // const {} = post
  // const {image} = post
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <li className="p-5 space-y-4">
        {/* Top section: Date & Views */}
        <div className="flex justify-between items-center text-gray-500 text-sm">
          <p>{formatDate(post._createdAt)}</p>
          <div className="flex items-center gap-1">
            <span className="font-medium">{post.views}</span>
            <span className="text-xs">views</span>
          </div>
        </div>

        {/* Author & Title */}
        <div className="flex items-center gap-3">
          <Link
            href={`/user/${post.author?._id}`}
            className="flex items-center gap-2"
          >
            <Image
              src={
                "https://tse1.mm.bing.net/th/id/OIP.Qz0JOTRkIOXLusfOAno5qQHaFj?rs=1&pid=ImgDetMain&o=7&rm=3"
              }
              alt="Startup author avatar"
              className="rounded-full border border-gray-200"
              height={48}
              width={48}
            />
            <p className="font-medium text-gray-700 hover:text-purple-600 transition-colors">
              {post.author?.name}
            </p>
          </Link>
        </div>

        {/* Title */}
        <Link
          href={`/startup/${post._id}`}
          className="block hover:text-purple-600 transition-colors"
        >
          <h2 className="text-lg font-semibold">{post?.title}</h2>
        </Link>

        {/* Description & Image */}
        <Link href={`/startup/${post._id}`} className="block space-y-3">
          <p className="text-gray-600">{post.description}</p>
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="rounded-lg w-full h-48 object-cover"
            />
          )}
        </Link>

        {/* Category & Details button */}
        <div className="flex justify-between items-center">
          <Link
            href={`/?query=${post.category.toLowerCase()}`}
            className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm hover:bg-purple-200 transition"
          >
            {post.category}
          </Link>
          <Link
            href={`/startup/${post._id}`}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700 transition"
          >
            Details
          </Link>
        </div>
      </li>
    </div>
  );
};

export default StartupCard;
