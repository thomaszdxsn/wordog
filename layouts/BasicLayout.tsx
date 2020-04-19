/** 
 * this theme is copy from [hugo-theme-hello-friend-ng](https://github.com/rhazdon/hugo-theme-hello-friend-ng)
*/
import React from 'react';
import Link from 'next/link'


const Header: React.FC = () => {

    return (
        <>
        <header>
            <div className="header-inner">
                <div className="breadcrumb">
                    <span className="mark">></span>
                    <span className="text">
                        <Link href='/'><a>~</a></Link>/
                    </span>
                    <span className="cursor" />
                </div>
                <nav>
                    <Link href="/about" passHref>
                        <a>about</a>
                    </Link>
                    <Link href="/posts" passHref>
                        <a>posts</a>
                    </Link>
                </nav>
            </div>
        </header>
        <style jsx>{`
            header {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 3rem;
                background-color: #FAFAFA;
            }

            a {
                color: inherit;
                text-decoration: none;
            }
            a:hover {
                text-decoration: underline;
            }

            .header-inner {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 760px;
                max-width: 100%;
                padding: 0 1rem;
            }

            nav {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                magin: 0 auto;
                padding: 0 1rem;
            }

            nav > a:not(:last-child) {
                margin-right: .6rem;
            }


            .breadcrumb {
                display: flex;
                align-items: center;
            }
            .breadcrumb > .mark {
                font-size: .8rem;
                margin-right: 5px;
            }
            .breadcrumb > .cursor {
                height: 1rem;
                width: 10px;
                background-color: #fe5186;
                margin-left: 5px;
                animation: cursor 1s infinite;
            }
            @keyframes cursor {
                0% { opacity: 0; }
                50% { opacity: 1; }
                100% { opacity: 0; }
            }
        `}</style>
        </>
    )
}

const Footer: React.FC = () => (
    <>
    <footer>
    </footer>
    <style jsx>{`
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem 1rem;
    `}</style>
    </>
)


const BasicLayout: React.FC = ({children}) => {
    return (
        <>
            <Header />
            <div className='content'>
                {children}
            </div>
            <Footer />
            <style jsx global>{`
                body {
                    font-family:"Noto Serif SC", serif;
                }

                #__next {
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                    justify-content: space-between;
                }
            `}</style>
            <style jsx>{`
                .content {
                    display: flex;
                    justify-content: center; 
                    align-items: center;
                    flex: 1;
                }
            `}</style>
        </>
    )
}

export default BasicLayout;