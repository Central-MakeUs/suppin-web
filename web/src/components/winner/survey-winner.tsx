import { SignleDatePicker } from '@/components/common/date-picker/single-date-picker';
import { WinnerFormType, winnerSchema } from '@/lib/schema/winner.schema';
import { useDraftWinner } from '@/services/queries/winner.mutation';
import { QuestionType } from '@/types/survey';
import { WinnerPayload } from '@/types/winner';
import { zodResolver } from '@hookform/resolvers/zod';
import { X } from 'lucide-react';
import { useRef } from 'react';
import { ControllerRenderProps, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button } from '../common/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../common/form';
import { Input } from '../common/input';
import {
  Badge,
  BadgeContainer,
  SurveyWinnerWrapper,
} from './survey-winner.styles';

type SurveyWinnerProps = {
  surveyId: string;
  questions: [
    {
      questionId: number;
      questionType: QuestionType;
      questionText: string;
      options: [string];
    },
  ];
};

export const SurveyWinner = ({ surveyId, questions }: SurveyWinnerProps) => {
  const router = useNavigate();
  const { draftWinnersMutation } = useDraftWinner();

  const form = useForm<WinnerFormType>({
    resolver: zodResolver(winnerSchema),
    defaultValues: {
      winnerCount: '',
      eventPeriod: {
        startDate: '',
        endDate: '',
      },
      minLength: '',
      keywords: [],
    },
  });

  const keywordInputRef = useRef<HTMLInputElement>(null);

  const addKeyword = (
    field: ControllerRenderProps<
      {
        winnerCount: string;
        eventPeriod: {
          startDate: string;
          endDate: string;
        };
        minLength?: string | undefined;
        keywords?: (string | undefined)[] | undefined;
      },
      'keywords'
    >
  ) => {
    const tagValue = keywordInputRef.current?.value.trim() || '';
    if (tagValue !== '') {
      if (tagValue.length > 15) {
        return form.setError('keywords', {
          type: 'required',
          message: 'Tag must be less than 15 characters',
        });
      }
      if (!field.value?.includes(tagValue as never)) {
        form.setValue(
          'keywords',
          field.value ? [...field.value, tagValue] : [tagValue]
        );
        if (keywordInputRef.current) keywordInputRef.current.value = '';
        form.clearErrors('keywords');
      }
    } else {
      form.trigger();
    }
  };

  const tagRemoveHandler = (
    tag: string,
    field: ControllerRenderProps<
      {
        winnerCount: string;
        eventPeriod: {
          startDate: string;
          endDate: string;
        };
        minLength?: string | undefined;
        keywords?: (string | undefined)[] | undefined;
      },
      'keywords'
    >
  ) => {
    const newTags = field.value?.filter(t => t !== tag);
    form.setValue('keywords', newTags);
  };

  const submitHandler = async (values: WinnerFormType) => {
    const payload: WinnerPayload = {
      keywords: values.keywords,
      endDate: values.eventPeriod.endDate,
      startDate: values.eventPeriod.startDate,
      minLength: parseInt(values.minLength || '0'),
      winnerCount: parseInt(values.winnerCount),
      surveyId: parseInt(surveyId),
      questionId: questions[0]?.questionId,
    };
    await draftWinnersMutation(payload);

    router('/');
  };
  console.log(form.formState.errors);

  return (
    <SurveyWinnerWrapper>
      <Form {...form}>
        <form className="form" onSubmit={form.handleSubmit(submitHandler)}>
          <div className="winner-count">
            <div className="winner-count-header">
              <h2>당첨자 수</h2>
              <p>전체 응답수 {}</p>
            </div>
            <FormField
              control={form.control}
              name="winnerCount"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="number"
                      className="input"
                      placeholder="당첨자 수를 입력해주세요"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="date">
            <div className="date-info">
              <div className="date-label">
                <h2>기간 설정</h2>
                {form.getFieldState('eventPeriod').error && (
                  <p className="error">기간을 입력해주세요</p>
                )}
              </div>
              <p>특정 날짜에 응답한 참여자 중 당첨자를 선정할 수 있어요.</p>
            </div>
            <div
              className={`date-container ${form.getFieldState('eventPeriod').error && 'date-error'}`}
            >
              <FormField
                control={form.control}
                name="eventPeriod.startDate"
                render={({ field }) => {
                  return (
                    <FormItem style={{ marginBottom: 0, width: '100%' }}>
                      <FormControl>
                        <SignleDatePicker
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="eventPeriod.endDate"
                render={({ field }) => {
                  const startDate = form.getValues('eventPeriod.startDate')
                    ? new Date(form.getValues('eventPeriod.startDate'))
                    : undefined;

                  return (
                    <FormItem style={{ marginBottom: 0, width: '100%' }}>
                      <FormControl>
                        <SignleDatePicker
                          value={field.value}
                          onChange={field.onChange}
                          minDate={startDate}
                        />
                      </FormControl>
                    </FormItem>
                  );
                }}
              />
            </div>
          </div>
          <div className="min-len">
            <div className="min-len-info">
              <h2>최소 글자수</h2>
              <p>정성어린 응답의 기준이 되는 최소 글자수를 입력해 주세요.</p>
            </div>
            <FormField
              control={form.control}
              name="minLength"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="number"
                      className="input"
                      placeholder="글자 수를 입력해주세요"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="keyword">
            <div className="keyword-info">
              <h2>키워드 설정</h2>
              <p>주관식에서 포함되길 바라는 키워드를 입력해 주세요.</p>
            </div>
            <FormField
              control={form.control}
              name="keywords"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <div className="keyword-input">
                        <Input
                          ref={keywordInputRef}
                          className="input"
                          placeholder="키워드를 입력해주세요"
                        />
                        <Button
                          type="button"
                          variant="add"
                          onClick={() => addKeyword(field)}
                        >
                          추가
                        </Button>
                      </div>
                      {field.value && field.value.length > 0 && (
                        <BadgeContainer>
                          {field.value.map(keyword => (
                            <Badge
                              key={keyword}
                              onClick={() =>
                                keyword && tagRemoveHandler(keyword, field)
                              }
                            >
                              {keyword}
                              <X />
                            </Badge>
                          ))}
                        </BadgeContainer>
                      )}
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div
            style={{
              width: '100%',
              padding: '0 2rem',
            }}
          >
            <Button
              type="submit"
              variant="add"
              style={{
                width: '100%',
                marginBottom: '2rem',
              }}
              disabled={
                questions.filter(q => q.questionType === 'SUBJECTIVE')
                  .length === 0
              }
            >
              랜덤 추첨하기
            </Button>
          </div>
        </form>
      </Form>
    </SurveyWinnerWrapper>
  );
};
