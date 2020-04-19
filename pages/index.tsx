import {BasicLayout} from '../layouts';

import {GithubIcon, HomeIcon, MailIcon, TwitterIcon} from '../assets'
import * as constants from '../constants';


const IndexPage = () => {
  return (
    <BasicLayout>
      <main>
        <h1>Thomaszdxsn's blog</h1>
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
}

export default IndexPage;