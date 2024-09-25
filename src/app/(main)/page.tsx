import {
  FeaturedBook,
  FindBook,
  Hero,
  Naptha,
  WhatWeOffer,
} from "~/components/home";
import { Newsletter } from "~/components/shared";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <WhatWeOffer />
      <FindBook />
      <FeaturedBook />
      <Naptha />
      <Newsletter />
    </React.Fragment>
  );
}
