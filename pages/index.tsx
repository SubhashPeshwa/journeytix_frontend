import type { NextPage } from 'next';
import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import Hero from 'views/HomePage/Hero';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import Cta from 'views/HomePage/Cta';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Features from 'views/HomePage/Features';
// import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import { getAllPosts } from 'utils/postsFetcher';
// import Testimonials from 'views/HomePage/Testimonials';
import { EnvVars } from 'env';


export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
      <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Quickly book a Flight Reservation for your Visa Application. Verifiable on Airline's Websites."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          {/* <Partners /> */}
          {/* <BasicSection imageUrl="/demo-illustration-1.svg" title="Generate onward or return flight itinerary for free." overTitle="sit amet gogo">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem error incidunt a doloremque voluptatem porro inventore
              voluptate quo deleniti animi laboriosam.{' '}
              <Link href="/help-center">Possimus ullam velit rem itaque consectetur, in distinctio?</Link> Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Soluta repellendus quia quos obcaecati nihil. Laudantium non accusantium, voluptate eum nesciunt
              at suscipit quis est soluta?
            </p>
          </BasicSection>
          <BasicSection imageUrl="/demo-illustration-2.svg" title="Lorem ipsum dolor sit." overTitle="lorem ipsum" reversed>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem error incidunt a doloremque voluptatem porro inventore{' '}
              <strong>voluptate quo deleniti animi laboriosam</strong>. Possimus ullam velit rem itaque consectetur, in distinctio?
            </p>
            <ul>
              <li>Professional point 1</li>
              <li>Professional remark 2</li>
              <li>Professional feature 3</li>
            </ul>
          </BasicSection> */}
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          {/* <Cta /> */}
          <FeaturesGallery />
          {/* <Features /> */}
          {/* <Testimonials /> */}
          {/* <ScrollableBlogPosts posts={posts} /> */}
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  // background: rgb(var(--secondBackground));
  background: rgb(var(--background));

  & > :last-child {
    padding-bottom: 5rem;
    padding-top: 10rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

// export default Home
export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}