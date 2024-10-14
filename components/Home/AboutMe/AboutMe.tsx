/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Img from "../../../components/smallComp/image/Img";
import ArrowIcon from "../../../components/Icons/ArrowIcon";
export default function AboutMe(props) {
  const technologies = [
    [
      "Nextjs/React",
      "TypeScript/JavaScript",
      "Tailwind CSS",
      "Ether.js/web3.js",
      "AWS/Google Cloud",
      "Docker/ Docker Compose",
      "PHP",
      "Laravel",
      "NestJS",
    ],
    ["Node.js", "Java", "Solidity", "Mongodb", "mySQL", "RESTful APIs"      ,"NuxtJS", "VueJS/Vite", "Python/Flask",],
  ];
  return (
    <div
      id="aboutSection"
      data-aos="fade-up"
      className="snap-start flex flex-col  items-center py-20 bg-AAprimary"
    >
      {/* // ? 0.1 About Me */}
      <div
        className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
        md:w-[700px] lg:w-[900px] "
      >
        <div className="flex flex-row items-center ">
          <div className="flex flex-row  items-center mr-4">
            <ArrowIcon
              className={
                "flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"
              }
            />
            <span className="text-AAsecondary font-Header text-sm  sm:text-xl">
              {" "}
              01.
            </span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              A Propos de Moi
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>
        {/* // ? Paragraphs */}

        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0  md:space-x-8 sm:space-x-2 ">
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm ">
            <div className="font-Header text-justify">
              <span className="text-gray-400 ">
                Salut! Je suis Félix TETE, et je suis passionné du{" "}
                <span className="text-AAsecondary">
                  Développement Web/Mobile
                </span>{" "}
                avec une forte compétence de résolution de problèmes. Mon mon
                parcours en informatique a commencé à l'âge de 17 ans lorsque
                j'ai exploré la l'électronique embarquée avec Arduino après un
                baccalauréat série Electronique à l'aide d'Arduino et Raspberry
                Pi, ce qui a déclenché mon intérêt pour la programmation. Au fil
                des années, j'ai continué à apprendre le codage en autodidacte,
                ce qui m'a amené moi de poursuivre une
                <span className="text-AAsecondary">{" "}
                  formation de Développement Web/Mobile Full Stack 
                </span>{" "}
                 à la Coding Academy d'EPITECH
              </span>
            </div>
            <div className="font-Header text-justify">
              <span className="text-gray-400 ">
                Tout au long de mes études et de ma carrière, depuis mes années
                d'auto-apprentissage jusqu'à l'obtention de mes diplômes et
                certificats, j'ai acquis expérience dans diverses industries.
                J'ai eu l'opportunité de travailler avec des entreprises et des
                startups, y compris{" "}
                <span className="text-AAsecondary">Epitech</span>,{" "}
                <span className="text-AAsecondary">WoeLab</span>,{" "}
                <span className="text-AAsecondary">Tépé</span>
              </span>
            </div>

            <div className="font-Header tracking-wide text-justify ">
              <span className="text-gray-400  ">
              Je suis toujours intéressé à continuer à apprendre et à améliorer mes
                compétences pour avoir un impact positif dans le monde de la technologie. Voici
                certaines des technologies avec lesquelles j'ai travaillé :{" "}
              </span>
            </div>
            <div className="font-Header tracking-wide flex flex-row space-x-16  justify-center lg:justify-start">
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[0].map((tech, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row items-center space-x-2"
                      >
                        <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                        <span className="text-gray-400 sm:text-sm text-xs">
                          {tech}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[1].map((tech, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row items-center space-x-2"
                      >
                        <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                        <span className="text-gray-400 sm:text-sm text-xs">
                          {tech}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* // ? Image in Desktop and Tablet */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden ">
            <div
              className="group-hover:translate-x-3 group-hover:translate-y-3
               duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 
               translate-y-5 rounded"
            ></div>

            <div className="absolute w-5/6 h-5/6  rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
              <Img
                src={"/img/Portfolio-portrait-3.jpg"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
          </div>
          {/* // ?Image in Mobile */}
          <div className=" relative w-full h-48 md:hidden  flex justify-center items-center">
            <div className="absolute w-48 h-full  rounded  translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
            <div className="absolute w-48 h-full rounded overflow-hidden">
              <Img
                src={"/img/Portfolio-portrait-3.jpg"}
                className={"object-contain rounded-xl shadow-xl"}
                alt="My Image Not Found"
              />
            </div>
            <div className="absolute w-48 h-full  bg-AAsecondary opacity-10 md:opacity-60  rounded overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
