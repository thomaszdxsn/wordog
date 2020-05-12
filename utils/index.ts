export * from './hooks'

export function buildURL(path: string, domain: string='https://thomaszdxsn.com') {
  return `${domain}${path}`;
}


export function makeStarRank(rank: number) {
  return Array.from({length: rank}).fill('⭐️').join('')
}
