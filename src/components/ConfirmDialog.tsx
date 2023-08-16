import React from "react";

// interface ConfirmDialogProps {
//   isOpen: boolean;
//   onCancel: () => void;
//   onConfirm: () => void;
// }

interface Props {
  handleDelete: (id: number) => void,
  deleteId: number,
  setDeleteId: (id: number) => void,
}

export const ConfirmDialog: React.FC<Props> = ({handleDelete, deleteId, setDeleteId}) => {
  // if (!isOpen) {
  //   return null;
  // }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    handleDelete(deleteId);
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-60"></div>
      <div className="bg-white p-6 rounded shadow-md z-10">
        <p className="mb-4">Are you sure you want to delete this contact?</p>
        <div className="flex justify-end">
          <button
            className="mr-2 bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded focus:outline-none"
            onClick={() => setDeleteId(0)}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded focus:outline-none"
            onClick={handleClick}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
