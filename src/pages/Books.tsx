
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import BookCard from '@/components/BookCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';

// Mock data for books
const allBooks = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    cover: "https://placehold.co/100x150/FEF7CD/6B4F4F?text=Midnight",
    progress: 65,
    totalPages: 304,
    currentPage: 198,
    status: "reading"
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    cover: "https://placehold.co/100x150/FFDEE2/6B4F4F?text=Atomic",
    progress: 30,
    totalPages: 320,
    currentPage: 96,
    status: "reading"
  },
  {
    id: 3,
    title: "Project Hail Mary",
    author: "Andy Weir",
    cover: "https://placehold.co/100x150/F9F5E7/6B4F4F?text=Project",
    progress: 12,
    totalPages: 496,
    currentPage: 60,
    status: "reading"
  },
  {
    id: 4,
    title: "The Song of Achilles",
    author: "Madeline Miller",
    cover: "https://placehold.co/100x150/FEF7CD/6B4F4F?text=Achilles",
    progress: 100,
    totalPages: 416,
    currentPage: 416,
    status: "finished"
  },
  {
    id: 5,
    title: "Educated",
    author: "Tara Westover",
    cover: "https://placehold.co/100x150/FFDEE2/6B4F4F?text=Educated",
    progress: 100,
    totalPages: 334,
    currentPage: 334,
    status: "finished"
  },
  {
    id: 6,
    title: "The Four Winds",
    author: "Kristin Hannah",
    cover: "https://placehold.co/100x150/FEF7CD/6B4F4F?text=Four",
    progress: 0,
    totalPages: 464,
    currentPage: 0,
    status: "toRead"
  },
  {
    id: 7,
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    cover: "https://placehold.co/100x150/FFDEE2/6B4F4F?text=Klara",
    progress: 0,
    totalPages: 303,
    currentPage: 0,
    status: "toRead"
  }
];

const Books = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  
  const filteredBooks = allBooks.filter(book => {
    // Filter by search term
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          book.author.toLowerCase().includes(searchTerm.toLowerCase());
                          
    // Filter by tab
    const matchesTab = activeTab === 'all' || book.status === activeTab;
    
    return matchesSearch && matchesTab;
  });
  
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-soft-beige pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <header className="my-8">
              <h1 className="text-3xl font-serif font-bold mb-2">My Books</h1>
              <p className="text-text-brown/80">Manage your reading collection and track progress</p>
            </header>
            
            <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
              <div className="w-full md:w-1/2">
                <Input
                  placeholder="Search books by title or author..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border-soft-yellow focus:border-soft-pink focus:ring-soft-pink"
                />
              </div>
              <Button className="bg-soft-pink hover:bg-accent-pink text-primary-foreground">
                Add New Book
              </Button>
            </div>
            
            <Tabs defaultValue="all" onValueChange={setActiveTab}>
              <TabsList className="bg-soft-beige mb-6">
                <TabsTrigger value="all" className="data-[state=active]:bg-soft-pink data-[state=active]:text-primary-foreground">
                  All Books
                </TabsTrigger>
                <TabsTrigger value="reading" className="data-[state=active]:bg-soft-pink data-[state=active]:text-primary-foreground">
                  Currently Reading
                </TabsTrigger>
                <TabsTrigger value="finished" className="data-[state=active]:bg-soft-pink data-[state=active]:text-primary-foreground">
                  Finished
                </TabsTrigger>
                <TabsTrigger value="toRead" className="data-[state=active]:bg-soft-pink data-[state=active]:text-primary-foreground">
                  Want to Read
                </TabsTrigger>
              </TabsList>
              
              <div className="space-y-4">
                {filteredBooks.length > 0 ? (
                  filteredBooks.map(book => (
                    <BookCard 
                      key={book.id}
                      title={book.title}
                      author={book.author}
                      cover={book.cover}
                      progress={book.progress}
                      totalPages={book.totalPages}
                      currentPage={book.currentPage}
                    />
                  ))
                ) : (
                  <div className="text-center p-12 bg-white rounded-xl border border-soft-pink border-opacity-30">
                    <p className="text-text-brown/70">No books found matching your criteria.</p>
                  </div>
                )}
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;
