import React from 'react';
import Markdown from 'react-markdown';

import {BasicLayout} from "../layouts";
import * as constants from '../constants';


const About = () => {
  return (
      <BasicLayout>
        <main>
          <Markdown source={constants.ABOUT_ME} />
        </main>
        <style jsx>{`
          main {
            display: block;
          }
        `}

        </style>
      </BasicLayout>
  )
}

export default About;