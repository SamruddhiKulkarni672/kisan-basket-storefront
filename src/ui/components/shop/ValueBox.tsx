const ValueBox = ({ value, textClass }: { value: string; textClass: string }) => (
  <div className="flex h-[36px] w-full items-center justify-center rounded-[5px] border border-[#E5E3E3]">
    <div className={textClass}>{value}</div>
  </div>
);
export default ValueBox;