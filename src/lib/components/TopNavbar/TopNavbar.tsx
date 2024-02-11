import { TopNavbarMainContainer } from "./styles/TopNavbar.styles.ts";
import ZoomControls from "./components/ZoomControls/ZoomControls.tsx";

type TopNavbarProps = {};

const TopNavbar = ({}: TopNavbarProps) => {
  return (
    <TopNavbarMainContainer>
      <ZoomControls />
    </TopNavbarMainContainer>
  );
};

export default TopNavbar;
