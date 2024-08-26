import circleIcon from '@/assets/uncheckRound.png';
import { Badge } from '@/components/common/badge';
import { Box } from '@/components/common/box';
import { RootState } from '@/store';
import pares from 'html-react-parser';
import { useSelector } from 'react-redux';
import { PolicyWrapper } from './policy.styles';

export const Policy = () => {
  const { policy } = useSelector((state: RootState) => state.survey);

  return (
    <PolicyWrapper>
      <Box className="box">
        <Badge variant="default">정보 수집 동의</Badge>
        <div className="policy">{pares(policy)}</div>
        <div className="btns">
          <Box className="agree">
            <img src={circleIcon} alt="circle" />
            <span>네, 동의합니다</span>
          </Box>
          <Box className="agree">
            <img src={circleIcon} alt="circle" />
            <span>아니요, 동의하지 않습니다</span>
          </Box>
        </div>
      </Box>
    </PolicyWrapper>
  );
};
