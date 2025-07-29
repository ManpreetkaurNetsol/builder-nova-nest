import React, { useState } from 'react';
import { X, Edit2, Trash2 } from 'lucide-react';

interface Comment {
  id: string;
  author: string;
  timestamp: string;
  content: string;
  link?: string;
  avatar?: string;
  canEdit?: boolean;
}

const MapNotes: React.FC = () => {
  const [commentText, setCommentText] = useState('');
  const [comments] = useState<Comment[]>([
    {
      id: '1',
      author: 'Vijay Kumar',
      timestamp: 'Apr 29, 2024  2:34 PM',
      content: 'Woah, your project looks awesome! How long have you been coding for?',
      link: 'https://www.google.com',
      canEdit: false
    },
    {
      id: '2',
      author: 'Vijay Kumar', 
      timestamp: 'Apr 29, 2024  2:34 PM',
      content: 'Woah, your project looks awesome! How long have you been coding for?',
      link: 'https://www.google.com',
      canEdit: false
    },
    {
      id: '3',
      author: 'Vijay Kumar',
      timestamp: 'Apr 29, 2024  2:34 PM', 
      content: 'Woah, your project looks awesome! How long have you been coding for?',
      link: 'https://www.google.com',
      canEdit: false
    },
    {
      id: '4',
      author: 'Sanya Saini',
      timestamp: 'Apr 29, 2024  2:34 PM',
      content: 'But overall it looks incredible. You\'ve nailed the design and the responsiveness at various breakpoints works really well.',
      link: 'https://www.google.com',
      canEdit: true
    },
    {
      id: '5',
      author: 'Vijay Kumar',
      timestamp: 'Apr 29, 2024  2:34 PM',
      content: 'Woah, your project looks awesome! How long have you been coding for?',
      link: 'https://www.google.com',
      canEdit: false
    }
  ]);

  const handleAddNote = () => {
    if (commentText.trim()) {
      console.log('Adding note:', commentText);
      setCommentText('');
    }
  };

  const handleCancel = () => {
    setCommentText('');
  };

  const getUserAvatar = (author: string) => {
    // Generate a simple colored circle for avatar placeholder
    const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500', 'bg-pink-500'];
    const colorIndex = author.length % colors.length;
    return (
      <div className={`w-8 h-8 rounded-full ${colors[colorIndex]} flex items-center justify-center text-white text-sm font-medium`}>
        {author.split(' ').map(n => n[0]).join('').toUpperCase()}
      </div>
    );
  };

  return (
    <div className="flex w-full max-w-[360px] mx-auto h-screen bg-map-notes-white font-proxima">
      <div className="flex flex-col w-full p-6 gap-6 rounded-l-2xl bg-map-notes-white shadow-[0_16px_40px_4px_rgba(0,0,0,0.06)]">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-map-notes-black leading-7">Map Notes</h1>
            <button className="flex w-8 h-8 p-1.5 justify-center items-center rounded-lg hover:bg-gray-100 transition-colors">
              <X className="w-5 h-5 text-map-notes-black" strokeWidth={1.25} />
            </button>
          </div>
          <div className="w-full h-px bg-map-notes-gray-20"></div>
        </div>

        {/* Comments Section */}
        <div className="flex flex-col flex-1 justify-end gap-4">
          <div className="flex flex-col justify-end gap-2 h-full max-h-[736px] overflow-y-auto">
            {comments.map((comment) => (
              <div 
                key={comment.id} 
                className={`flex p-4 flex-col gap-2 rounded-lg ${
                  comment.canEdit ? 'bg-map-notes-gray-light' : 'bg-map-notes-blue-bg'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {getUserAvatar(comment.author)}
                    <div className="flex flex-col">
                      <div className="text-sm font-semibold text-map-notes-black leading-5">
                        {comment.author}
                      </div>
                      <div className="text-xs text-map-notes-black leading-[18px]">
                        {comment.timestamp}
                      </div>
                    </div>
                  </div>
                  {comment.canEdit && (
                    <div className="flex items-center gap-1">
                      <button className="flex w-6 h-6 p-1 justify-center items-center rounded-lg hover:bg-gray-200 transition-colors">
                        <Edit2 className="w-4 h-4 text-map-notes-black" strokeWidth={1} />
                      </button>
                      <button className="flex w-6 h-6 p-1 justify-center items-center rounded-lg hover:bg-gray-200 transition-colors">
                        <Trash2 className="w-4 h-4 text-map-notes-red" strokeWidth={1} />
                      </button>
                    </div>
                  )}
                </div>
                <div className="text-base text-map-notes-black leading-6">
                  {comment.content}
                </div>
                {comment.link && (
                  <a 
                    href={comment.link} 
                    className="text-sm font-semibold text-map-notes-blue leading-5 underline hover:no-underline transition-all"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {comment.link}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Comment Input Section */}
          <div className="flex flex-col gap-4">
            <div className="flex p-3 flex-col gap-2.5 rounded-lg border border-black/10 bg-map-notes-gray-00">
              <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Your Comment"
                className="w-full text-base text-map-notes-black leading-6 bg-transparent resize-none outline-none placeholder:opacity-50"
                rows={3}
              />
            </div>
            <div className="flex justify-end gap-4">
              <button
                onClick={handleCancel}
                className="flex px-3 py-2 items-center gap-3 rounded-lg border border-black/10 bg-map-notes-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-base text-map-notes-black leading-6">Cancel</span>
              </button>
              <button
                onClick={handleAddNote}
                className="flex px-3 py-2 items-center gap-3 rounded-lg bg-map-notes-red hover:bg-red-600 transition-colors"
              >
                <span className="text-base text-map-notes-white leading-6">Add Note</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapNotes;
