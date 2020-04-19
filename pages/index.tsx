import React from 'react';
import {BasicLayout} from '../layouts';

import {GithubIcon, HomeIcon, MailIcon, TwitterIcon} from '../assets'
import * as constants from '../constants';


const IndexPage = () => {
  return (
    <BasicLayout>
      <main>
        <h1>Thomaszdxsn's blog</h1>
        <p className='quote'>I am king of programming</p>
        <div className="icon-container">
          <a href={constants.GITHUB_HOMEPAGE} target='_blank'>
            <GithubIcon />
          </a>
          <a href={constants.TWITTER_HOMEPAGE} target='_blank'>
            <TwitterIcon/>
          </a>
          <a href={constants.BLOG_HOMEPAGE}>
            <HomeIcon/>
          </a>
          <a href={`mailto://${constants.EMAIL}`}>
            <MailIcon/>
          </a>
        </div>
      </main>
      <style jsx>{`
        main {
          display: block;
          text-align: center;
        }
        
        h1 {
          margin: 0;
          padding: 0;
        }
        
        .quote {
          font-style: italic;
          margin: .5rem 0 1.5rem 0;
        }
      
        .icon-container {
          display: flex;
          justify-content: space-between;
        }
        
        .icon-container > a {
          width: 1.5rem;
          height: 1.5rem;
        }
      `}</style>
    </BasicLayout>
  )
};

export default IndexPage;