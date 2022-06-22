import { HeaderContainer, TitleContainer, IconContainer } from "./styles";
import { List, ChevronLeft } from "@styled-icons/bootstrap";

type HeaderProps = {
  isOpened: boolean,
  toggleDrawer: ()=> void,
}

export default function Header ({isOpened, toggleDrawer}: HeaderProps) {
  return (
    <HeaderContainer>
      <IconContainer onClick={toggleDrawer}>
        {isOpened ? <ChevronLeft /> : <List />}
      </IconContainer>
      <TitleContainer>Header</TitleContainer>
    </HeaderContainer>
  );
}
