import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'


const footerLinks = [
  {
    title: 'Email',
    href: 'https://mail.google.com/mail/?view=cm&to=sudhanshu9jaiswal@gmail.com',
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sudhanshu-kumar-a6657a287',
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/imsudhanshu09',
  },
  {
    title: 'Leetcode',
    href: 'https://leetcode.com/u/imsudhanshu09/',
  },
  {
    title: 'Github',
    href: 'https://github.com/imsudhanshu09',
  },
]

export const Footer = () => {
  return (
    <footer className='relative z-10 overflow-x-clip'>
      <div className='absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 
      [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10 pointer-events-none'></div>
      <div className="container">
        <div className='border-t md:flex-row md:justify-between border-white/15 py-6 text-sm flex flex-col items-center gap-8'>
          <div className='text-white/40'>&copy; 2025. All rights reserved.</div>
          <nav className='flex flex-col md:flex-row items-center gap-8'>
            {footerLinks.map((link) => {
              const isEmail = link.href.startsWith('mailto:');
              return ( 
              <a href={link.href}
                 key={link.title}
                 className='inline-flex items-center gap-1.5'
                 {...(!isEmail && {
                  target: "_blank",
                  rel: "noopener noreferrer"
                })}
              >
                <span className='font-semibold'>{link.title}</span>
                <ArrowUpRightIcon className="size-4"/>
              </a>
            )})}
          </nav>
        </div>
      </div>
    </footer>
  );
};
