import React from 'react';
// import {NpmIcon, GithubIcon} from "../../assets";
import {makeStarRank} from "../../utils";

type Rate = 1 | 2 | 3 | 4 | 5
type RateFacade = keyof Props['rate'];

interface Props {
  name: string;
  githubUrl: string;
  npmUrl?: string;
  rate: {
    learn: Rate;       // 学习难度
    use: Rate;         // 实用性
    popular: Rate;     // 在同类库中的受欢迎度
  }
}


function translateRateFacade(rateKey: RateFacade) {
  switch (rateKey) {
    case "learn":
      return "学习难度";
    case "popular":
      return "受欢迎度";
    case "use":
      return "实用性"
  }
}


// TODO: how can i import a SVG with proper scale
const NpmCard: React.FC<Props> = props => {
  const {name, rate, children} = props;
  return (
   <article>
     <h3 className={'card-title'}>{name}</h3>
     {/*<p className={'card-url'}>*/}
     {/*  <a href={npmUrl}><NpmIcon/></a>*/}
     {/*  <a href={githubUrl}><GithubIcon/></a>*/}
     {/*</p>*/}

     <table className='rate-table'>
       <thead>
        <th>纬度</th>
        <th>评分</th>
       </thead>
       <tbody>
         {Object.entries(rate).map(([facade, rate]) => (
          <tr key={facade}>
            <td>{translateRateFacade(facade as RateFacade)}</td>
            <td>{makeStarRank(rate)}</td>
          </tr>
         ))}
       </tbody>
     </table>

     <div>
       {children}
     </div>

     <style jsx>{`
        article {
          padding: 1rem;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .2);
        };
        article:hover {
          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, .3);
        }
        .card-url {
          display: block;
          height: 1rem;
        }
        
        .rate-table td {
          padding: 0 .5rem;
        }
        
     `}</style>
   </article>
  )
};

export default NpmCard