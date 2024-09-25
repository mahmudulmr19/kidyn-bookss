import { Container } from "~/components/shared";
import { api } from "~/trpc/server";

export async function FeaturedBook() {
  const data = await api.book.getFeaturedBooks();

  return (
    <section className="py-section">
      <Container>
        <div className="space-y-2">
          <h2 className="section-title">
            Featured <span>Books</span>
          </h2>
          <p className="max-w-2xl text-sm text-gray-700 md:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-10 md:mt-16 md:grid-cols-4 md:gap-16 lg:gap-20">
          {data.map((item) => (
            // eslint-disable-next-line
            <img
              key={item.id}
              src={item.volumeInfo.imageLinks.thumbnail}
              alt={item.volumeInfo.title}
              className="size-full rounded-xl"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
