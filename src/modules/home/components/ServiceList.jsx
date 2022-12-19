import React from "react";
import { ReactComponent as Messenger } from "../../../assets/service-logo/messenger.svg";
import { ReactComponent as Gmail } from "../../../assets/service-logo/gmail.svg";
import { ReactComponent as Twitter } from "../../../assets/service-logo/twitter.svg";
import { ReactComponent as Linkedin } from "../../../assets/service-logo/linkedin.svg";
import { ReactComponent as Whatsapp } from "../../../assets/service-logo/whatsapp.svg";
import { ReactComponent as Zalo } from "../../../assets/service-logo/zalo.svg";
import { services } from "../shared/constant";

export const ServiceList = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(nodeType)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside className="mt-7 mr-4 text-sm shadow-md font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <div
        onDragStart={(event) =>
          onDragStart(event, {
            name: "Messenger",
            number: "17",
            icon: services.messenger,
          })
        }
        draggable
        className="flex py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
      >
        <div className="flex">
          <Messenger />
        </div>

        <div className="ml-4">
          <p className="font-normal text-xl">Messenger</p>
          <h3 className="font-bold text-2xl">7</h3>
        </div>
      </div>
      <div
        onDragStart={(event) =>
          onDragStart(event, {
            name: "Gmail",
            number: "17",
            icon: services.gmail,
          })
        }
        draggable
        className="flex py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
      >
        <div className="flex ">
          <Gmail />
        </div>

        <div className="ml-4">
          <p className="font-normal text-xl">Gmail</p>
          <h3 className="font-bold text-2xl">8</h3>
        </div>
      </div>
      <div
        onDragStart={(event) =>
          onDragStart(event, {
            name: "Linkedin",
            number: "17",
            icon: services.linkedin,
          })
        }
        draggable
        className="flex py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
      >
        <div className="flex">
          <Linkedin />
        </div>

        <div className="ml-4">
          <p className="font-normal text-xl">LinkedIn</p>
          <h3 className="font-bold text-2xl">128</h3>
        </div>
      </div>

      <div
        onDragStart={(event) =>
          onDragStart(event, {
            name: "Zalo",
            number: "17",
            icon: services.zalo,
          })
        }
        draggable
        className="flex py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
      >
        <div className="flex">
          <Zalo />
        </div>

        <div className="ml-4">
          <p className="font-normal text-xl">Zalo</p>
          <h3 className="font-bold text-2xl">12</h3>
        </div>
      </div>
      <div
        onDragStart={(event) =>
          onDragStart(event, {
            name: "Twitter",
            number: "17",
            icon: services.twitter,
          })
        }
        draggable
        className="flex py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
      >
        <div className="flex">
          <Twitter />
        </div>

        <div className="ml-4">
          <p className="font-normal text-xl">Twitter</p>
          <h3 className="font-bold text-2xl">16</h3>
        </div>
      </div>
      <div
        onDragStart={(event) =>
          onDragStart(event, {
            name: "Whatsapp",
            number: "17",
            icon: services.whatsapp,
          })
        }
        draggable
        className="flex py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
      >
        <div className="flex">
          <Whatsapp />
        </div>

        <div className="ml-4">
          <p className="font-normal text-xl">WhatsApp</p>
          <h3 className="font-bold text-2xl">4</h3>
        </div>
      </div>
    </aside>
  );
};
