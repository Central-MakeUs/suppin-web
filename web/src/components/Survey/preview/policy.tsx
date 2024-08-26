import { Box } from '@/components/common/box';
import { RootState } from '@/store';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';
import { PolicyWrapper } from './policy.styles';

export const Policy = () => {
  const { policy } = useSelector((state: RootState) => state.survey);

  return (
    <PolicyWrapper>
      <Box className="box">
        <div className="info">
          <h1></h1>
          <p className="policy">{parse(policy)}</p>
        </div>
      </Box>
    </PolicyWrapper>
  );
};
