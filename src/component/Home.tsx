import { useState } from "react";

import Logo from "../assets/images/logo.svg";
import IconDark from "../assets/images/icon-sun.svg";
import IconLight from "../assets/images/icon-moon.svg";
import { Cards } from "./Cards";

import { extensions } from "../data/data";
import type { CardProps } from "../data/data";
import { activeExtenions, inactiveExtensions, } from "../utils/functions";

export const Home = () => {
const [allExtensions, setAllExtensions] = useState<CardProps[]>(extensions);
const [extensionData, setExtensionData] = useState<CardProps[]>(extensions);
const [isDark, setTheme] = useState(true);

const displayAllExtensions = () => {
  setExtensionData(allExtensions);
};

const displayActiveExtensions = () => {
  const active = activeExtenions(allExtensions);
  setExtensionData(active);
};

const displayInactiveExtensions = () => {
  const inactive = inactiveExtensions(allExtensions);
  setExtensionData(inactive);
};

const toggleSwitch = (title: string, isActive: boolean) => {
  const updated = allExtensions.map(ext =>
    ext.title === title ? { ...ext, enabled: isActive } : ext
  );

  setAllExtensions(updated);

  // Also update currently displayed dataset (depending on current filter)
  setExtensionData(prev =>
    prev.map(ext => ext.title === title ? { ...ext, enabled: isActive } : ext)
  );
};

const removeExtension = (title : string) =>{
  const update = allExtensions.filter(item=>item.title !== title)
  setAllExtensions(update);

  setExtensionData(
    prev => prev.filter(ext => ext.title !== title)
  )
}


  return (
    <>
      <article
        className={`
        ${isDark ? "dark" : ""}
        min-h-screen p-3 lg:pt-8 lg:px-0 
        bg-gradient-to-b from-[#EBF2FC] to-[#EEF8F9] dark:from-[#040918] dark:to-[#091540]
         `}
      >
        <header
          className={`
            md:w-10/12 mx-auto p-2.5 rounded-xl shadow mb-4
            bg-white dark:bg-neutral-800
            font-bold text-neutral-900
            flex flex-row justify-between items-center        
            `}
        >
          <div
            className={
              isDark
                ? ``
                : `dark:bg-neutral-100 dark:p-3 `
            }
          >
            <img src={Logo} alt="Extensions logo" />
          </div>

          <div
            className={`
              
              ${
              isDark
                ? "bg-neutral-700 p-3 rounded-md cursor-pointer hover:bg-neutral-600"
                : `bg-neutral-100 p-3 rounded-md cursor-pointer hover:bg-neutral-300`
            }
            `}
            onClick={()=>setTheme(!isDark)}
          >
            {isDark ? (
              <img src={IconDark} alt="Dark" />
            ) : (
              <img src={IconLight} alt="Light" />
            )}
          </div>
        </header>
        <br></br>
        
        <section
          className="
        text-neutral-700 md:w-10/12 mx-auto
          flex flex-col md:flex-row md:justify-between gap-2 items-center
        "
        >
          <h1 className={`${isDark?`text-white` : `text-neutral-800`} font-semibold text-3xl`}>Extensions List</h1>
          <div className="flex flex-row gap-2 justify-between md:justify-around text-neutral-900">
            <button 
            className={` ${!isDark ? `buttonStyle` : `buttonStyleDark`} focus:outline-none focus:ring-2 focus:ring-red-400`}
            onClick={()=>displayAllExtensions()}
            >All</button>

            <button 
            className={`${!isDark ? `buttonStyle` : `buttonStyleDark`} focus:outline-none focus:ring-2 focus:ring-red-400`}
            onClick={()=>displayActiveExtensions()}
            >Active</button>

            <button 
            className={`${!isDark ? `buttonStyle` : `buttonStyleDark`} focus:outline-none focus:ring-2 focus:ring-red-400`}
            onClick={()=>displayInactiveExtensions()}
            >Inactive</button>
          </div>
        </section>

        <br></br>
        <section
          className="
        mx-auto md:w-10/12
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
        gap-2
        "
        >
          {extensionData?.map((datas) => {
            return (
              <Cards
                title={datas.title}
                des={datas.des}
                img={datas.img}
                enabled={datas.enabled}
                onToggle = {toggleSwitch}
                onRemove = {removeExtension}
                key={datas.title}

              />
            );
          })}
        </section>
      </article>
    </>
  );
};

