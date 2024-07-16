import styled from 'styled-components';
import { Tag } from './tag';
import { Comment } from './comment';
import { Title } from './title';
import { EventPeriod } from './period';
import { EventPresent } from './present';
import { Divider } from './divider';
import mainCardBackground from '../../../assets/main_card.png';

const MainCard = () => {
  return (
    <Container>
      <Header>
        <Tag />
        <Comment />
      </Header>
      <Title />
      <Divider />
      <EventInfo>
        <EventPeriod />
        <EventPresent />
      </EventInfo>
    </Container>
  );
};

export default MainCard;

const Container = styled.div`
  /* background-color: white; */
  background: url(${mainCardBackground}) no-repeat center/cover;
  width: 350px;
  height: 158px;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
