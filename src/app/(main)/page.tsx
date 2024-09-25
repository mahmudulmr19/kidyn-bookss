import { FeaturedBook, FindBook, Hero, WhatWeOffer } from "~/components/home";
import { Newsletter } from "~/components/shared";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <WhatWeOffer />
      <FindBook />
      <FeaturedBook />
      <Newsletter />
    </React.Fragment>
  );
}
