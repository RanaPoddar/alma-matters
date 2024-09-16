"use client"
import React, { useState } from 'react';

interface Announcement {
  id: number;
  title: string;
  content: string;
  date: string;
}

const CollegeAnnouncementsPage: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentAnnouncement, setCurrentAnnouncement] = useState<Announcement | null>(null);
  const [error, setError] = useState('');

  const handleAddAnnouncement = () => {
    if (!title || !content) {
      setError('Both title and content are required.');
      return;
    }
    const newAnnouncement: Announcement = {
      id: announcements.length + 1,
      title,
      content,
      date: new Date().toLocaleDateString(),
    };
    setCurrentAnnouncement(newAnnouncement);
    setIsModalOpen(true);
    setError('');
  };

  const confirmAddAnnouncement = () => {
    if (currentAnnouncement) {
      setAnnouncements([currentAnnouncement, ...announcements]);
      setTitle('');
      setContent('');
      closeModal();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentAnnouncement(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">College Announcements</h1>
      
      {/* Announcement Form */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Create Announcement</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          rows={4}
        />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          onClick={handleAddAnnouncement}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Post Announcement
        </button>
      </div>

      {/* Announcements List */}
      <div>
        {announcements.map((announcement) => (
          <div key={announcement.id} className="bg-white shadow-md rounded-lg p-6 mb-4">
            <h3 className="text-xl font-bold mb-2">{announcement.title}</h3>
            <p className="text-gray-600 mb-2">{announcement.date}</p>
            <p className="text-gray-700">{announcement.content}</p>
          </div>
        ))}
      </div>

      {/* Confirmation Modal */}
      {isModalOpen && currentAnnouncement && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Confirm Announcement</h2>
            <p className="mb-4">Are you sure you want to post this announcement?</p>
            <div className="flex justify-end space-x-2">
              <button 
                onClick={closeModal} 
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button 
                onClick={confirmAddAnnouncement} 
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollegeAnnouncementsPage;