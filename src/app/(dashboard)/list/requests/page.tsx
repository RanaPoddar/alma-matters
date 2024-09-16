"use client"
import React, { useState } from 'react';

interface Request {
  id: number;
  name: string;
  date: string;
  status: 'pending' | 'approved' | 'rejected';
  profileUrl: string;
  documentsUrl: string;
}

const initialRequests: Request[] = [
  { id: 1, name: 'John Doe', date: '2023-10-01', status: 'pending', profileUrl: '#', documentsUrl: '/documents/john-doe' },
  { id: 2, name: 'Jane Smith', date: '2023-10-02', status: 'pending', profileUrl: '/profile/jane-smith', documentsUrl: '/documents/jane-smith' },
  // Add more requests as needed
];

const CollegeRequestsPage: React.FC = () => {
  const [requests, setRequests] = useState<Request[]>(initialRequests);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRequest, setCurrentRequest] = useState<Request | null>(null);
  const [actionType, setActionType] = useState<'approve' | 'reject' | null>(null);

  const handleApprove = (id: number) => {
    setRequests(requests.map(request => 
      request.id === id ? { ...request, status: 'approved' } : request
    ));
    closeModal();
  };

  const handleReject = (id: number) => {
    setRequests(requests.map(request => 
      request.id === id ? { ...request, status: 'rejected' } : request
    ));
    closeModal();
  };

  const openModal = (request: Request, action: 'approve' | 'reject') => {
    setCurrentRequest(request);
    setActionType(action);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentRequest(null);
    setActionType(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Pending Requests</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        {requests.filter(request => request.status === 'pending').map(request => (
          <div key={request.id} className="flex justify-between items-center mb-4 p-4 border-b">
            <div>
              <h2 className="text-xl font-semibold">{request.name}</h2>
              <p className="text-gray-600">Requested on: {request.date}</p>
            </div>
            <div className="flex space-x-2">
              <a 
                href={request.profileUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                View Profile
              </a>
              <a 
                href={request.documentsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                View Documents
              </a>
              <button 
                onClick={() => openModal(request, 'approve')} 
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Approve
              </button>
              <button 
                onClick={() => openModal(request, 'reject')} 
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && currentRequest && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Confirm {actionType === 'approve' ? 'Approval' : 'Rejection'}</h2>
            <p className="mb-4">Are you sure you want to {actionType} the request from {currentRequest.name}?</p>
            <div className="flex justify-end space-x-2">
              <button 
                onClick={closeModal} 
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button 
                onClick={() => actionType === 'approve' ? handleApprove(currentRequest.id) : handleReject(currentRequest.id)} 
                className={`px-4 py-2 rounded ${actionType === 'approve' ? 'bg-green-500' : 'bg-red-500'} text-white`}
              >
                {actionType === 'approve' ? 'Approve' : 'Reject'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollegeRequestsPage;