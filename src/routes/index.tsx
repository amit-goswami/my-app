import { createFileRoute } from "@tanstack/react-router";
import { ROUTES } from "../types/route.interface";
import { useRouter } from "@tanstack/react-router";
import MainWrapper from "../components/wrapper";
import Button from "../components/button";

export const Route = createFileRoute(ROUTES.HOME)({
  component: Index,
});

function Index() {
  const router = useRouter();

  const handleNavigation = () => {
    router.navigate({
      to: `${ROUTES.ARRAY}`,
    });
  };
  return (
    <MainWrapper>
      <Button
        variant="primary"
        children="Array"
        className="w-2/12"
        onClick={() => handleNavigation()}
      />
    </MainWrapper>
  );
}
