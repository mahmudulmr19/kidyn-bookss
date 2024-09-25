import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import axios from "axios";

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    description: string;
    imageLinks: {
      thumbnail: string;
    };
  };
}

export const bookRouter = createTRPCRouter({
  getFeaturedBooks: publicProcedure.query(async () => {
    const { data } = await axios.get<{ items: Book[] }>(
      "https://www.googleapis.com/books/v1/volumes?q=children%27s+workbook+kindergarten&maxResults=4",
    );
    return data.items;
  }),
});
