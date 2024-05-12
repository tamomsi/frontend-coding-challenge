// Page.js

import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import TwoColumnTextSection from "./TwoColumnTextSection";

const Page = ({ blok }) => (
  <main className="text-center mt-4" {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok, index) => (
      <React.Fragment key={index}>
        {index === 1 ? <TwoColumnTextSection /> : null}
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      </React.Fragment>
    ))}
  </main>
);

export default Page;
