import Head from "next/head";
import { Tab } from "@headlessui/react";
import {
  AngularFill,
  Download,
  Envelope,
  HtmlFill,
  JavascriptFill,
  LinkOut,
  MobileDevice,
  ReactFill,
  SassFill,
} from "akar-icons";
import Porfolio from "@/components/Porfolio";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const skills = [
  {
    name: "react",
    icon: <ReactFill size={18} />,
  },
  {
    name: "Angular",
    icon: <AngularFill size={18} />,
  },
  {
    name: "Ionic Angular",
    icon: <MobileDevice size={18} />,
  },
  {
    name: "javascript",
    icon: <JavascriptFill size={18} />,
  },
  {
    name: "sass & scss",
    icon: <SassFill size={18} />,
  },
  {
    name: "Html",
    icon: <HtmlFill size={18} />,
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Jeet Kacha | Frontend Developer</title>
        <meta
          property="title"
          content="Jeet Kacha | Frontend Developer"
          key="title"
        />
        <meta
          property="description"
          content="I am a frontend developer having 4+ years experience in creating user interfaces that are not only attractive but also functional and accessible, and I also enjoy giving users the best and most seamless experience possible."
          key="description"
        />
      </Head>

      <main className="container mx-auto ">
        <header className="top-nav">
          <div className="bg-[#08090ae0] text-white px-8 sm:px-10 py-3">
            <div className="flex justify-between items-center">
              <h1 className="font-mono text-lg">Jeet Kacha.</h1>
              <a href="mailto:jeetkacha13@gmail.com">
                <Envelope size={22} />
              </a>
            </div>
          </div>
        </header>

        <div className="w-full sm:px-0">
          <div className="grid grid-cols-12 gap-3 mt-3">
            <div className="col-span-12 sm:col-span-9">
              <div className="bg-white p-8 sm:p-10 min-h-[500px] flex flex-col  justify-center">
                <p className="italic"> Hello 👋.</p>
                <h1 className="text-5xl font-bold font-mono mt-2 mb-3">
                  I am Jeet.
                </h1>
                <h2 className="text-3xl text-[#3C486B] font-bold font-mono mb-5">
                  A Frontend Developer.
                </h2>
                <h3 className="text-lg text-[#3C486B] opacity-70">
                  I am a frontend developer with over 4+ years of dedicated
                  experience, committed to creating visually appealing, highly
                  functional, and accessible user interfaces. My passion lies in
                  delivering exceptional user experiences by seamlessly merging
                  aesthetics with flawless functionality.
                </h3>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-3">
              <div className="bg-white sm:min-h-[500px] flex flex-col justify-between">
                <div className="p-4">
                  <h4 className="font-bold">My Skills</h4>
                  <h6 className="text-sm opacity-40">4+ Years of experience</h6>
                </div>
                <div className="p-5">
                  {skills.map((e) => {
                    return (
                      <div
                        key={e.name}
                        className="flex items-center border-b border-dotted pb-2 border-gray-400 mb-3"
                      >
                        <span className="opacity-50 text-blue-900">
                          {e.icon}
                        </span>
                        <span className="ml-4 text-sm capitalize">
                          {e.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="p-4">
                  <a
                    href="https://drive.google.com/file/d/1hKJcMPmPEaJXLVKP4qJl8LOLhdJHPaOj/view"
                    target="_blank"
                    type="button"
                    className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-gray-900-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 flex items-center w-full justify-center"
                  >
                    <span className="mr-2">Download Resume</span>
                    <Download size={15} />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6">
              <div className="bg-white  flex flex-col">
                <div className="p-4">
                  <h4 className="font-bold">Contact</h4>
                  <h6 className="text-sm opacity-40">
                    {"Let's Get in touch :)"}
                  </h6>
                </div>

                <div className="p-4">
                  <a
                    href="mailto:jeetkacha13@gmail.com"
                    type="button"
                    className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-gray-900-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 flex items-center w-full justify-center"
                  >
                    <span className="mr-2">Send me a message</span>
                    <Envelope size={15} />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6">
              <div className="bg-white  flex flex-col">
                <div className="p-4">
                  <h4 className="font-bold">Social Profiles</h4>
                  <h6 className="text-sm opacity-40">
                    {"Let's get connected."}
                  </h6>
                </div>
                <div className="flex p-4">
                  <a
                    href="https://www.linkedin.com/in/jeet-kacha/"
                    target="_blank"
                    type="button"
                    className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-gray-900-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 flex items-center w-full justify-center"
                  >
                    <span className="mr-2">Linkedin</span>
                    <LinkOut size={15} />
                  </a>
                  <a
                    href="https://github.com/jeetkacha13"
                    target="_blank"
                    type="button"
                    className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-gray-900-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 flex items-center w-full justify-center"
                  >
                    <span className="mr-2">Github</span>
                    <LinkOut size={15} />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-span-12">
              <Porfolio />
            </div>

            <div className="col-span-12">
              <p className="text-sm text-gray-400 p-10 sm:p-5"></p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
