/* eslint-disable react/prop-types */
import React, { useCallback, useMemo, useRef, useState } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
} from "reactflow";
import { ReactComponent as Zalo } from "../../../assets/service-logo/zalo.svg";

import "reactflow/dist/base.css";

import CustomNode from "./CustomNode";

const initNodes = [
  {
    id: '1',
    type: 'messageService',
    data: { name: 'Zalo', number: 17, icon: Zalo},
    position: { x: 0, y: 50 },
  }
];

let id = 0;
const getId = () => `dndnode_${id++}`;



const FlowBoard = ({reactFlowWrapper}) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const nodeTypes = useMemo(() => ({ messageService: CustomNode }), []);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const service = JSON.parse(event.dataTransfer.getData('application/reactflow'));

      
      // check if the dropped element is valid
      if (typeof service === 'undefined' || !service) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getId(),
        type: 'messageService',
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
      nodeTypes={nodeTypes}
    >
      {/* <MiniMap /> */}
      <Controls />
    </ReactFlow>
  );
};

export default FlowBoard;