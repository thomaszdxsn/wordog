import React from 'react';
import NpmCard from "./NpmCard";


export default {title: 'NpmCard'};


export const Normal = () => (
 <NpmCard name={'@storybook/react'}
          npmUrl={'https://www.npmjs.com/package/@storybook/react'}
          githubUrl={'https://www.npmjs.com/package/@storybook/react'}
          rate={{
           use: 5,
           learn: 1,
           popular: 4
          }}
 />
);