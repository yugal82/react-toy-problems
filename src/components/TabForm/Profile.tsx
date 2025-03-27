import React from 'react';
import { UserData } from './TabForm';

interface Props {
  data: UserData;
  setData: React.Dispatch<React.SetStateAction<UserData>>;
}
const Profile = ({ data, setData }: Props) => {
  const { name, age, email } = data;

  const onChangeInputField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputField = e.target.id;
    setData((prev) => ({ ...prev, [inputField]: e.target.value }));
  };

  return (
    <div>
      <div className="">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className="border border-black outline-none p-1 ml-2"
          autoComplete="off"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => onChangeInputField(e)}
        />
      </div>
      <div className="">
        <label htmlFor="age">Name</label>
        <input
          type="number"
          id="age"
          className="border border-black outline-none p-1 ml-2"
          autoComplete="off"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => onChangeInputField(e)}
        />
      </div>
      <div className="">
        <label htmlFor="name">Name</label>
        <input
          type="email"
          id="name"
          className="border border-black outline-none p-1 ml-2"
          autoComplete="off"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => onChangeInputField(e)}
        />
      </div>
    </div>
  );
};

export default Profile;
