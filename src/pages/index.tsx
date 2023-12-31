import Link from "next/link";

const Home = () => {
  return (
    <div className="ITEM_CONTAINER flex flex-col space-y-5 py-10 ">
      {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
        <div key={i}>
          <Link
            href={`/items/${i}`}
            className="ROW flex justify-between border-b pb-5 cursor-pointer px-4"
          >
            <div className="L_COL flex space-x-4">
              <div className="ITEM_PHOTO bg-slate-600 w-20 h-20 rounded-md" />
              <div className="ITEM_INFO flex flex-col pt-2">
                <h3 className="font-medium text-sm text-gray-900">
                  New iPhone 14
                </h3>
                <span className="text-xs text-gray-500">Black</span>
                <span className="text-gray-900 mt-1">$95</span>
              </div>
            </div>
            <div className="R_COL flex text-slate-600 space-x-2">
              <div className="R_COL_ICON flex items-end text-gray-600 space-x-0.5 ">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
                <span className="text-xs ">1</span>
              </div>
              <div className="R_COL_ICON flex items-end text-gray-600 space-x-0.5">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  ></path>
                </svg>
                <span className="text-xs ">1</span>
              </div>
            </div>
          </Link>
        </div>
      ))}
      <Link href="/items/upload">
        <button className="fixed p-4 bg-orange-400 hover:bg-orange-500 transition cursor-pointer text-white rounded-full shadow-xl right-5 bottom-24 hover:-translate-y-1 ease-in-out">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
};

export default Home;
