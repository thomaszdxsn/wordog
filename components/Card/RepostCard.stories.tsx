import React from 'react';
import RepostCard from "./RepostCard";


export default {title: 'RepostCard'}


export const Normal = () => (
  <RepostCard title={'Carta’s covid-19 layoff'} link={'https://wanqu.co/a/7521/cartas-covid-19-layoff/'}>
    疫情期间很多公司都在裁员。本文是 Carta 的 ceo 对他们员工宣布裁员决定的讲稿。“每个被裁的人都是我拍板决定的，要怪只能怪我，别怪你们经理。” 对被裁员工的福利也很好，是很人性化的好公司。
  </RepostCard>
);


export const WithTags = () => (
  <RepostCard title={'一个天才程序员的陨落'}
              link={'https://www.wired.com/story/lee-holloway-devastating-decline-brilliant-young-coder/?utm_source=wanqu.co&utm_campaign=Wanqu+Daily&utm_medium=website'}
              tags={['bio', 'career']}
  >
    这是 Cloudflare 的联合创始人 Lee Holloway 的故事。写得很好的很长的报道，但却是个悲伤的故事。30多岁就得到额颞叶痴呆（FTD），性格/行为/语言变得极其古怪，人生基本到头了。很可惜。
  </RepostCard>
);

export const MutliLinks = () => (
  <>
    <RepostCard title={'title1'} link={'https://mediumn/link1'}>
      link1
    </RepostCard>
    <RepostCard title={'title2'} link={'https://mediumn/link2'}>
      link2
    </RepostCard>
  </>
);


export const WithEstimateMin = () => (
 <RepostCard title="Creating a Gauge in React" link="https://wattenberger.com/blog/gauge" tags={["d3.js", "交互式博客"]} estimateMin={30}>

     <p>1. 这篇文章是非常有价值的，用原始的 `d3.js` API 实现一个 Gauge 图标。</p>

     <p>2. 这篇博客文章的形式更加有价值，它是一篇交互式博客文章，可以在阅读的时候看到相应的代码，可以在鼠标 hover 在作者标记的地方的时候，代码块自动滑动到相应区域。</p>


 </RepostCard>
);