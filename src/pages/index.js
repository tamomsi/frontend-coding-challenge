import Head from "next/head";
import { useStoryblokState, getStoryblokApi } from "@storyblok/react";
import TwoColumnTextSection from "../components/TwoColumnTextSection";

export default function Home({ story }) {
  story = useStoryblokState(story);

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Replace StoryblokComponent with TwoColumnTextSection */}
      <TwoColumnTextSection />
    </div>
  );
}

export async function getStaticProps() {
  let slug = "home";

  let sbParams = {
    version: "published",
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 10,
  };
}
