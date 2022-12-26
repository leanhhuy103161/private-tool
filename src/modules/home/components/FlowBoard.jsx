/* eslint-disable react/prop-types */
import React, { useCallback, useMemo, useRef, useState } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
  MarkerType,
} from "reactflow";

import CustomConnectionLine from "./CustomConnectionLine";

import "reactflow/dist/base.css";

import CustomNode from "./CustomNode";
import CustomEdge from "./CustomEdge";
import { useSelector } from "react-redux";

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
  const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const nodeTypes = useMemo(() => ({ messageService: CustomNode }), []);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) => addEdge({ ...params, data: { setEdges } }, eds)),
    []
  );

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
        data: service,
      };

      console.log(newNode);

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
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
