import { Container } from "~/components/shared";

export function FindBook() {
  return (
    <Container className="py-section">
      <section className="flex flex-col rounded-xl bg-[#47259308] p-5 *:w-full md:rounded-2xl md:py-7 lg:flex-row lg:rounded-3xl lg:p-10 lg:*:w-1/2">
        <div>
          <label>Quickly Find Your Next Favorite Book</label>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s
          </p>
        </div>
        <div></div>
      </section>
    </Container>
  );
}
