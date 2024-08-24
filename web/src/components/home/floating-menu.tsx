import { Link } from 'react-router-dom';
import BtnComment from '../common/BtnComment';
import BtnSurvey from '../common/BtnSurvey';
import { FloatingMenuWrapper } from './floating-menu.styles';

export const FloatingMenu = () => {
  return (
    <FloatingMenuWrapper>
      <Link to="/collect">
        <BtnComment />
      </Link>
      <Link to="/survey/new">
        <BtnSurvey />
      </Link>
    </FloatingMenuWrapper>
  );
};
