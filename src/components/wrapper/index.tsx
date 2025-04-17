interface MainWrapperProps {
  children: React.ReactNode;
}

const MainWrapper = ({
  children,
}: MainWrapperProps &
  React.HTMLAttributes<HTMLDivElement> & { className?: string }) => {
  return (
    <div className="flex gap-4 w-svw h-svh p-4 bg-black items-start justify-start">
      {children}
    </div>
  );
};

export default MainWrapper;
