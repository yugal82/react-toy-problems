import { useState } from 'react';
import { explorer } from '../data/fileExplorer';
import Folder from './Folder';
import useAddNewNode from '../hooks/useAddNewNode';
import { ExplorerFolder } from '../model';

const FileExplorer = () => {
  const [explorerData, setExplorerData] = useState<ExplorerFolder>(explorer);

  const { insertNode } = useAddNewNode();

  const handleInsertNode = (folderId: string, name: string, isFolder: boolean) => {
    const finalTree = insertNode(explorerData, folderId, name, isFolder);
    setExplorerData(finalTree);
  };

  return (
    <div className="w-full m-4">
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
};

export default FileExplorer;
