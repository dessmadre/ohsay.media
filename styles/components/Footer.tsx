import { PORTFOLIO_REPO, LINKEDIN } from 'lib/constants';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='w-full'>
        <div className='footer--grid'>
          <div className='footer--grid__row-1-col-1 '>
            <a
              href={PORTFOLIO_REPO}
              target='_blank'
              rel='noreferrer'
              className='hover:text-green-400'
            >
              Portfolio Repo
            </a>
          </div>
          <div className='footer--grid__row-1-col-2 '>
            <a
              href={LINKEDIN}
              target='_blank'
              rel='noreferrer'
              className='hover:text-green-400 '
            >
              LinkedIn
            </a>
          </div>
          <div className='footer--grid__row-1-col-3'></div>
          <p className='row-start-2 row-span-1 col-span-full mt-16 '>
            &#169; Jose Duarte 2021
          </p>
        </div>
      </div>
    </footer>
  );
}
