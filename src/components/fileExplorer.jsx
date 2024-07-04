import React, { useState } from "react";
import "./fileExplorer.css";
import explorerData from "./fileExplorerConst";

const FileExplorer = () => {
  const RenderFileData = ({ explorerDataParam, renderIndex }) => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <p
          style={{
            marginLeft: `${20 + renderIndex}px`,
            cursor: explorerDataParam.isFolder ? "pointer" : "not-allowed",
          }}
          onClick={() => {
            setOpen(!open);
          }}
        >
          {explorerDataParam.name}
        </p>

        {open && explorerDataParam.isFolder
          ? explorerDataParam.items.map((subData) => (
              <RenderFileData
                explorerDataParam={subData}
                renderIndex={renderIndex * 5}
              />
            ))
          : ""}
      </div>
    );
  };

  return (
    <div>
      <RenderFileData explorerDataParam={explorerData} renderIndex={1} />
    </div>
  );
};

export default FileExplorer;
