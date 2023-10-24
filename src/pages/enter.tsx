import { useState } from "react";
import { cls } from "@/utils";
import { TAB_E, TAB_P } from "@/constants";

export default function Enter() {
  const [method, setMethod] = useState<typeof TAB_E | typeof TAB_P>(TAB_E);
  const onEmailClick = () => setMethod(TAB_E);
  const onPhoneClick = () => setMethod(TAB_P);
  return (
    <div className="SCREEN flex-col px-4 justify-center items-center">
      <h3 className="E_TITLE font-extrabold text-3xl my-16  text-center">
        Enter to Carrot
      </h3>
      <div className="E_CONTAINER p-2">
        <div className="E_CLICK_TABS flex flex-col justify-center items-center">
          <div className="E_TABS border-b-2 border-gray-300 grid mt-8 w-full grid-cols-2">
            <button
              className={cls(
                "pb-4",
                method === TAB_E
                  ? "font-bold text-orange-400 border-b-2 border-orange-500"
                  : "border-transparent hover:text-gray-400 text-gray-500"
              )}
              onClick={onEmailClick}
            >
              Email
            </button>
            <button
              className={cls(
                "pb-4",
                method === TAB_P
                  ? "font-bold text-orange-400 border-b-2 border-orange-500"
                  : "border-transparent hover:text-gray-400 text-gray-500"
              )}
              onClick={onPhoneClick}
            >
              Phone
            </button>
          </div>
        </div>
        <form className="FORM_CONTAINER flex flex-col  mt-8">
          <label className="FORM_LABEL text-sm text-gray-700">
            {method === TAB_E ? "Email address" : null}
            {method === TAB_P ? "Phone number" : null}
          </label>
          <div className="FORM_INPUTS  ">
            {method === TAB_E ? (
              <input
                className="FORM_INPUT_E appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                type="email"
                required
              />
            ) : null}
            {method === TAB_P ? (
              <div className="FORM_INPUT_P_DIV flex bg-black shadow-sm rounded-md">
                <span className="FORM_INPUT_P_NUM flex items-center justify-center bg-gray-50 text-gray-00 border border-gray-300 border-r-0 px-3 rounded-l-md text-sm ">
                  +82
                </span>
                <input
                  className="FORM_INPUT_P w-full appearance-none border border-gray-300 rounded-md rounded-l-none focus:ring-orange-500 focus:border-orange-500"
                  type="number"
                  required
                />
              </div>
            ) : null}
          </div>
          <button className="FORM_ENTER_BTN bg-orange-500 hover:bg-orange-600 mt-5 py-2 px-4 border border-transparent rounded-md text-white focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
            {method === "email" ? "Get login link" : null}
            {method === TAB_P ? "Get one-time password" : null}
          </button>
        </form>
        <div className="E_SOCIAL_CONTAINER mt-8  ">
          <div className="E_SOCIAL_TEXT relative">
            <div className="absolute py-2 w-full border-t border-gray-300" />
            <div className="relative -top-3 text-center">
              <span className="bg-white px-2 text-sm text-gray-500">
                Or enter with
              </span>
            </div>
          </div>
          <div className="E_SOCIAL_BTNS grid grid-cols-2 mt-2 gap-3">
            <button className="E_SOCIAL_BTN flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </button>
            <button className="E_SOCIAL_BTN flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
