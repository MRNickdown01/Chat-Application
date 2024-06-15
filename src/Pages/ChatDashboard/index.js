import React, { useEffect, useState } from "react";
import Modal from "../../Component/Modal";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";

const ChatDashboard = () => {
  const [selectChat, setSelectChat] = useState([]);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const data = [
    {
      userId: "user1",
      name: "Sam",
      unreadCount: 1,
      // profilePictureURL:
      //   "https://www.pexels.com/photo/portrait-photo-of-smiling-man-with-his-arms-crossed-standing-in-front-of-a-wall-2379004/",
      profilePictureURL: "assets/images/user-1.jpg",
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
      // profilePictureURL:
      //   "https://www.pexels.com/photo/man-in-brown-polo-shirt-614810/",
      profilePictureURL: "assets/images/user-2.jpg",
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
      // profilePictureURL:
      //   "https://www.pexels.com/photo/closeup-photo-of-woman-with-brown-coat-and-gray-top-733872/",
      profilePictureURL: "assets/images/user-3.jpg",
      chat: [
        {
          user3: {
            message: "that burger was delicious!",
            timeStamp: "13:12",
          },
          you: {
            message: "Oh yes, no doubt.",
            timeStamp: "13:13",
          },
        },
        {
          user3: {
            message: "We are definetely going to that place again.",
            timeStamp: "13:13",
          },
          you: {
            message: "we are. My mouth waters whenever drive thorugh that area",
            timeStamp: "13:14",
          },
        },
        {
          user3: {
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);
  console.log(selectChat);

  return (
    <div>
      <div className="flex h-screen overflow-hidden">
        {!isMobile && (
          <div className="w-1/4 bg-white border-r border-gray-300">
            <header className="p-4 border-b border-gray-300 flex justify-between items-center  text-black">
              <h1 className="text-2xl font-semibold">Chats</h1>
            </header>

            <div className="overflow-y-auto h-screen p-3 mb-9 pb-20">
              {data?.map((i, index) => {
                return (
                  <div
                    className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                    key={index}
                    onClick={() => setSelectChat(i)}
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

                    <Popover>
                      <PopoverButton className="text-sm/6 font-semibold text-black/50 focus:outline-none data-[active]:text-black data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
                        <img
                          className="w-4"
                          src="assets/images/ellipsis.png"
                          onClick={() => setOpen(true)}
                        ></img>
                      </PopoverButton>
                      <Transition
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <PopoverPanel
                          anchor="bottom"
                          className="divide-y divide-white/5 rounded-xl bg-white/5 text-sm/6 [--anchor-gap:var(--spacing-5)]"
                        >
                          <div className="p-3 bg-[#fafafa]">
                            <div className="block rounded-lg py-2 px-3 transition cursor-pointer hover:bg-gray-100">
                              <p className="font-semibold text-black">
                                Mark as Unread
                              </p>
                            </div>
                            <a
                              className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                              href="#"
                            >
                              <p className="font-semibold text-black">Delete</p>
                            </a>
                            <a
                              className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                              href="#"
                            >
                              <p className="font-semibold text-black">Cancel</p>
                            </a>
                          </div>
                        </PopoverPanel>
                      </Transition>
                    </Popover>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {selectChat ? (
          <div className="flex-1">
            <header className="bg-[#fafafa] p-2 text-gray-700">
              <div className="flex">
                <div className="flex items-center gap-4 w-12 h-12 bg-gray-300 rounded-full mr-3 ">
                  <img
                    src={selectChat?.profilePictureURL}
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <h1 className="text-2xl font-semibold text-start">
                  {selectChat?.name}
                </h1>
              </div>
              <div></div>
            </header>
            <div className="h-screen overflow-y-auto p-4 pb-36">
              {selectChat?.chat?.map((chats, index) => {
                return (
                  <div key={index}>
                    <div className="flex mb-4 cursor-pointer">
                      <div className="max-w-9/12 bg-[#fafafa] rounded-2xl p-2 gap-3">
                        <p className="text-gray-700">
                          {chats?.[selectChat?.userId]?.message}
                        </p>
                        <div className="text-end text-xs">
                          {chats?.[selectChat?.userId]?.timeStamp}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end mb-4 cursor-pointer">
                      <div className="max-w-9/12 bg-[#dcf6c6] text-black rounded-2xl p-3 gap-3 text-start">
                        <p>{chats?.you?.message}</p>
                        <div className="text-end text-xs">
                          {chats?.you?.timeStamp}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <footer className="bg-white border-t border-gray-300 p-4 absolute bottom-0 lg:w-3/4 w-full">
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
