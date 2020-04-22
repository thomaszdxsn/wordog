/** 
 * this theme is copy from [hugo-theme-hello-friend-ng](https://github.com/rhazdon/hugo-theme-hello-friend-ng)
*/
import React, {useMemo} from 'react';
import {useRouter} from "next/router";
import Link from 'next/link';



const Header: React.FC = () => {
    const {asPath} = useRouter();
    const breadcrumb = useMemo(() => {
        const paths = asPath.slice(1).split('?')[0].split('/');
        // 这种实现不支持动态路由，但是目前不会在中间的 path 带有动态路由
        return (
            <>
                <Link href={'/'} passHref><a>~</a></Link>
                {paths.map((path, index) => index === paths.length - 1
                ? <span key={path}>/{path}</span>
                : <span key={path}>/<Link key={path} href={`/${path}`} passHref><a>{path}</a></Link> </span>)}
                <style jsx>{`
                    a {
                        color: inherit;
                        text-decoration: none;
                    }
                    a:hover {
                        text-decoration: underline;
                    }
                `}</style>
            </>
        )

    }, [asPath]);

    return (
        <>
        <header>
            <div className="header-inner">
                <div className="breadcrumb">
                    <span className="text">
                        {breadcrumb}
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
                font-weight: 700;
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
            .breadcrumb > .cursor {
                height: 1rem;
                width: .5rem;
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
);


const BasicLayout: React.FC = ({children}) => {
    return (
        <>
            <Header />
            <div className='content'>
                {children}
            </div>
            <Footer />
            <style jsx global>{`
                html {
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
                    width: 100%;
                    max-width: 800px;
                    padding: .5rem;
                    margin: 1rem auto;
                }
            `}</style>
        </>
    )
};

export default BasicLayout;