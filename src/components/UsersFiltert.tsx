import React, { useState } from "react";
import { SortType } from "../types/SortType";

interface Props {
  textChange: (text: string) => void;
  sortChange: (sortType: SortType) => void;
  formChange: (isActive: boolean) => void;
}

export const UsersFilter: React.FC<Props> = ({ textChange, sortChange, formChange }) => {
  const [text, setText] = useState('');

  const handleSubmitText = () => {
    textChange(text);
  };

  const handleClickAll = () => {
    sortChange(SortType.ALL);
    setText('');
    textChange('');
  }

  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center">
        <button
          className="px-4 py-1.5 border-2 border-green-500 text-xl rounded-lg
          text-green-500 hover:bg-green-500 hover:text-white transition duration-300"
          onClick={handleClickAll}
        >
          All

        </button>

        <button
          className="px-4 py-1.5 border-2 border-green-500 text-xl rounded-lg ml-1
              text-green-500 hover:bg-green-500 hover:text-white transition duration-300"
            onClick={() => sortChange(SortType.ASD)}
        >
          ACS

        </button>

        <button
          className="px-4 py-1.5 border-2 border-green-500 text-xl rounded-lg ml-1
              text-green-500 hover:bg-green-500 hover:text-white transition duration-300"
          onClick={() => sortChange(SortType.DESC)}
        >
          DESC

        </button>
      </div>

      <button
        className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none"
        onClick={() => formChange(true)}
      >
        Show Form
      </button>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 border-2 rounded-lg focus:outline-non focus:border-gray-600"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button
          className="px-4 py-1.5 border-2 border-green-500
        hover:bg-green-500 rounded-lg text-green-500 hover:text-white  text-xl transition duration-300
        "
          onClick={handleSubmitText}
        >
          Search
        </button>
      </div>
    </div>
  )
}

