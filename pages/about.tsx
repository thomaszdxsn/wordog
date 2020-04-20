import React from 'react';

import Markdown from "../components/Markdown";
import {BasicLayout} from "../layouts";
import * as constants from '../constants';


const About = () => {
  return (
      <BasicLayout>
        <main>
          <Markdown content={constants.ABOUT_ME} />
        </main>
        <style jsx>{`
          main {
            display: block;
          }
        `}
        </style>
      </BasicLayout>
  )
};

export default About;