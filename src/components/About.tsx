import { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Stack,
  Skeleton,
  Text,
  Link,
  Image
} from '@chakra-ui/react';
import { SectionTitle } from './partials';
import { getElementDimensions } from '../utils/helpers';

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgHeight, setImgHeight] = useState(0);

  useEffect(() => {
    const height = getElementDimensions('about-text')[1];
    height && setImgHeight(height);
  });

  return (
    <Box as="section" id="about">
      <SectionTitle text="About Me" />
      <Flex as="article" direction={{ base: 'column', md: 'row' }}>
        <Stack
          maxW={{ md: '70%', lg: '60%' }}
          pr={{ md: 12, lg: 20 }}
          id="about-text"
        >
          <Text>
            I'm Jason, an improvement-driven developer who's passionate about
            what I do and committed to getting things done efficiently and
            effectively.
          </Text>
          <Text>
            I got my first taste of programming in middle school when I started
            writing programs in TI Basic on my calculator. I started out college
            as a Psychology major, and soon after changed my major to Computer
            Science, where I discovered a passion for Web Development.
          </Text>
          <Text>
            Since then, I've been specializing in JavaScript/TypeScript-based
            development as I continue to grow myself and my skills through
            constant learning and improvement.
          </Text>
          <Text>
            If you want to see more about me professionally, check out
            <span> </span>
            <Link
              fontFamily="Overpass"
              fontSize="1.1rem"
              href="https://docs.google.com/document/d/e/2PACX-1vTiKdTS_vxjFzVYOI0meJtMDHJFNhd4-Hw87TdWv0JHPF2FP9Kb6w57YbuFAK8AoA/pub"
              target="_blank"
            >
              my&nbsp;resume
            </Link>
            .
          </Text>
          <Text>I also have a little furball named Rosie! (Pictured here)</Text>
        </Stack>
        <Skeleton display="flex" isLoaded={isLoaded}>
          <Image
            w="auto"
            h={{ base: imgHeight / 1.7, md: imgHeight }}
            my="auto"
            borderRadius={4}
            alt="My cat rosie"
            onLoad={() => setIsLoaded(true)}
            src={new URL('../assets/rosie.jpg', import.meta.url).href}
          />
        </Skeleton>
      </Flex>
    </Box>
  );
}
