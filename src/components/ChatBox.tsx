
import { useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageCircle } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: number;
  text: string;
  sender: string;
  avatar?: string;
  timestamp: Date;
  isUser?: boolean;
}

// Mock data for chat messages
const initialMessages: Message[] = [
  {
    id: 1,
    text: "Has anyone read 'The Midnight Library'? I'm thinking about starting it.",
    sender: "BookLover42",
    timestamp: new Date(Date.now() - 3600000 * 3),
    isUser: false
  },
  {
    id: 2,
    text: "I just finished it last week! It's amazing, really makes you think about life choices.",
    sender: "ReadingRaven",
    timestamp: new Date(Date.now() - 3600000 * 2.5),
    isUser: false
  },
  {
    id: 3,
    text: "I'm halfway through it. Love the concept, but finding some parts a bit slow.",
    sender: "You",
    timestamp: new Date(Date.now() - 3600000 * 2),
    isUser: true
  },
  {
    id: 4,
    text: "I felt that way too around the middle, but it picks up! The ending is worth it.",
    sender: "BookLover42",
    timestamp: new Date(Date.now() - 3600000 * 1),
    isUser: false
  },
  {
    id: 5,
    text: "What are you all reading next? I need recommendations!",
    sender: "LitFanatic",
    timestamp: new Date(Date.now() - 3600000 * 0.5),
    isUser: false
  }
];

const ChatBox = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    const message: Message = {
      id: Date.now(),
      text: newMessage,
      sender: "You",
      timestamp: new Date(),
      isUser: true
    };
    
    setMessages([...messages, message]);
    setNewMessage('');
  };
  
  // Format time as HH:MM
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  return (
    <Card className="flex flex-col h-[500px] border border-soft-pink border-opacity-30 rounded-xl overflow-hidden book-shadow">
      <div className="bg-soft-yellow p-3 border-b border-soft-pink border-opacity-20">
        <h3 className="font-serif text-lg flex items-center gap-2">
          <MessageCircle className="h-5 w-5 text-accent-pink" />
          Readers Chat
        </h3>
      </div>
      
      <ScrollArea className="flex-grow p-3 bg-white">
        <div className="space-y-3">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex gap-2 max-w-[80%] ${msg.isUser ? 'flex-row-reverse' : ''}`}>
                <Avatar className="h-8 w-8 flex-shrink-0">
                  <AvatarFallback className={msg.isUser ? "bg-soft-pink" : "bg-soft-yellow"}>
                    {msg.sender[0]}
                  </AvatarFallback>
                </Avatar>
                
                <div>
                  <div className={`rounded-lg p-3 ${
                    msg.isUser 
                      ? 'bg-soft-pink text-primary-foreground rounded-tr-none' 
                      : 'bg-soft-yellow rounded-tl-none'
                  }`}>
                    <p className="text-sm">{msg.text}</p>
                  </div>
                  
                  <div className={`flex text-xs text-muted-foreground mt-1 ${
                    msg.isUser ? 'justify-end' : 'justify-start'
                  }`}>
                    {!msg.isUser && <span className="mr-1">{msg.sender}</span>} 
                    <span>{formatTime(msg.timestamp)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      
      <form onSubmit={handleSubmit} className="p-3 border-t border-soft-yellow flex gap-2 bg-white">
        <Input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow border-soft-yellow focus:border-soft-pink focus:ring-soft-pink"
        />
        <Button 
          type="submit"
          className="bg-soft-pink hover:bg-accent-pink text-primary-foreground"
        >
          Send
        </Button>
      </form>
    </Card>
  );
};

export default ChatBox;
