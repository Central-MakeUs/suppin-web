import { Badge } from '@/components/common/badge';
import { Box } from '@/components/common/box';
import { Input } from '@/components/common/input';
import { ChevronDown } from 'lucide-react';
import { PersonalWrapper } from './personal.styles';

export const Personal = () => {
  const personal = JSON.parse(sessionStorage.getItem('personal') as string) as {
    optionName: string;
  }[];

  return (
    <PersonalWrapper>
      <Box className="box">
        <Badge variant="default">개인정보 수집</Badge>
        <div className="data">
          {personal && personal.length > 0
            ? personal.map((item, idx) => {
                if (item.optionName === '주소') {
                  return (
                    <div key={idx} className="input-container">
                      <span>{item.optionName}을 입력해주세요</span>
                      <div className="address">
                        <Input
                          disabled
                          placeholder="내 주소 찾기"
                          className="input"
                        />
                        <ChevronDown />
                      </div>
                      <Input
                        disabled
                        placeholder="상세 주소를 입력해주세요"
                        className="input"
                      />
                    </div>
                  );
                }

                return (
                  <div key={idx} className="input-container">
                    <span>{item.optionName}을 입력해주세요</span>
                    <Input
                      disabled
                      placeholder={item.optionName}
                      className="input"
                    />
                  </div>
                );
              })
            : null}
        </div>
      </Box>
    </PersonalWrapper>
  );
};
