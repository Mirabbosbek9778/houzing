import styled from "styled-components";
import { ReactComponent as settings } from "../../assets/icons/settings.svg";
import { ReactComponent as houses } from "../../assets/icons/houses.svg";
import { ReactComponent as search } from "../../assets/icons/search.svg";

const Container = styled.div`
  display: flex;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px 0;
  gap: 20px;
`;
const Icons = styled.div`
  margin-right: 8px;
`;
Icons.Search = styled(search)`
  margin-right: 8px;
`;
Icons.Settings = styled(settings)`
  margin-right: 8px;
`;
Icons.Houses = styled(houses)`
  margin-right: 8px;
`;

const MenuWrapper = styled.div`
  padding: 30px;
  background: white;
  border: 1px solid #e6e9ec;
`;
const Section = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
`;

export { Container, Icons, MenuWrapper, Section };
