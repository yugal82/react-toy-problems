import { useState } from 'react';
import Interests from './Interests';
import Profile from './Profile';
import Settings from './Settings';

const TABS = [
  {
    name: 'Profile',
    component: Profile,
  },
  {
    name: 'Interests',
    component: Interests,
  },
  {
    name: 'Settings',
    component: Settings,
  },
];

export type UserData = {
  name: string;
  age: number;
  email: string;
  interests: string[];
  theme: string;
};

const TabForm = () => {
  const [activeTabIdx, setActiveTabIdx] = useState<number>(0);
  const [data, setData] = useState<UserData>({
    name: 'Abc',
    age: 23,
    email: 'abc@gmail.com',
    interests: ['Coding', 'Football', 'F1'],
    theme: 'dark',
  });

  const ActiveTabComponent = TABS[activeTabIdx].component;

  return (
    <div className="mt-10">
      <div className="w-full flex items-center">
        {TABS?.map((tab, index) => (
          <div key={index} onClick={() => setActiveTabIdx(index)} className="border border-black p-2 cursor-pointer">
            {tab?.name}
          </div>
        ))}
      </div>

      <div className="w-full flex border border-black h-52">
        <ActiveTabComponent data={data} setData={setData} />
      </div>

      {activeTabIdx === TABS.length - 1 && (
        <div className="mt-3 flex items-center justify-center">
          <button className="border border-black p-2 cursor-pointer">Submit</button>
        </div>
      )}
    </div>
  );
};

export default TabForm;
