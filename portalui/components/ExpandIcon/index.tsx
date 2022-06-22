import { CaretDown, CaretUp } from "@styled-icons/bootstrap";

type ExpandIconPros = {
  isExpanded: boolean,
  handleClick: () => void,
};

export default function ExpandIcon({
  isExpanded,
  handleClick,
}: ExpandIconPros) {
  return isExpanded ? (
    <CaretDown onClick={handleClick} />
  ) : (
    <CaretUp onClick={handleClick} />
  );
}