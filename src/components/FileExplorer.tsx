import { explorer } from '../data/fileExplorer';
import Folder from './Folder';

const FileExplorer = () => {
  return (
    <div className="w-full m-4">
      <Folder explorer={explorer} />
    </div>
  );
};

export default FileExplorer;
