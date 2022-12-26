/* eslint-disable react/prop-types */
import { useCallback } from "react";
import { useStore, getStraightPath } from "reactflow";
import { getEdgeParams } from "../../../utils";
import "./styles/CustomEdge.scss"

const foreignObjectSize = 40;

function CustomEdge({
  id,
  source,
  target,
  markerEnd,
  style,
  sourcePosition,
  targetPosition,
  data
}) {
  const sourceNode = useStore(
    useCallback((store) => store.nodeInternals.get(source), [source])
  );
  const targetNode = useStore(
    useCallback((store) => store.nodeInternals.get(target), [target])
  );

  if (!sourceNode || !targetNode) {
    return null;
  }

  const onEdgeClick = (evt, id) => {
    evt.stopPropagation();
    data?.setEdges((edges) => edges.filter((ed) => ed.id !== id));
  };

  const { sx, sy, tx, ty } = getEdgeParams(sourceNode, targetNode);

  const [edgePath, labelX, labelY] = getStraightPath({
    sourceX: sx,
    sourceY: sy,
    targetX: tx,
    targetY: ty,
    sourcePosition,
    targetPosition,
  });

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
            className="edgebutton"
            onClick={(event) => onEdgeClick(event, id)}
          >
            ×
          </button>
        </div>
      </foreignObject>
    </>
  );
}

export default CustomEdge;
