import { LinkOut } from "akar-icons";
import React from "react";
import prsImage from "../../public/images/prs-dairy.png";
import dmsImage from "../../public/images/dms.png";
import dzoneImage from "../../public/images/dzone.png";
import sarvaImage from "../../public/images/sarva.png";
import tellaImage from "../../public/images/tella.png";
import Image from "next/image";

function Porfolio() {
  const projects = [
    {
      title: "DMS",
      image: dmsImage,
      description:
        "I am currently engaged in the development of a cutting-edge project called DMS. This project encompasses a comprehensive range of features, such as production management, invoicing, user administration, inventory management, return handling, report generation, and numerous other functionalities.",
      tech: ["React", "Mantine UI", "React Query"],
      link: "https://dev-dms.kingwizard.in/",
    },
    {
      title: "PRS Dairy",
      image: prsImage,
      description:
        "PRS Dairy ERP is a tailor-made ERP software, This software seamlessly integrates all essential functionalities related to the supply chain and billing processes. As part of my contribution, I have developed the frontend components for both the web application and mobile application",
      tech: ["Angular", "Ionic", "Cordova"],
      link: "https://www.dev-app.prsdairy.in/",
    },
    {
      title: "Dzone22",
      image: dzoneImage,
      description:
        "I have developed the frontend for Dzone22, an e-commerce store located in Dindigul, Tamil Nadu. This includes the user website, vendor admin panel, and delivery application, all created based on the provided design. I have also used Cordova to generate Android Application from the existing code. ",
      tech: ["React", "Ant Design", "Tailwind", "Cordova"],
      link: "https://www.dzone22.com/",
    },
    {
      title: "Sarva Mobile Application",
      image: sarvaImage,
      description:
        "I have successfully developed the frontend of Sarva, a free on-demand service ordering app. Utilizing Ionic Angular, I created a simple and efficient platform for hiring reliable local service providers across various facilities. Additionally, I integrated push notification functionality using the onesignal SDK.",

      tech: ["Ionic", "Angular", "OneSignal"],
      link: "https://play.google.com/store/apps/details?id=com.abi.sarva",
    },
    {
      title: "Tella E-Learning",
      image: tellaImage,
      description:
        "I have designed and developed e-learning website for Tella E-Learning App in NEXT.Js, Which is server side rendered website. I have also integrated Zoom SDK into the website so that students can join live classes from website itself.",

      tech: ["NextJS", "Zoom SDK", "React"],
      link: "https://www.tellaclasses.com/",
    },
  ];

  return (
    <div className="bg-white ">
      <div className="p-4">
        <h4 className="font-bold">Prortfolio</h4>
        <h6 className="text-sm opacity-40 capitalize">
          {"Have a look at Projects Done By Me."}
        </h6>
      </div>
      <div className="p-4">
        <div class="grid grid-cols-12 sm:gap-5">
          {projects.map((e, index) => (
            <div className="col-span-12 sm:col-span-6 mb-6" key={index}>
              <div class="flex  overflow-hidden shadow-sm border border-gray-200 h-full">
                {/* <div className="overflow-hidden hidden sm:block">
                  <Image
                    src={e.image}
                    alt={e.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: 600,
                      height: "100%",
                      objectFit: "cover",
                    }} // optional
                  />
                </div> */}
                <div class="px-6 py-4">
                  <div className="flex justify-between items-center">
                    <div class="font-medium text-lg mb-2">{e.title}</div>
                    <a href={e.link} target="_blank">
                      <LinkOut size={15} />
                    </a>
                  </div>

                  <p class="text-gray-500 text-[14px] sm:min-h-[130px] my-5">
                    {e.description}
                  </p>

                  <div class="pb-2 mt-auto">
                    {e.tech.map((e, index) => (
                      <span
                        key={index}
                        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-[12px] font-medium text-gray-700 mr-2 mb-2"
                      >
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Porfolio;
