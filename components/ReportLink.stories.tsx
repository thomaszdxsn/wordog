import React from 'react';
import ReportLink from "./ReportLink"; 


export default {title: 'ReportLink'}


export const Normal = () => (
  <ReportLink title={'Carta’s covid-19 layoff'} link={'https://wanqu.co/a/7521/cartas-covid-19-layoff/'}>
    疫情期间很多公司都在裁员。本文是 Carta 的 ceo 对他们员工宣布裁员决定的讲稿。“每个被裁的人都是我拍板决定的，要怪只能怪我，别怪你们经理。” 对被裁员工的福利也很好，是很人性化的好公司。
  </ReportLink>
);


export const WithTags = () => (
  <ReportLink title={'一个天才程序员的陨落'}
              link={'https://www.wired.com/story/lee-holloway-devastating-decline-brilliant-young-coder/?utm_source=wanqu.co&utm_campaign=Wanqu+Daily&utm_medium=website'}
              tags={['bio', 'career']}
  >
    这是 Cloudflare 的联合创始人 Lee Holloway 的故事。写得很好的很长的报道，但却是个悲伤的故事。30多岁就得到额颞叶痴呆（FTD），性格/行为/语言变得极其古怪，人生基本到头了。很可惜。
  </ReportLink>
);

export const MutliLinks = () => (
  <>
    <ReportLink title={'title1'} link={'https://mediumn/link1'}>
      link1
    </ReportLink>
    <ReportLink title={'title2'} link={'https://mediumn/link2'}>
      link2
    </ReportLink>
  </>
);