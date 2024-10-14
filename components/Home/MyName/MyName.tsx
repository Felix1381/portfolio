/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
export default function MyName(props: { finishedLoading: boolean }) {
  const router = useRouter();
  return (
    <div
      className="h-full flex flex-col justify-center
      px-8 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-32 sm:py-52  "
    >
      <motion.span
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.4, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.4, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-AAsecondary font-mono"
      >
        Salut, Je suis
      </motion.span>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.5, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.5, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        Félix TETE.
      </motion.h1>
      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.6, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.6, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-gray-400 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        Je transforme les idées en réalité .
      </motion.h2>

      {/* <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.7, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.7, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-gray-400 font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider"
      >
        I&apos;m a <span className="text-AAsecondary">software engineer</span>, with strong problem-solving skills. I
        specialize in building great digital experiences, <br className="2xl:block hidden" />
        both in <span className="text-AAsecondary">front-end</span> and{" "}
        <span className="text-AAsecondary">back-end</span> development. I work with different technologies, including
        <span className="text-AAsecondary"> web3</span> and regular <br className="2xl:block hidden" /> web
        applications. I enjoy working on projects that bring new ideas and high-quality results.
      </motion.h3> */}
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.7, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.7, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-gray-400 font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider "
      >
        Je suis un <span className="text-AAsecondary">Développeur Web/Mobile Full Stack</span> avec une forte compétence en{" "}
        <span className="text-AAsecondary">résolution de problèmes complexes</span>, me spécialisant dans la création des applications Web ou Mobiles exceptionnelles.
        <br className="3xl:block hidden" /> Avec une forte expérience en <span className="text-AAsecondary"> développement front-end</span>{" "}
        et <span className="text-AAsecondary">back-end</span>
        , je travaille avec diverses technologies, incluant {" "}
        <span className="text-AAsecondary"> web3</span>
        <br className="3xl:block hidden" /> et les applications web traditionnelles. J'aime m'aventurer dans les projets challengeants qui allient  <span className="text-AAsecondary"> innovation</span> et la livraison des résultats de haute performance.
        <br className="3xl:block hidden" /> Mon experience en{" "}
        <span className="text-AAsecondary">lead d'équipes de développement</span> a accru mon abilitéà collaborer efficacement et transformer les idées en des solutions fonctionnelles.
        <br className="3xl:block hidden" /> Je suis excité de contribuer aux projets dynamiquesc qui poussent aux bouts de la technologie.
      </motion.h3>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.8, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.8, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="mt-12"
      >
        <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
          <button className="bg-AAprimary text-AAsecondary border rounded px-4 sm:px-8 py-3 sm:py-4 border-AAsecondary">
            Un coup d'oeil sur mon CV!
          </button>
        </a>
      </motion.div>
    </div>
  );
}
