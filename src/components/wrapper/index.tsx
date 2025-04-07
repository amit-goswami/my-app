interface MainWrapperProps {
  children: React.ReactNode;
}

const MainWrapper = ({
  children,
}: MainWrapperProps &
  React.HTMLAttributes<HTMLDivElement> & { className?: string }) => {
  return (
    <div className="flex flex-col gap-4 w-svw h-svh p-4 bg-black">
      {children}
    </div>
  );
};

export default MainWrapper;
