import React, { useEffect, useState } from "react";

import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { json } from "react-router-dom";

const ChatDashboard = () => {
  const [selectChat, setSelectChat] = useState([]);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [arrowBack, setArrowBack] = useState(false);
  const [unread, setUnread] = useState({});
  const [data, setData] = useState([
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
  ]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    if (window?.innerWidth < 768) {
      setArrowBack(true);
    }
    window.addEventListener("resize", handleResize);
    const userChat = document?.getElementById("userChat");
    userChat.style.display = "none";
    handleResize();
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);
  console.log(selectChat);
  console.log(isMobile);

  /**
   * arrow back function here
   */

  const arrowBackClick = () => {
    if (window?.innerWidth < 768) {
      const chatList = document?.getElementById("chatList");
      chatList.style.display = "block";
      const userChat = document?.getElementById("userChat");
      userChat.style.display = "none";
    }
  };

  /***
   * handle click for show all chats for one specific users
   */

  const handleClick = (i) => {
    setSelectChat(i);
    if (window?.innerWidth < 768) {
      const chatList = document?.getElementById("chatList");
      chatList.style.display = "none";
      const userChat = document?.getElementById("userChat");
      userChat.style.display = "block";
    } else {
      const chatList = document?.getElementById("chatList");
      chatList.style.display = "block";
      const userChat = document?.getElementById("userChat");
      userChat.style.display = "block";
    }
  };

  console.log(open);
  /**
   * Unread Function here
   */

  const handleSetUnread = (userId) => {
    setUnread((prevState) => ({
      ...prevState,
      [userId]: !prevState[userId],
    }));
    setOpen(false);
  };

  /***
   * Delete function here
   */

  const handleDelete = (userId) => {
    setData(data.filter((user) => user.userId !== userId));
    setOpen(false);
  };
  /**
   * handle option return here
   */
  const handleOpetion = (i) => {
    if (open === false) {
      handleClick(i);
    } else {
      return;
    }
  };

  return (
    <div>
      <div className="flex h-screen overflow-hidden">
        {/***
         *  chat list section
         *
         */}
        <div
          className="lg:w-1/4 w-full bg-white border-r border-gray-300"
          id="chatList"
        >
          <header className="p-4 border-b border-gray-300 flex justify-between items-center  text-black">
            <h1 className="text-2xl font-semibold">Chats</h1>
          </header>

          <div className="overflow-y-auto h-screen p-3 mb-9 pb-20">
            {data?.map((i, index) => {
              return (
                <div
                  className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                  key={index}
                  onClick={() => handleOpetion(i)}
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
                      {i?.chat[0]?.[i?.userId]?.message}
                    </p>
                  </div>
                  {unread[i.userId] && i?.unreadCount > 0 && (
                    <div className="bg-[#3bbb54] text-sm w-5 rounded-full">
                      {i?.unreadCount}
                    </div>
                  )}
                  <Popover>
                    <PopoverButton className="text-sm/6 font-semibold text-black/50 focus:outline-none data-[active]:text-black data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
                      <img
                        className="w-4"
                        src="assets/images/ellipsis.png"
                        alt="3-dots"
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
                          {/* <div
                            className="block rounded-lg py-2 px-3 transition cursor-pointer hover:bg-gray-100"
                            onClick={() => handleSetUnread(i?.userId)}
                          >
                            <p className="font-semibold text-black">
                              Mark as Unread
                            </p>
                          </div> */}
                          <PopoverButton
                            className="block font-semibold text-black text-start rounded-lg py-2 px-3 transition cursor-pointer hover:bg-gray-100"
                            onClick={() => handleSetUnread(i?.userId)}
                          >
                            Mark as Unread
                          </PopoverButton>
                          <PopoverButton
                            className="w-full font-semibold text-black text-start rounded-lg py-2 px-3 transition cursor-pointer hover:bg-gray-100"
                            onClick={() => handleDelete(i?.userId)}
                          >
                            Delete
                          </PopoverButton>

                          <PopoverButton
                            className="w-full font-semibold text-black text-start rounded-lg py-2 px-3 transition cursor-pointer hover:bg-gray-100"
                            onClick={() => setOpen(false)}
                          >
                            Cancel
                          </PopoverButton>
                        </div>
                      </PopoverPanel>
                    </Transition>
                  </Popover>
                </div>
              );
            })}
          </div>
        </div>

        {/***
         * user all chats section
         *
         */}
        <div className="flex-1" id="userChat">
          <header className="bg-[#fafafa] p-2 text-gray-700">
            <div className="flex justify-between items-center">
              <div className="flex">
                {arrowBack && (
                  <img
                    src="assets/images/back-arrow.png"
                    className="w-10 h-10"
                    alt="arrow"
                    onClick={() => arrowBackClick()}
                  />
                )}
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
              <div className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="assets/images/video-icon.png"
                  alt="video-icon"
                />
                <img
                  className="w-6 h-6"
                  src="assets/images/call-icon.png"
                  alt="call-icon"
                />
                <img
                  className="w-6 h-6"
                  src="assets/images/ellipsis.png"
                  alt="ellipsis-icon"
                />
              </div>
            </div>
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
            <div className="relative flex items-center gap-2">
              <div className="border p-2 border-gray-400 rounded-full">
                <img
                  src="assets/images/add-icon.png"
                  alt="add"
                  className="w-6"
                />
              </div>
              <div className="border p-2 border-gray-400 rounded-full">
                <img
                  src="assets/images/voice-icon.png"
                  alt="voice"
                  className="w-6"
                />
              </div>
              <input
                type="text"
                placeholder="Type a message..."
                className="w-full p-2 pr-10 rounded-full border border-gray-400 focus:outline-none focus:border-blue-500"
              />
              <button className="absolute right-2 text-white px-2 py-1 rounded-md">
                <img
                  src="assets/images/send-icon.png"
                  alt="send"
                  className="w-6"
                />
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ChatDashboard;
