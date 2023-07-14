import Link from "next/link";
import {ButtonStyle, StyledButton} from "@/components/Button";
import styled from "styled-components";

const StyledLink = styled(Link)`
  ${ButtonStyle}
`;
export default function ButtonLink(props) {
    return (
      <StyledLink {...props} />
    );
}