import React from "react";

import FlowBoard from "../../components/FlowBoard";
import { ReactFlowProvider } from "reactflow";
import { ServiceList } from "../../components/ServiceList";
import { useRef } from "react";
import { ListUser } from "../../components/ListUser";

function PrivateDemo() {
  const reactFlowWrapper = useRef(null);


  return (
    <div
      style={{ background: "#F9F9F9", marginLeft: "255px" }}
      className="min-h-screen p-7"
    >
      <section className="flex justify-between">
        <h3 className="text-black font-bold text-4xl">Dashboard</h3>
        <div className="flex items-center">
          <img
            src="https://secure.gravatar.com/avatar/eb272e3e71d47574170c31890338ef4b?s=250&d=mm&r=g"
            className="w-12 h-12 rounded-full"
          />
          <div className="ml-4">
            <p style={{ color: "#827C8A" }} className="font-light text-base">
              Hello,
            </p>
            <p className="font-semibold">Deniz Warren</p>
          </div>
        </div>
      </section>
      <ListUser />

      
      <ReactFlowProvider>
      <div className="reactflow-wrapper flex" ref={reactFlowWrapper}>
        <ServiceList />
        <section className="mt-7 shadow-md rounded h-auto flex flex-1  justify-between gap-7">
          <div className="w-full relative h-full bg-white rounded-lg p-6">
            <div className="mb-5 h-full">
              <h3 className="font-semibold text-xl">Schedule board</h3>
              <FlowBoard
              reactFlowWrapper={reactFlowWrapper}
              />
            </div>
          </div>
        </section>
        </div>
      </ReactFlowProvider>
    </div>
  );
}

export default PrivateDemo;
