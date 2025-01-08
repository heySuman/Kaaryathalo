import { Button } from "../ui/button";

export const CustomButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button
      className="bg-[#0042C6] hover:bg-[#0042c6d9] text-center text-white hover:text-white"
      variant={"ghost"}
    >
      {children}
    </Button>
  );
};
