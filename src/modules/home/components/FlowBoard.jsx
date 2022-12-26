/* eslint-disable react/prop-types */
import React, { useCallback, useMemo, useRef, useState } from "react";
import ReactFlow, {
  Controls,
  MarkerType,
} from "reactflow";

import CustomConnectionLine from "./CustomConnectionLine";

import "reactflow/dist/base.css";

import CustomNode from "./CustomNode";
import CustomEdge from "./CustomEdge";
import { useDispatch, useSelector } from "react-redux";
import { preAddNode, preConnect, preEdgesChange, preNodesChange } from "../stores/slices/flow";

const connectionLineStyle = {
  strokeWidth: 3,
  stroke: "black",
};

let id = 0;
const getId = () => `dndnode_${id++}`;

const edgeTypes = {
  floating: CustomEdge,
};

const defaultEdgeOptions = {
  style: { strokeWidth: 3, stroke: "black" },
  type: "floating",
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: "black",
  },
};

const FlowBoard = ({ reactFlowWrapper }) => {
  const initNodes = useSelector((state) => state.flow.initNodes);
  const initEdges = useSelector((state) => state.flow.initEdges);

  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const nodeTypes = useMemo(() => ({ messageService: CustomNode }), []);
  const dispatch = useDispatch();

  const nodeChanges = (data) => {
    dispatch(preNodesChange(data))
  };

  const EdgeChanges = (data) => {
    dispatch(preEdgesChange(data))
  };

  const connect = (data) => {
    dispatch(preConnect(data))
  };

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const service = JSON.parse(
        event.dataTransfer.getData("application/reactflow")
      );

      // check if the dropped element is valid
      if (typeof service === "undefined" || !service) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getId(),
        type: "messageService",
        position,
        data: {...service, id: getId()},
      };

      // setNodes((nds) => nds.concat(newNode));
      dispatch(preAddNode(newNode))
    },
    [reactFlowInstance]
  );

  return (
    <ReactFlow
      nodes={initNodes}
      edges={initEdges}
      onNodesChange={nodeChanges}
      onEdgesChange={EdgeChanges}
      onConnect={connect}
      onInit={setReactFlowInstance}
      onDrop={onDrop}
      onDragOver={onDragOver}
      fitView
      edgeTypes={edgeTypes}
      nodeTypes={nodeTypes}
      connectionLineComponent={CustomConnectionLine}
      connectionLineStyle={connectionLineStyle}
      defaultEdgeOptions={defaultEdgeOptions}
    >
      {/* <MiniMap /> */}
      <Controls />
    </ReactFlow>
  );
};

export default FlowBoard;
