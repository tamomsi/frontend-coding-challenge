import React from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import TwoColumnTextSection from "./TwoColumnTextSection";

const Grid = ({ blok }) => {
  return (
    <div className="grid grid-cols-3" {...storyblokEditable(blok)}>
      {blok.columns.map((nestedBlok, index) => (
        // Conditionally render TwoColumnTextSection component in the second column
        index === 1 ? (
          <TwoColumnTextSection key={nestedBlok._uid} />
        ) : (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        )
      ))}
    </div>
  );
};

export default Grid;
