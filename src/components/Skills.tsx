import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';
import {
  Html,
  Css,
  Javascript,
  Typescript,
  Jquery,
  Jest,
  Bootstrap,
  Node,
  React,
  Express,
  Pug,
  Mysql,
  Mongodb,
  Aws,
  Tailwind
} from './icons';
import { SectionTitle } from './partials';

export default function Skills() {
  return (
    <Box as="section" id="skills">
      <SectionTitle text="Skills" />
      <SimpleGrid
        as="article"
        opacity={0.9}
        minChildWidth={{ base: '70px', md: '75px', lg: '80px' }}
        spacing={{ base: '20px', md: '25px', lg: '30px' }}
      >
        <SkillIcon name="HTML" Icon={Html} />
        <SkillIcon name="CSS" Icon={Css} />
        <SkillIcon name="JavaScript" Icon={Javascript} />
        <SkillIcon name="TypeScript" Icon={Typescript} />
        <SkillIcon name="jQuery" Icon={Jquery} />
        <SkillIcon name="Jest" Icon={Jest} />
        <SkillIcon name="Bootstrap" Icon={Bootstrap} />
        <SkillIcon name="TailwindCSS" Icon={Tailwind} />
        <SkillIcon name="NodeJS" Icon={Node} />
        <SkillIcon name="React" Icon={React} />
        <SkillIcon name="ExpressJS" Icon={Express} />
        <SkillIcon name="Pug" Icon={Pug} />
        <SkillIcon name="MySQL" Icon={Mysql} />
        <SkillIcon name="MongoDB" Icon={Mongodb} />
        <SkillIcon name="AWS" Icon={Aws} />
        <Text ml={4} my="auto" fontSize="xl">
          ...and more!
        </Text>
      </SimpleGrid>
    </Box>
  );
}

function SkillIcon({ Icon, name }: { Icon: IconType; name: string }) {
  return (
    <Flex as="figure" align="center" direction="column">
      {<Icon size="50px" />}
      <Text as="figcaption" mt={2} textAlign="center">
        {name}
      </Text>
    </Flex>
  );
}
