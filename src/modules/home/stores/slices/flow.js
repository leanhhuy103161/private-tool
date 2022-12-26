import { createSlice } from "@reduxjs/toolkit";
import { services } from "../../shared/constant";
// Slice

// const initialNotification = [];
const initialNodes = [
  {
    id: "1",
    type: "messageService",
    data: { name: "Zalo", number: 17, icon: services.zalo },
    position: { x: 0, y: 50 },
  },
];

const initialEdges = [
  {
    id: 'edge-1-2',
    source: 'ewb-1',
    target: 'ewb-2',
    type: 'buttonedge',
  },
];

const flowReducer = createSlice({
  name: "flow",
  initialState: {
    initNodes: initialNodes,
    initEdges: initialEdges,
  },
  reducers: {
    pushNotiSuccess: (state, action) => {
      state.listNoti.unshift(action.payload);
      state.totalNoti++;
    }
  },
});

export default flowReducer.reducer;

// Actions

const { pushNotiSuccess } = flowReducer.actions;

export const pushNofi = (action) => async (dispatch) => {
  try {
    dispatch(pushNotiSuccess(action));
  } catch (e) {
    return console.error(e.message);
  }
};
