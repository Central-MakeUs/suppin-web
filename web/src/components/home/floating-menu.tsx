import { Link } from 'react-router-dom';
import BtnComment from '../common/BtnComment';
import BtnSurvey from '../common/BtnSurvey';
import { FloatingMenuWrapper } from './floating-menu.styles';

export const FloatingMenu = () => {
  return (
    <FloatingMenuWrapper>
      <Link to="/survey">
        <BtnSurvey />
      </Link>
      <Link to="/collect">
        <BtnComment />
      </Link>
    </FloatingMenuWrapper>
  );
};
