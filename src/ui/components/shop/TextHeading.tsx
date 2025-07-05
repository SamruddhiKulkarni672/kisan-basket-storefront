const TextHeading = ({ children, className = "text-[12px] font-bold text-[#242424]" }: { children: React.ReactNode; className?: string }) => (
  <div className={`ml-2 leading-[20px] tracking-[0] ${className}`}>{children}</div>
);
export default TextHeading;