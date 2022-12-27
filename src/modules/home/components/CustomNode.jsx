/* eslint-disable react/prop-types */
import { checkPropTypes } from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { Handle, Position, useStore } from "reactflow";
import { ServiceLogoIcon } from "../shared/constant";
import { preRemoveNode } from "../stores/slices/flow";
import "./styles/CustomNode.css";

const connectionNodeIdSelector = (state) => state.connectionNodeId;

function CustomNode({ data }) {
  const connectionNodeId = useStore(connectionNodeIdSelector);
  const isTarget = connectionNodeId && connectionNodeId !== data.id;
  const dispatch = useDispatch()

  const targetHandleStyle = { zIndex: isTarget ? 3 : 1 };

  const Icon = ServiceLogoIcon[data.icon];

  const handleRemoveNode = () => {
    dispatch(preRemoveNode(data.id))
  }

  return (
    <div className="customNode">
      <div
        style={{
          borderStyle: isTarget ? "dashed" : "solid",
          backgroundColor: isTarget ? "#ffcce3" : "#fff",
        }}
        className="customNodeBody"
      >
        <button onClick={handleRemoveNode}>x</button>
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
          className="sourceHandle"
        />
      </div>
    </div>
  );
}

export default CustomNode;
