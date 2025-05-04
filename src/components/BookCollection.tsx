
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BookCard from './BookCard';

// Mock data for books
const currentlyReadingBooks = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    cover: "https://placehold.co/100x150/FEF7CD/6B4F4F?text=Midnight",
    progress: 65,
    totalPages: 304,
    currentPage: 198
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    cover: "https://placehold.co/100x150/FFDEE2/6B4F4F?text=Atomic",
    progress: 30,
    totalPages: 320,
    currentPage: 96
  },
  {
    id: 3,
    title: "Project Hail Mary",
    author: "Andy Weir",
    cover: "https://placehold.co/100x150/F9F5E7/6B4F4F?text=Project",
    progress: 12,
    totalPages: 496,
    currentPage: 60
  }
];

const finishedBooks = [
  {
    id: 4,
    title: "The Song of Achilles",
    author: "Madeline Miller",
    cover: "https://placehold.co/100x150/FEF7CD/6B4F4F?text=Achilles",
    progress: 100,
    totalPages: 416,
    currentPage: 416
  },
  {
    id: 5,
    title: "Educated",
    author: "Tara Westover",
    cover: "https://placehold.co/100x150/FFDEE2/6B4F4F?text=Educated",
    progress: 100,
    totalPages: 334,
    currentPage: 334
  }
];

const toReadBooks = [
  {
    id: 6,
    title: "The Four Winds",
    author: "Kristin Hannah",
    cover: "https://placehold.co/100x150/FEF7CD/6B4F4F?text=Four",
    progress: 0,
    totalPages: 464,
    currentPage: 0
  },
  {
    id: 7,
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    cover: "https://placehold.co/100x150/FFDEE2/6B4F4F?text=Klara",
    progress: 0,
    totalPages: 303,
    currentPage: 0
  }
];

const BookCollection = () => {
  return (
    <div className="bg-white border border-soft-pink border-opacity-30 rounded-xl p-4 book-shadow">
      <h2 className="text-2xl font-serif mb-4">My Books</h2>
      
      <Tabs defaultValue="reading">
        <TabsList className="grid grid-cols-3 mb-4 bg-soft-beige">
          <TabsTrigger value="reading" className="data-[state=active]:bg-soft-pink data-[state=active]:text-primary-foreground">
            Reading
          </TabsTrigger>
          <TabsTrigger value="finished" className="data-[state=active]:bg-soft-pink data-[state=active]:text-primary-foreground">
            Finished
          </TabsTrigger>
          <TabsTrigger value="toRead" className="data-[state=active]:bg-soft-pink data-[state=active]:text-primary-foreground">
            To Read
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="reading" className="space-y-3 animate-fade-in">
          {currentlyReadingBooks.map(book => (
            <BookCard key={book.id} {...book} />
          ))}
        </TabsContent>
        
        <TabsContent value="finished" className="space-y-3 animate-fade-in">
          {finishedBooks.map(book => (
            <BookCard key={book.id} {...book} />
          ))}
        </TabsContent>
        
        <TabsContent value="toRead" className="space-y-3 animate-fade-in">
          {toReadBooks.map(book => (
            <BookCard key={book.id} {...book} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BookCollection;
