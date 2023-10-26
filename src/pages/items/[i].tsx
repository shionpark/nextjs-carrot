const ItemDetail = () => {
  return (
    <div className="px-4 py-10 bg-yellow-100">
      <div className="ITEM_DETAIL_CONTAINER bg-slate-200 ">
        <div className="ITEM h-96 bg-slate-600 rounded-md" />
        <div className="PROFILE px-2 flex items-center border border-b-gray-300 py-2 mb-8">
          <div className="P_PHOTO w-16 h-16 rounded-full bg-slate-500 mr-4" />
          <div className="space-y-0.5">
            <p className="text-sm text-gray-900">Steve Jebs</p>
            <p className="text-xs text-gray-500 hover:cursor-pointer">
              View profile &rarr;
            </p>
          </div>
        </div>
        <div className="ITEM_INFO ">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Galaxy S50</h1>
          <p className="text-xl text-gray-600">$140</p>
          <p className="text-gray-900 my-6">
            My money&apos;s in that office, right? If she start giving me some
            bullshit about it ain&apos;t there, and we got to go someplace else
            and get it, I&apos;m gonna shoot you in the head then and there.
            Then I&apos;m gonna shoot that bitch in the kneecaps, find out where
            my goddamn money is. She gonna tell me too. Hey, look at me when
            I&apos;m talking to you, motherfucker. You listen: we go in there,
            and that ni**a Winston or anybody else is in there, you the first
            motherfucker to get shot. You understand?
          </p>
          <div className="BTN_CONTAINER flex items-center space-x-2">
            <button className="BASIC_BTN p-3 flex items-center justify-center bg-orange-400 w-full rounded-md text-white hover:bg-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none">
              Talk to seller
            </button>
            <button className="p-3 hover:bg-gray-100 hover:text-gray-500">
              <svg
                className="h-6 w-6 "
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="S_ITEMS">
        <h2 className="text-2xl font-bold font-gray-900 py-8">Similar items</h2>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div key={i}>
              <div className="bg-slate-800 w-full h-40 rounded-md mb-4" />
              <h3 className=" text-gray-700 -mb-0.5">Galaxy S60</h3>
              <p className="text-sm text-gray-900">$6</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
