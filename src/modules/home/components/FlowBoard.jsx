/* eslint-disable react/prop-types */
import React, { useCallback, useMemo, useRef, useState } from "react";
import ReactFlow, {
  Controls,
  MarkerType,
  useReactFlow,
} from "reactflow";

import CustomConnectionLine from "./CustomConnectionLine";

import "reactflow/dist/base.css";

import CustomNode from "./CustomNode";
import CustomEdge from "./CustomEdge";
import { useDispatch, useSelector } from "react-redux";
import { preAddNode, preClear, preConnect, preEdgesChange, preNodesChange, preRestoreFlow, preSaveFlow } from "../stores/slices/flow";

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

const flowKey = 'example-flow';

const FlowBoard = ({ reactFlowWrapper }) => {
  const initNodes = useSelector((state) => state.flow.initNodes);
  const initEdges = useSelector((state) => state.flow.initEdges);

  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const nodeTypes = useMemo(() => ({ messageService: CustomNode }), []);
  const { setViewport } = useReactFlow();
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

      let id = getId();

      const newNode = {
        id: id,
        type: "messageService",
        position,
        data: {...service, id: id},
      };

      // setNodes((nds) => nds.concat(newNode));
      dispatch(preAddNode(newNode))
    },
    [reactFlowInstance]
  );

  const onSave = useCallback(() => {
    if (reactFlowInstance) {
      const flow = reactFlowInstance.toObject();
      dispatch(preSaveFlow(flow))
    }
  }, [reactFlowInstance]);

  const onRestore = () => {
    const restoreFlow = async () => {
      const flow = JSON.parse(localStorage.getItem(flowKey));
      if (flow) {
        const { x = 0, y = 0, zoom = 1 } = flow.viewport;
        let payload = {
          nodes: flow.nodes,
          edges: flow.edges
        }
        dispatch(preRestoreFlow(payload))
        setViewport({ x, y, zoom });
      }
    };

    restoreFlow();
  };

  const onClear = () => {
    dispatch(preClear())
  }

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
      <div className="inline-flex absolute top-1 right-1 z-10">
        <button className="bg-white-300 border-2 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-l" onClick={onSave}>save</button>
        <button className="bg-white-300 border-2 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2" onClick={onClear}>clear</button>
        <button className="bg-white-300 border-2 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-r" onClick={onRestore}>restore</button>
      </div>
      <Controls />
    </ReactFlow>
  );
};

export default FlowBoard;
