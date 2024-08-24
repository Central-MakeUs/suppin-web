import endImg from '@/assets/end.png';
import { COLORS } from '@/theme';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Button } from '../common/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from '../common/dialog';

export const CompleteSurveyMoadl = ({
  open,
  onOpenChange,
  uuid,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  uuid: string;
}) => {
  const router = useNavigate();

  const handleCopyLink = () => {
    const link = `https://suppin-survey.vercel.app/${uuid}`;
    navigator.clipboard.writeText(link).then(
      () => {
        toast.success('링크가 클립보드에 복사되었습니다.');
      },
      err => {
        console.log('복사 에러: ', err);

        toast.error('링크 복사에 실패했습니다.');
      }
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <DialogHeader>
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <Button
              onClick={handleCopyLink}
              variant="add"
              style={{
                height: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: `1px solid ${COLORS.Main}`,
                width: 'fit-content',
                padding: '8px 16px',
                borderRadius: '110px',
                backgroundColor: `${COLORS.white}`,
                color: `${COLORS.Main}`,
              }}
            >
              링크 복사
            </Button>
          </div>
        </DialogHeader>
        <img src={endImg} alt="end" />
        <DialogDescription
          style={{
            fontSize: '14px',
            color: `${COLORS.Gray1}`,
            textAlign: 'center',
          }}
        >
          설문 생성이 완료됐어요!
        </DialogDescription>
        <DialogFooter>
          <Button
            variant="add"
            onClick={() => router('/', { replace: true })}
            style={{ width: '100%' }}
          >
            확인
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
