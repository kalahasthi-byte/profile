import { Transition } from "@headlessui/react";

export default function Card({ title, children }) {
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
      <div className="p-0 lg:p-10">
        <div className="relative p-3">
          <div className={`absolute z-10 -mt-1`}>
            <p
              className={`tracking-normal text-5xl font-extrabold uppercase right-0`}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400">
                {title}
              </span>
            </p>
          </div>
          <div className={`relative pt-5`}>
            <div className="relative p-5 ml-5 bg-white shadow-lg sm:rounded-3xl sm:p-10">
              <div className="mx-auto">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}
