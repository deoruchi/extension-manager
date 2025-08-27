import { useState } from "react";

import { type CardProps } from "../data/data";
interface Props extends CardProps {
  onToggle: (title: string, isActive: boolean) => void;
  onRemove: (title: string) => void;
}
export const Cards = ({ title, des, img, enabled, onToggle, onRemove }: Props) => {
  const [isActive, setActive] = useState(enabled);
  const switchButton = () => {
    const newValue = !isActive;
    setActive(newValue);
    console.log("status", newValue);
    onToggle(title, newValue);
  };

  const removeExtension = () => {
    const res = confirm("Do you want to remove the extension");
    if (res){
      onRemove(title)
    }

  };

  return (
    <>
      <div
        className="rounded-2xl md:gap-10 bg-white dark:bg-neutral-800 p-4 
          flex flex-col gap-5 justify-between
          shadow h-50
          dark:border dark:border-neutral-600
          dark:text-white"
      >
        <div className="flex flex-row items-start gap-2 justify-between">
          <img src={img} alt={`${title} icon`} />
          <div className="flex flex-col">
            <p className="text-xl font-bold text-neutral-700 dark:text-white">
              {title}
            </p>
            <p className="dark:text-neutral-300">{des}</p>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <button
            className="
              px-3 py-1 border rounded-full
              hover:bg-red-600 hover:text-white  
              focuse-border-2 focus:bg-neutral-100                focus:outline-2 focus:hover:outline focus:outline-red-600 focus:text-neutral-900 focus:border-0

              dark:text-white dark:border-neutral-600
              hover:dark:bg-red-500 hover:dark:border-red-500
              hover:dark:text-neutral-800
              focus:dark:outline-red-500 focus:dark:bg-neutral-600 focus:dark:text-white
              transition
              "
            onClick={removeExtension}
          >
            Remove
          </button>

          <div className="flex items-center space-x-2">
            <label
              className={`relative inline-block w-12 h-6 cursor-pointer      rounded-full transition-colors duration-100 ease-in-out
                ${isActive ? `bg-red-400` : `bg-neutral-600`}
                focus:ring-2 focus:ring-red-400 focus:outline-none
              `}
            >
              <input
                type="checkbox"
                checked={isActive}
                onChange={switchButton}
                className="sr-only"
              />
              <span
                className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ease-in-out transform ${
                  isActive ? "translate-x-6" : "translate-x-0"
                }
               focus:ring-2 focus:ring-red-400 focus:outline-none
                `}
              ></span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
