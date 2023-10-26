const Community = () => {
  return (
    <div className="COMMUNITY_CONTAINER py-10 space-y-7">
      {[1, 2, 3, 4, 5, 6].map((_, i) => (
        <div
          key={i}
          className="COMMUNITY_ROW flex flex-col items-start cursor-pointer"
        >
          <span className="C_CATEGORY ml-4 bg-gray-200 rounded-full text-xs px-2.5 py-0.5 text-gray-800">
            동네질문
          </span>
          <span className="C_QUESTION flex px-4 mt-2">
            <span className="text-orange-500 font-bold mr-1">Q.</span>
            What is the best mandu restaurant?
          </span>
          <div className="C_AUTHOR flex w-full px-4 justify-between items-center text-sm mt-5">
            <span>니꼬</span>
            <span>18시간 전</span>
          </div>
          <div className="C_COMMENT flex space-x-5 text-gray-800 w-full border-y py-3 mt-3 border-gray-300">
            <span className="flex items-center space-x-0.5 ml-4">
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span className="text-sm ">궁금해요 1</span>
            </span>
            <span className="flex items-center space-x-0.5">
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
              <span className="text-sm">답변 1</span>
            </span>
          </div>
        </div>
      ))}
      <button className="fixed p-4 bg-orange-400 hover:bg-orange-500 transition cursor-pointer text-white rounded-full shadow-xl right-5 bottom-24 hover:-translate-y-1 ease-in-out">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Community;
