export const AppleIcon = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 384 512" className={className} fill="currentColor" aria-hidden="true">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

export const OliveLogo = ({ compact = false }) => (
  <div className={`flex items-center ${compact ? 'gap-2' : 'gap-2.5'}`}>
    <div className={`relative ${compact ? 'w-7 h-8' : 'w-8 h-9'}`}>
      <svg viewBox="0 0 38 44" className="w-full h-full" aria-hidden="true">
        <path d="M19 10.5c8.5 0 14.8 6.3 14.8 15.7S27.6 40 19 40 4.2 33.6 4.2 26.2 10.5 10.5 19 10.5z" fill="#b6cf5e" />
        <path d="M18.4 9.9s-3.4-8 4.3-8c4.8 0 6.2 4.1 1 6.6-2.4 1.2-5.3 1.4-5.3 1.4z" fill="#69813c" />
        <circle cx="14" cy="23" r="1.9" fill="#263422" />
        <circle cx="24.2" cy="23" r="1.9" fill="#263422" />
        <path d="M15.7 28.6c1.3 1.7 2.9 2.6 4.5 2.6 1.7 0 3.2-.9 4.4-2.6" stroke="#263422" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      </svg>
    </div>
    <span className={`${compact ? 'text-[28px]' : 'text-[34px]'} font-extrabold tracking-[-0.04em] text-[#a8c44b]`}>
      Olive
    </span>
  </div>
);

export const DownloadButton = ({ href = '#download', inverse = false, className = '' }) => (
  <a
    href={href}
    className={[
      'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold transition-transform duration-200',
      inverse
        ? 'bg-white text-[#263d18] shadow-[0_12px_30px_rgba(0,0,0,0.14)] hover:-translate-y-0.5'
        : 'bg-[#263d18] text-white shadow-[0_10px_24px_rgba(38,61,24,0.18)] hover:-translate-y-0.5',
      className
    ].join(' ')}
  >
    <AppleIcon />
    Download for iOS
  </a>
);

export const AvatarCluster = () => {
  const avatars = [
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=80&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&q=80'
  ];

  return (
    <div className="flex items-center -space-x-2.5">
      {avatars.map((avatar) => (
        <img
          key={avatar}
          src={avatar}
          alt=""
          className="h-8 w-8 rounded-full border-2 border-white object-cover shadow-sm"
        />
      ))}
      <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#eaebea] text-[10px] font-semibold text-[#707070] shadow-sm">
        3k+
      </div>
    </div>
  );
};

export const SectionEyebrow = ({ children }) => (
  <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.14em] text-[#7f897f]">{children}</p>
);

export const SectionHeading = ({ children, className = '' }) => (
  <h2 className={`text-[34px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#233a25] md:text-[50px] ${className}`}>
    {children}
  </h2>
);
