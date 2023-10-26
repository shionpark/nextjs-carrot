const Upload = () => {
  return (
    <div className="UPLOAD_CONTAINER mx-4 py-10">
      <div className="UPLOAD_PHOTO">
        <div className="U_P_DASH transition-colors h-48 w-full border-2 border-dashed text-gray-600 border-gray-300 rounded-md flex justify-center items-center hover:border-orange-500 hover:border-orange-500">
          <label className="p-3 rounded-full bg-white border border-gray-200 hover:bg-orange-500 transition-colors hover:text-white hover:shadow-md hover:cursor-pointer">
            <svg
              className="h-12 w-12"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input className="hidden" type="file" />
          </label>
        </div>
      </div>
      <div className="UPLOAD_DETAILS my-5">
        <label htmlFor="input" className="mb-1 block text-gray-700 text-sm">
          Price
        </label>
        <div className="relative flex items-center shadow-sm">
          <div className="absolute left-0 pointer-events-none pl-3">
            <span className="text-gray-500 text-sm">$</span>
          </div>
          <input
            id="input"
            className="FORM_INPUT pl-7 appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            type="text"
            placeholder="0.00"
          />
          <div className="absolute right-0 pr-3 pointer-events-none">
            <span className="text-gray-500">USD</span>
          </div>
        </div>
      </div>
      <div>
        <label className="text-gray-700 text-sm">Description</label>
        <div>
          <textarea
            className="shadow-sm w-full rounded-md border-gray-300 focus:border-orange-500 focus:ring-orange-500"
            rows={4}
          />
        </div>
      </div>
      <button className="BTN w-full bg-orange-500 hover:bg-orange-600 mt-5 py-2 px-4 border border-transparent rounded-md text-white focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
        Upload product
      </button>
    </div>
  );
};

export default Upload;
