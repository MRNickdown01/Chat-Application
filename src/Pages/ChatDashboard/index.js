import React, { useState } from "react";
const ChatDashboard = () => {
  const [selectChat, setSelectChat] = useState(null);
  const data = [
    {
      userId: "user1",
      name: "Sam",
      unreadCount: 1,
      profilePictureURL:
        "https://www.pexels.com/photo/portrait-photo-of-smiling-man-with-his-arms-crossed-standing-in-front-of-a-wall-2379004/",
      chat: [
        {
          user1: {
            message: "Hello",
            timeStamp: "10:40",
          },
          you: {
            message: "Hey",
            timeStamp: "10:41",
          },
        },
        {
          user1: {
            message: "How are you doing?",
            timeStamp: "10:41",
          },
          you: {
            message: "Fine mate, how about you?",
            timeStamp: "10:42",
          },
        },
        {
          user1: {
            message: "great",
            timeStamp: "10:44",
          },
          you: {
            message: "Coming to my wedding right? I don't think you confirmed.",
            timeStamp: "10:44",
          },
        },
        {
          user1: {
            message: "Oh yes. There is no way i am going to miss that.",
            timeStamp: "10:44",
          },
          you: {
            message:
              "Awesome. See ya there. Let me know if you want me to book tickets.",
            timeStamp: "10:45",
          },
        },
      ],
    },
    {
      userId: "user2",
      name: "Elon",
      unreadCount: 0,
      profilePictureURL:
        "https://www.pexels.com/photo/man-in-brown-polo-shirt-614810/",
      chat: [
        {
          user2: {
            message: "there?",
            timeStamp: "11:39",
          },
          you: {
            message: "yeah, whats up?",
            timeStamp: "11:47",
          },
        },
        {
          user2: {
            message: "movie tomorrow?",
            timeStamp: "11:49",
          },
          you: {
            message:
              "Yeah sure. let me know the timings. and which movie again?",
            timeStamp: "11:52",
          },
        },
        {
          user2: {
            message: "the new mad max movie. Reviews are great.",
            timeStamp: "11:52",
          },
          you: {
            message: "Oh yes, i have been waiting for that one.",
            timeStamp: "11:54",
          },
        },
      ],
    },
    {
      userId: "user3",
      name: "Kate",
      unreadCount: 1,
      profilePictureURL:
        "https://www.pexels.com/photo/closeup-photo-of-woman-with-brown-coat-and-gray-top-733872/",
      chat: [
        {
          user2: {
            message: "that burger was delicious!",
            timeStamp: "13:12",
          },
          you: {
            message: "Oh yes, no doubt.",
            timeStamp: "13:13",
          },
        },
        {
          user2: {
            message: "We are definetely going to that place again.",
            timeStamp: "13:13",
          },
          you: {
            message: "we are. My mouth waters whenever drive thorugh that area",
            timeStamp: "13:14",
          },
        },
        {
          user2: {
            message: "haha, I bet. Lets take Tony and Natasha too next time",
            timeStamp: "13:14",
          },
          you: {
            message: "Sure. they would love it",
            timeStamp: "13:15",
          },
        },
      ],
    },
  ];
  console.log(data);

  console.log(selectChat?.chat);
  return (
    <div>
      <div className="flex h-screen overflow-hidden">
        <div className="w-1/4 bg-white border-r border-gray-300">
          <header className="p-4 border-b border-gray-300 flex justify-between items-center  text-black">
            <h1 className="text-2xl font-semibold">Chats</h1>
            <div className="relative">
              {/* <div
                id="menuDropdown"
                className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg hidden"
              >
                <ul className="py-2 px-3">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:text-gray-400"
                    >
                      Option 1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:text-gray-400"
                    >
                      Option 2
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </header>

          <div className="overflow-y-auto h-screen p-3 mb-9 pb-20">
            {data?.map((i, index) => {
              return (
                <div
                  className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                  key={index}
                  onClick={() => setSelectChat(i?.chat)}
                >
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-3">
                    <img
                      src={i?.profilePictureURL}
                      alt="User Avatar"
                      className="w-12 h-12 rounded-full"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-start">
                      {i?.name}
                    </h2>
                    <p className="text-gray-600 text-start">
                      {i?.chat[0]?.user1?.message}
                    </p>
                  </div>
                  <img className="w-4" src="assets/images/ellipsis.png"></img>
                </div>
              );
            })}
          </div>
        </div>
        {selectChat ? (
          <div className="flex-1">
            <header className="bg-white p-4 text-gray-700">
              <h1 className="text-2xl font-semibold">{selectChat?.name}</h1>
            </header>

            <div className="h-screen overflow-y-auto p-4 pb-36">
              <div className="flex mb-4 cursor-pointer">
                <div className="flex max-w-96 bg-[#fafafa] rounded-3xl p-3 gap-3">
                  <p className="text-gray-700">
                    {selectChat?.chat?.userId?.message}
                  </p>
                </div>
              </div>

              <div className="flex justify-end mb-4 cursor-pointer">
                <div className="flex max-w-96 bg-[#dcf6c6] text-black rounded-3xl p-3 gap-3">
                  <p>
                    Hi Alice! I'm good, just finished a great book. How about
                    you?
                  </p>
                  <div className="text-end flex items-end">13:45</div>
                </div>
              </div>

              <div className="flex mb-4 cursor-pointer">
                <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                  <img
                    src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
                <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
                  <p className="text-gray-700">
                    That book sounds interesting! What's it about?
                  </p>
                </div>
              </div>

              <div className="flex justify-end mb-4 cursor-pointer">
                <div className="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
                  <p>
                    It's about an astronaut stranded on Mars, trying to survive.
                    Gripping stuff!
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                  <img
                    src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                    alt="My Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
              </div>

              <div className="flex mb-4 cursor-pointer">
                <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                  <img
                    src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
                <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
                  <p className="text-gray-700">
                    I'm intrigued! Maybe I'll borrow it from you when you're
                    done?
                  </p>
                </div>
              </div>

              <div className="flex justify-end mb-4 cursor-pointer">
                <div className="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
                  <p>Of course! I'll drop it off at your place tomorrow.</p>
                </div>
                <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                  <img
                    src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                    alt="My Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
              </div>

              <div className="flex mb-4 cursor-pointer">
                <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                  <img
                    src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
                <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
                  <p className="text-gray-700">Thanks, you're the best!</p>
                </div>
              </div>

              <div className="flex justify-end mb-4 cursor-pointer">
                <div className="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
                  <p>Anytime! Let me know how you like it. 😊</p>
                </div>
                <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                  <img
                    src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                    alt="My Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
              </div>

              <div className="flex mb-4 cursor-pointer">
                <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                  <img
                    src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
                <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
                  <p className="text-gray-700">So, pizza next week, right?</p>
                </div>
              </div>

              <div className="flex justify-end mb-4 cursor-pointer">
                <div className="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
                  <p>Absolutely! Can't wait for our pizza date. 🍕</p>
                </div>
                <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                  <img
                    src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                    alt="My Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
              </div>

              <div className="flex mb-4 cursor-pointer">
                <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                  <img
                    src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
                <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
                  <p className="text-gray-700">Hoorayy!!</p>
                </div>
              </div>
            </div>

            <footer className="bg-white border-t border-gray-300 p-4 absolute bottom-0 w-3/4">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
                />
                <button className="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2">
                  Send
                </button>
              </div>
            </footer>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ChatDashboard;
