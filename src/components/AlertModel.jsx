import React from 'react';
import { XCircle } from 'lucide-react';

const AlertModal = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm text-center">
        <div className="flex justify-center mb-4 text-red-600">
          <XCircle className="w-10 h-10" />
        </div>
        <h2 className="text-xl font-bold mb-2">Access Denied</h2>
        <p className="text-gray-600 mb-4">{message}</p>
        <button
          onClick={onClose}
          className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default AlertModal;
