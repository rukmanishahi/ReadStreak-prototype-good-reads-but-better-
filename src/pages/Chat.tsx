
import Navbar from '@/components/Navbar';
import ChatBox from '@/components/ChatBox';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';
import { useState } from 'react';

// Mock data for active discussions
const discussions = [
  {
    id: 1,
    title: "The Midnight Library",
    participants: 8,
    messages: 42,
    active: true
  },
  {
    id: 2,
    title: "Fantasy Book Club - May Read",
    participants: 12,
    messages: 78,
    active: false
  },
  {
    id: 3,
    title: "Non-Fiction Lovers",
    participants: 5,
    messages: 23,
    active: false
  },
  {
    id: 4,
    title: "New Releases Discussion",
    participants: 9,
    messages: 31,
    active: false
  }
];

// Mock data for online users
const onlineUsers = [
  { id: 1, name: "BookLover42" },
  { id: 2, name: "ReadingRaven" },
  { id: 3, name: "LitFanatic" },
  { id: 4, name: "PageTurner" },
  { id: 5, name: "ClassicsFan" },
  { id: 6, name: "NovelNerd" },
  { id: 7, name: "PoetryPro" }
];

const Chat = () => {
  const [activeDiscussion, setActiveDiscussion] = useState(discussions[0]);
  
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-soft-beige pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <header className="my-8">
              <h1 className="text-3xl font-serif font-bold mb-2">Readers Chat</h1>
              <p className="text-text-brown/80">Connect with other readers and discuss your favorite books</p>
            </header>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-3">
                <ChatBox />
              </div>
              
              <div className="space-y-6">
                {/* Discussions */}
                <Card className="border border-soft-pink border-opacity-30 rounded-xl overflow-hidden book-shadow">
                  <div className="bg-soft-yellow p-3 border-b border-soft-pink border-opacity-20">
                    <h3 className="font-serif text-lg">Discussions</h3>
                  </div>
                  
                  <div className="p-3 space-y-2 bg-white">
                    {discussions.map(discussion => (
                      <button
                        key={discussion.id}
                        onClick={() => setActiveDiscussion(discussion)}
                        className={`w-full text-left p-2 rounded-md text-sm transition-colors ${
                          discussion.id === activeDiscussion.id
                            ? 'bg-soft-pink text-primary-foreground'
                            : 'hover:bg-soft-yellow'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4" />
                          <span className="font-medium">{discussion.title}</span>
                        </div>
                        <div className="text-xs mt-1 opacity-80">
                          {discussion.participants} participants • {discussion.messages} messages
                        </div>
                      </button>
                    ))}
                    
                    <Button variant="outline" className="w-full mt-2 border-soft-pink text-text-brown hover:bg-soft-pink hover:text-primary-foreground">
                      Create New Discussion
                    </Button>
                  </div>
                </Card>
                
                {/* Online Users */}
                <Card className="border border-soft-pink border-opacity-30 rounded-xl overflow-hidden book-shadow">
                  <div className="bg-soft-yellow p-3 border-b border-soft-pink border-opacity-20">
                    <h3 className="font-serif text-lg">Online Readers ({onlineUsers.length})</h3>
                  </div>
                  
                  <div className="p-3 space-y-2 bg-white">
                    {onlineUsers.map(user => (
                      <div key={user.id} className="flex items-center gap-2">
                        <div className="relative">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback className="bg-soft-yellow text-xs">
                              {user.name[0]}
                            </AvatarFallback>
                          </Avatar>
                          <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-green-500 border border-white"></span>
                        </div>
                        <span className="text-sm">{user.name}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
