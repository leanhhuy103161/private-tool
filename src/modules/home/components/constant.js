import { MarkerType } from "reactflow";
import { services } from "../shared/constant";


export const connectionLineStyle = {
  strokeWidth: 1,
  stroke: "black",
};

export const initNodes = [
  {
    id: "service_node_99",
    type: "messageService",
    data: { name: "Zalo", number: 17, icon: services.zalo },
    position: { x: 0, y: 50 },
  },
  {
    id: "service_node_100",
    type: "messageService",
    data: { name: "Messenger", number: 20, icon: services.messenger },
    position: { x: 0, y: 100 },
  }
];

export const defaultEdgeOptions = {
  style: { strokeWidth: 1, stroke: "black" },
  type: "floating",
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: "black",
  },
};