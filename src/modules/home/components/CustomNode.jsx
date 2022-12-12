/* eslint-disable react/prop-types */
import { checkPropTypes } from 'prop-types';
import React from 'react';
import { Handle, Position } from 'reactflow';



function CustomNode({ data }) {

  const Icon = data.icon
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400">
      <div className="bg-white flex items-center rounded-2xl w-full">
            <div
              className="flex"
            >
              <Icon />
            </div>

            <div className="ml-4">
              <p className="font-normal text-lg">{data.name}</p>
              <h3 className="font-bold text-xl">{data.number}</h3>
            </div>
          </div>

      <Handle type="target" position={Position.Top} className="w-16 !bg-teal-500" />
      <Handle type="source" position={Position.Bottom} className="w-16 !bg-teal-500" />
    </div>
  );
}

export default CustomNode;