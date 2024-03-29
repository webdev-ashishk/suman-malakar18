"use client";
import Image from "next/image";
import Link from "next/link";
import LatestPost from "../app/latestPost/page";
import Meta from "./Meta";

const Body = () => {
  return (
    <main>
      {/* header tags */}
      <Meta
        title="suman"
        site_name="suman malakar 18"
        url="https://suman-malakar18.vercel.app"
        description="This website organized the content of creator and also helped student to follow the content in unique place"
        image="https://www.springboard.com/blog/wp-content/uploads/2022/09/programmng-language.jpg"
      />
      {/* hero section  */}
      <div className="flex justify-center items-center w-full h-96 relative bg-gradient-to-tl from-purple-900 to green-700 -z-10 ">
        <Image
          src="/hero22.gif"
          width={600}
          height={300}
          alt="post-image"
          className="h-full w-full object-cover absolute mix-blend-overlay"
        ></Image>
        <div className="font-bold p-2 w-full flex flex-col justify-center items-center">
          <h1 className="text-white md:text-5xl sm:text-2xl">
            Welcome to Awesome place
          </h1>
          <h2 className="text-blue-500 md:text-3xl sm:text-1xl">
            Experience is the name everyone gives to their mistakes
          </h2>
        </div>
      </div>
      {/* important links  */}
      <div className="">
        <h1 className="text-3xl font-bold m-5">Important Links 👇 </h1>
        <ul className="flex justify-center gap-8 flex-wrap sm:gap-1">
          <li className="m-2">
            <button
              type="button"
              class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg px-5 py-2.5 text-center me-2 mb-2"
            >
              <Link href={"/courses"} className="sm:text-1xl md:text-3xl">
                Course Video Link
              </Link>
            </button>
          </li>
          <li className="m-2">
            <button
              type="button"
              class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg px-5 py-2.5 text-center me-2 mb-2"
            >
              <Link href={"/projects"} className="sm:text-1xl md:text-3xl">
                Projects Video Link
              </Link>
            </button>
          </li>
        </ul>
      </div>
      {/* latest post  */}
      <div>
        <h1 className="text-3xl font-bold m-5">Latest Posts 😍</h1>
        <div className="flex flex-wrap m-1 gap-3 justify-center items-center">
          <LatestPost />
        </div>
      </div>
    </main>
  );
};

export default Body;
