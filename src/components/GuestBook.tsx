
import { useState } from 'react';
import { Heart, Send, User } from 'lucide-react';

interface GuestMessage {
  id: string;
  name: string;
  message: string;
  timestamp: Date;
  emoji: string;
}

const GuestBook = () => {
  const [messages, setMessages] = useState<GuestMessage[]>([
    {
      id: '1',
      name: 'Family & Friends',
      message: 'Wishing you the most beautiful year ahead, filled with love, laughter, and the sweetest moments with your little miracle on the way! 💕',
      timestamp: new Date(),
      emoji: '🎉'
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [userName, setUserName] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('🎂');

  const emojis = ['🎂', '🎉', '💕', '🌟', '🎈', '✨', '🥳', '💖', '🎊', '🌸'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !newMessage.trim()) return;

    const newGuestMessage: GuestMessage = {
      id: Date.now().toString(),
      name: userName.trim(),
      message: newMessage.trim(),
      timestamp: new Date(),
      emoji: selectedEmoji
    };

    setMessages(prev => [newGuestMessage, ...prev]);
    setNewMessage('');
    setUserName('');
  };

  const formatTimestamp = (timestamp: Date) => {
    return timestamp.toLocaleDateString() + ' at ' + timestamp.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 mb-8">
      <div className="flex items-center space-x-2 mb-6">
        <Heart className="w-5 h-5 text-pink-600" />
        <h3 className="text-xl font-bold text-gray-800">Guest Book</h3>
        <span className="text-sm text-gray-500">({messages.length} messages)</span>
      </div>

      {/* Message Form */}
      <form onSubmit={handleSubmit} className="mb-6 p-4 bg-gray-50 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
          <input
            type="text"
            placeholder="Your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            maxLength={50}
          />
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Pick an emoji:</span>
            <div className="flex space-x-1">
              {emojis.slice(0, 5).map((emoji) => (
                <button
                  key={emoji}
                  type="button"
                  onClick={() => setSelectedEmoji(emoji)}
                  className={`text-xl p-1 rounded ${
                    selectedEmoji === emoji ? 'bg-pink-200' : 'hover:bg-gray-200'
                  }`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <textarea
            placeholder="Leave a birthday message for Habbeb and Hussainaiah Anna..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
            rows={3}
            maxLength={300}
          />
          <button
            type="submit"
            disabled={!userName.trim() || !newMessage.trim()}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
          >
            <Send className="w-4 h-4" />
            <span className="hidden sm:inline">Send</span>
          </button>
        </div>
        <div className="text-xs text-gray-500 mt-1">
          {newMessage.length}/300 characters
        </div>
      </form>

      {/* Messages Display */}
      <div className="space-y-4 max-h-80 overflow-y-auto">
        {messages.map((msg) => (
          <div key={msg.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  <User className="w-5 h-5" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-semibold text-gray-800">{msg.name}</span>
                  <span className="text-xl">{msg.emoji}</span>
                  <span className="text-xs text-gray-500">{formatTimestamp(msg.timestamp)}</span>
                </div>
                <p className="text-gray-700 leading-relaxed">{msg.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuestBook;
