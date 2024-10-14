import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function EnsVision() {
  const tasks = [
    {
      text: "Développement d'une application Web Ecommerce MyShop avec PHP et mySQL",
      keywords: ["PHP", "mySQL", "PDO"],
    },
    {
      text: "Développement d'une plateforme de MarketPlace FreeAds utilisant PHP, Laravel, mySQL",
      keywords: ["quality", "testing tasks", "user base", "PHP", "mySQL"],
    },
    {
      text: "Développement d'une application Web 'EPIFLIX' de recommandations de films s'inspirant de NetFlix en utilisant VueJS, API TMDB",
      keywords: ["website design", "API", "VueJS", "TMDB"],
    },
    {
      text: "Collaboration étroite avec une équipe de développeurs pour la mise en place d'une plateforme de Streaming 'Streamix' de recommandation de films et bandes-annonces avec NextJS, MongoDB, API",
      keywords: ["Collaboration", "Streamix", "NextJS", "API", "MongoDB"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Engineer <span className="text-AAsecondary">@ web3</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Juin 2024 - Octobre 2024</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://epitech.bj//", "_blank")}
          >
            www.epitech.bj
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
