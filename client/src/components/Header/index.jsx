import _ from "lodash";
import { Transition } from "@headlessui/react";
import { profile } from "../../constants/profile.json";
import { SOCIAL } from "../../constants/definitions";

export default function Header() {
  const {
    header: { firstName, lastName },
    details,
  } = profile;
  return (
    <Transition
      show
      enter="transition ease-out duration-150 transform"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="transition ease-in duration-150 transform"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <div className="w-full flex flex-col items-center justify-center">
        <header className="w-full flex items-start justify-center flex-wrap p-5 lg:pt-10 text-6xl lg:text-6xl font-sans uppercase font-extrabold leading-none">
          <p className="text-black tracking-wide">
            <span>{firstName}</span>
          </p>
          <p className="tracking-wider ml-1">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-lightBlue-400">
              {`${lastName}`}
            </span>
          </p>
        </header>
        <div className="flex sm:-mx-1 md:-mx-1 lg:-mx-3 mb-4">
          {_.map(details.social, (socialItem, index) => {
            return (
              <a
                key={index}
                className="relative z-20 text-black text-2xl font-bold cursor-pointer hover:underline hover:text-black visited:text-black mr-5"
                href={socialItem.link}
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  className="h-12 w-10 m-0"
                  src={SOCIAL[socialItem.id]}
                  alt={socialItem.type}
                />
              </a>
            );
          })}
        </div>
      </div>
    </Transition>
  );
}
