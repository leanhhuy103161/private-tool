/* eslint-disable react/prop-types */
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useStore, getStraightPath } from "reactflow";
import { getEdgeParams } from "../../../utils";
import { preRemoveEdge } from "../stores/slices/flow";
import "./styles/CustomEdge.scss"

const foreignObjectSize = 40;

function CustomEdge({
  id,
  source,
  target,
  markerEnd,
  style,
  sourcePosition,
  targetPosition
}) {
  const sourceNode = useStore(
    useCallback((store) => store.nodeInternals.get(source), [source])
  );
  const targetNode = useStore(
    useCallback((store) => store.nodeInternals.get(target), [target])
  );
  const dispatch = useDispatch();

  if (!sourceNode || !targetNode) {
    return null;
  }

  const onEdgeClick = (evt, id) => {
    evt.stopPropagation();
    dispatch(preRemoveEdge(id))
  };

  const { sx, sy, tx, ty } = getEdgeParams(sourceNode, targetNode);

  const [edgePath, labelX, labelY] = getStraightPath({
    sourceX: sx,
    sourceY: sy,
    sourcePosition,
    targetX: tx,
    targetY: ty,
    targetPosition,
  });

  const onEdgeButtonClick = (evt, id) => {
    console.log(id);
    console.log(data);
    evt.stopPropagation();

    data?.setEdges((edges) => edges.filter((ed) => ed.id !== id));
  };

  return (
    <>
      <path
        id={id}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
        style={style}
      />
      <foreignObject
        width={foreignObjectSize}
        height={foreignObjectSize}
        x={labelX - foreignObjectSize / 2}
        y={labelY - foreignObjectSize / 2}
        className="edgebutton-foreignobject"
        requiredExtensions="http://www.w3.org/1999/xhtml"
      >
        <div>
          <button
            className="edgebutton w-3 h-3 rounded-full bg-gray-100"
            onClick={(event) => onEdgeButtonClick(event, id)}
          >
            ×
          </button>
        </div>
      </foreignObject>
    </>
  );
}

export default CustomEdge;
