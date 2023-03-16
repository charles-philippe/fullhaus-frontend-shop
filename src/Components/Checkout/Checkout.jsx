import { useContext } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { ShoppingBagContext } from "../../Context/ShoppingBagContext.js";

export default function Checkout() {
  const { bagItems, removeFromBag, calculateTotal } =
    useContext(ShoppingBagContext);
  return (
    <div className="top-16 w-full max-w-sm px-4">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`${open ? "" : "text-opacity-90"}
                  group inline-flex items-center bg-black px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span>Checkout ({bagItems.length}) </span>
              <ChevronDownIcon
                className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-300 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0">
                <div className="overflow-hidden shadow-lg ring-1 ring-gray-200 ring-opacity-50 divide-y divide-gray-200">
                  <div className="flex flex-col h-full p-4 bg-white">
                    {bagItems && bagItems.length > 0 ? (
                      <>
                        {bagItems.map((item) => (
                          <a
                            key={item._id}
                            href={item.href}
                            className="m-1 flex items-center p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 relative"
                          >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                              <img
                                src={item.imageURLs[0]}
                                alt={item.fulhausProductName}
                              />
                            </div>
                            <div className="ml-4">
                              <p className="text-sm font-medium text-gray-900">
                                {item.fulhausProductName}
                              </p>
                              <button
                                className="text-sm font-medium text-gray-500 absolute bottom-0 right-0 mt-1 mr-1 hover:text-blue-900"
                                onClick={() => removeFromBag(item._id)}
                              >
                                Remove
                              </button>
                            </div>
                          </a>
                        ))}
                      </>
                    ) : (
                      <span className="">You're Shopping Bag is empty!</span>
                    )}
                  </div>
                </div>

                <a
                  href="##"
                  className="flow-root px-2 py-2 text-lg transition duration-150 ease-in-out hover:bg-stone-900 bg-black text-white focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                >
                  <span className="font-semibold">
                    Confirm Order $
                    {calculateTotal().toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </a>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
