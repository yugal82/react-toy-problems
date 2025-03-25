import { useState } from 'react';
import { ExplorerFolder } from '../model';
import { AiFillFileAdd, AiFillFolderAdd } from 'react-icons/ai';

type Props = {
  explorer: ExplorerFolder;
};

type ShowInputType = {
  visible: boolean;
  isFolder: boolean | null;
};

const Folder = ({ explorer }: Props) => {
  const [expand, setExpand] = useState<boolean>(false);
  const [showInput, setshowInput] = useState<ShowInputType>({
    visible: false,
    isFolder: null,
  });

  const handleAdd = (isFolder: boolean) => {
    setshowInput({ visible: true, isFolder: isFolder });
    setExpand(true);
  };

  const onSubmitNew = (e: any) => {
    if (e?.keyCode == 13 && e?.target.value) {
      setshowInput({ visible: false, isFolder: null });
    }
  };

  if (explorer?.isFolder) {
    return (
      <div className="folder mt-1">
        <div className="w-48 bg-gray-200 p-1 flex items-center justify-between">
          <span onClick={() => setExpand(!expand)} className="cursor-pointer">
            📁{explorer?.name}
          </span>
          <div className="flex">
            <AiFillFolderAdd onClick={() => handleAdd(true)} className="cursor-pointer" />
            <AiFillFileAdd onClick={() => handleAdd(false)} className="cursor-pointer" />
          </div>
        </div>
        <div className={`${expand ? 'block' : 'hidden'} pl-3`}>
          {showInput?.visible && (
            <div>
              {showInput?.isFolder ? '📁' : '📄'}
              <input
                onKeyDown={onSubmitNew}
                type="text"
                autoFocus
                onBlur={() => setshowInput({ visible: false, isFolder: null })}
                className="outline-none border border-black rounded-sm"
              />
            </div>
          )}
          {explorer?.items?.map((exp: ExplorerFolder) => {
            return <Folder key={exp?.id} explorer={exp} />;
          })}
        </div>
      </div>
    );
  } else {
    return <div className="file p-1">📄{explorer?.name}</div>;
  }
};

export default Folder;
