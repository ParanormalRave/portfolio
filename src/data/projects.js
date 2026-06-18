// Live screenshots are generated on the fly by thum.io so the previews always
// reflect the deployed site. Local PNGs are used for the older static projects.
const shot = (url) => `https://image.thum.io/get/width/1200/crop/900/noanimate/${url}`

export const projects = [
  {
    title: 'Fountain Grill',
    tag: 'Frontend',
    blurb:
      'A polished marketing site for a bar & grill in Ashburn, Virginia — hero, menu highlights, reservations and location, built and deployed to production.',
    image: '/fountain_grill.jpg',
    tech: ['React', 'Tailwind', 'Vercel'],
    live: 'https://fountain-grill.vercel.app/',
    code: null,
    featured: true,
  },
  {
    title: 'Foreign Exchange Checker',
    tag: 'Frontend',
    blurb:
      'A currency converter on live EOD · ECB data — real-time rates, conversion history, multi-currency comparison and pinned favourite pairs.',
    image: shot('https://foreign-exchange-checker.vercel.app/'),
    tech: ['React', 'Tailwind', 'REST API'],
    live: 'https://foreign-exchange-checker.vercel.app/',
    code: null,
    featured: true,
  },
  {
    title: 'Student Grade Tracker',
    tag: 'Frontend',
    blurb:
      'A lightweight system for recording grades, tracking academic performance and generating printable reports for easy documentation.',
    image: '/studentGradeTracker.png',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://paranormalrave.github.io/Student-Grade-Tracker/',
    code: null,
  },
  {
    title: 'Mini Bank App',
    tag: 'Frontend',
    blurb:
      'A simple digital banking flow — create accounts, deposit, withdraw and check balances in real time.',
    image: '/basicBankApp.png',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://paranormalrave.github.io/bank-transactions/',
    code: null,
  },
  {
    title: 'Taste Dive',
    tag: 'Frontend',
    blurb:
      'A movie & series discovery interface cloning a streaming catalogue with trending and recently-updated titles.',
    image: '/tasteDrive.png',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: null,
    code: null,
  },
]
