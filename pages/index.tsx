import React from 'react';
import Link from 'next/link'

import {BasicLayout} from '../layouts';
import {GithubIcon, ListIcon, MailIcon, TwitterIcon} from '../assets'
import * as constants from '../constants';


const IndexPage = () => {
  return (
    <BasicLayout>
      <main>
        <h1>Thomaszdxsn's blog</h1>
        <p className='quote'>{constants.BLOG_DESCRIPTION}</p>
        <div className="icon-container">
          <Link href={'/posts'} passHref>
            <a>
              <ListIcon/>
            </a>
          </Link>
          <a href={constants.GITHUB_HOMEPAGE} target='_blank'>
            <GithubIcon />
          </a>
          <a href={constants.TWITTER_HOMEPAGE} target='_blank'>
            <TwitterIcon/>
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
          width: 50%;
          margin: 0 auto;
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