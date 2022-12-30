import React from "react";
import { ReactComponent as Messenger } from "../../../assets/service-logo/messenger.svg";
import { ReactComponent as Gmail } from "../../../assets/service-logo/gmail.svg";
import { ReactComponent as Twitter } from "../../../assets/service-logo/twitter.svg";
import { ReactComponent as Linkedin } from "../../../assets/service-logo/linkedin.svg";
import { ReactComponent as Whatsapp } from "../../../assets/service-logo/whatsapp.svg";
import { ReactComponent as Zalo } from "../../../assets/service-logo/zalo.svg";
import { services, ServicesList } from "../shared/constant";

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
      {ServicesList.map((service, index) => 
        {
          const Icon = service.icon;
          return <div
          key={index}
          onDragStart={(event) =>
            onDragStart(event, {
              name: service.name,
              number: service.number,
              icon: service.name,
            })
          }
          draggable
          className="flex py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
        >
          <div className="flex items-center">
            <Icon />
          </div>

          <div className="ml-4">
            <p className="font-normal text-xl">{service.name}</p>
            <h3 className="font-bold text-2xl">{service.number}</h3>
          </div>
        </div>
        }
      )}
    </aside>
  );
};
