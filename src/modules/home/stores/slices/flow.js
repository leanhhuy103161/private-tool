import { createSlice } from "@reduxjs/toolkit";
import { services } from "../../shared/constant";
import { addEdge, applyNodeChanges, applyEdgeChanges } from "reactflow";

const initialNodes = [
  {
    id: "1",
    type: "messageService",
    data: { name: "Zalo", number: 17, icon: services.zalo, id: "1" },
    position: { x: 0, y: 50 },
  },
  {
    id: "2",
    type: "messageService",
    data: { name: "Sms", number: 17, icon: services.sms, id: "2" },
    position: { x: 310, y: 350 },
  },
];

const initialEdges = [
  {
    style: {
      strokeWidth: 3,
      stroke: "black",
    },
    type: "floating",
    markerEnd: {
      type: "arrowclosed",
      color: "black",
    },
    source: "1",
    sourceHandle: null,
    target: "2",
    targetHandle: null,
    id: "reactflow__edge-1-2",
  },
];

const flowReducer = createSlice({
  name: "flow",
  initialState: {
    initNodes: initialNodes,
    initEdges: initialEdges,
  },
  reducers: {
    onAddNode: (state, action) => {
      state.initNodes = state.initNodes.concat(action.payload);
    },
    onNodesChange: (state, action) => {
      state.initNodes = applyNodeChanges(action.payload, state.initNodes);
    },
    onEdgesChange: (state, action) => {
      state.initEdges = applyEdgeChanges(action.payload, state.initEdges);
    },
    onConnect: (state, action) => {
      state.initEdges = addEdge(action.payload, state.initEdges);
    },
    onRemoveEdge: (state, action) => {
      console.log(state.initEdges);
      state.initEdges = state.initEdges.filter(
        (ed) => ed.id !== action.payload
      );
    },
    onRemoveNode: (state, action) => {
      state.initNodes = state.initNodes.filter(
        (ed) => ed.id !== action.payload
      );
      state.initEdges = state.initEdges.filter(
        (ed) => ed.target !== action.payload && ed.source !== action.payload
      );
    },
    onSaveFlow: (state, action) => {
      state.initNodes = action.payload.nodes;
      state.initEdges = action.payload.edges;
    },
    onRestoreFlow: () => {},
  },
});

export default flowReducer.reducer;

// Actions

const {
  onNodesChange,
  onEdgesChange,
  onConnect,
  onAddNode,
  onRemoveEdge,
  onRemoveNode,
  onSaveFlow,
} = flowReducer.actions;

export const preNodesChange = (action) => async (dispatch) => {
  try {
    dispatch(onNodesChange(action));
  } catch (e) {
    return console.error(e.message);
  }
};

export const preEdgesChange = (action) => async (dispatch) => {
  try {
    dispatch(onEdgesChange(action));
  } catch (e) {
    return console.error(e.message);
  }
};

export const preConnect = (action) => async (dispatch) => {
  try {
    if (action.source !== action.target) dispatch(onConnect(action));
  } catch (e) {
    return console.error(e.message);
  }
};

export const preAddNode = (action) => async (dispatch) => {
  try {
    dispatch(onAddNode(action));
  } catch (e) {
    return console.error(e.message);
  }
};

export const preRemoveEdge = (action) => async (dispatch) => {
  try {
    dispatch(onRemoveEdge(action));
  } catch (e) {
    return console.error(e.message);
  }
};

export const preRemoveNode = (action) => async (dispatch) => {
  try {
    dispatch(onRemoveNode(action));
  } catch (e) {
    return console.error(e.message);
  }
};

export const preOnSaveFlow = (action) => async (dispatch) => {
  try {
    dispatch(onSaveFlow(action));
  } catch (e) {
    return console.error(e.message);
  }
}
