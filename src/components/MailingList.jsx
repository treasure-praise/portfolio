import React from "react";

const MailingList = () => {
  return (
    <div className="border my-12 w-4/5 md:w-2/5 mx-auto rounded-md border-black p-6 bg-white">
      <p className="mb-4">Get updates from me on what i’m working on</p>
      <div className="flex ">
        <input
          className="border-2 border-r-0 rounded-r-none rounded-md border-black py-4 px-4 bg-white w-full"
          type="email"
          name=""
          id=""
          placeholder="your@email.com"
        />
        <button className="border-2 rounded-l-none rounded-md border-black py-4 px-2 bg-white w-1/2 md:w-1/5 hover:bg-black hover:text-white">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default MailingList;
