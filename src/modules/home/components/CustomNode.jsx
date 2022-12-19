/* eslint-disable react/prop-types */
import { checkPropTypes } from "prop-types";
import React from "react";
import { Handle, Position, useStore } from "reactflow";
import { ServiceLogoIcon } from "../shared/constant";
import "./styles/CustomNode.css";

const connectionNodeIdSelector = (state) => state.connectionNodeId;

function CustomNode({ data }) {
  const connectionNodeId = useStore(connectionNodeIdSelector);
  const isTarget = connectionNodeId && connectionNodeId !== data.id;

  const targetHandleStyle = { zIndex: isTarget ? 3 : 1 };

  const Icon = ServiceLogoIcon[data.icon];
  return (
    <div className="customNode">
      <div
        style={{
          borderStyle: isTarget ? "dashed" : "solid",
          backgroundColor: isTarget ? "#ffcce3" : "#fff",
        }}
        className="customNodeBody"
      >
        <div className="flex">
          <Icon />
        </div>
        <div className="ml-4">
          <p className="font-normal text-lg">{data.name}</p>
          <h3 className="font-bold text-xl">{data.number}</h3>
        </div>
        <Handle
          type="target"
          style={targetHandleStyle}
          position={Position.Left}
          className="targetHandle"
        />
        <Handle
          type="source"
          style={{ zIndex: 2 }}
          position={Position.Right}
          className="targetHandle"
        />
      </div>
    </div>
  );
}

export default CustomNode;
