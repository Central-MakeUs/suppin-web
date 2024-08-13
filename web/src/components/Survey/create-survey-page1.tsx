import step1 from '@/assets/step1.png';
import { PreviewButton } from '@/components/common/preview-button';
import { Subtitle } from '@/components/common/Subtitle';
import { createEventSchema, CreateEventType } from '@/lib/schema/event.schema';
import { useCreateEvent } from '@/services/queries/event.mutation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Box } from '../common/box';
import { Button } from '../common/button';
import { SignleDatePicker } from '../common/date-picker/single-date-picker';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../common/form';
import { Input } from '../common/input';
import { Label } from '../common/label';
import { SpinLoader } from '../common/loader';
import { Textarea } from '../common/textarea';
import {
  CreateSurveyPageContent,
  CreateSurveyPageHeader,
  CreateSurveyPageWrapper,
} from './create-survey-page1.styles';

export const CreateSurveyPageStep1 = () => {
  const router = useNavigate();

  const { createEventMutation, isCreateEventLoading } = useCreateEvent();

  const form = useForm<CreateEventType>({
    resolver: zodResolver(createEventSchema),
    defaultValues: {
      title: '',
      eventPeriod: {
        endDate: '',
        startDate: '',
      },
      announcementDate: '',
      description: '',
    },
  });

  const submitHandler = (values: CreateEventType) => {
    createEventMutation({
      announcementDate: values.announcementDate,
      description: values.description,
      title: values.title,
      endDate: values.eventPeriod.endDate,
      startDate: values.eventPeriod.startDate,
      type: 'SURVEY',
    });
  };

  return (
    <CreateSurveyPageWrapper>
      <Subtitle title="설문 생성하기" onBackClick={() => router('/')} />
      <CreateSurveyPageHeader>
        <div className="progress">
          <img src={step1} style={{ width: '68px' }} alt="Step 1" />
          <PreviewButton />
        </div>
        <h1 className="header">
          이벤트 생성을 위한
          <br />
          기본정보를 입력해주세요
        </h1>
      </CreateSurveyPageHeader>
      <CreateSurveyPageContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submitHandler)}>
            <Box className="box">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="제목을 입력해주세요"
                        {...field}
                        className="input"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="설명글을 입력해주세요 (최대 500자)"
                        className="textarea"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Box>
            <Box className="box">
              <Label>이벤트 진행 기간</Label>
              <div className="date-container">
                <FormField
                  control={form.control}
                  name="eventPeriod.startDate"
                  render={({ field }) => (
                    <FormItem style={{ marginBottom: 0 }}>
                      <FormControl>
                        <SignleDatePicker
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="eventPeriod.endDate"
                  render={({ field }) => {
                    const startDate = form.getValues('eventPeriod.startDate')
                      ? new Date(form.getValues('eventPeriod.startDate'))
                      : undefined;

                    const minTime = startDate
                      ? new Date(
                          startDate.setHours(startDate.getHours(), 0, 0, 0)
                        )
                      : undefined;

                    const maxTime = startDate
                      ? new Date(startDate.setHours(23, 59, 59, 999))
                      : undefined;

                    return (
                      <FormItem style={{ marginBottom: 0 }}>
                        <FormControl>
                          <SignleDatePicker
                            value={field.value}
                            onChange={field.onChange}
                            minDate={startDate}
                            minTime={minTime}
                            maxTime={maxTime}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
              <Label style={{ marginTop: '1rem' }}>당첨자 발표일</Label>
              {/* TODO: 발표일 유효성 */}
              <div className="date-container">
                <FormField
                  control={form.control}
                  name="announcementDate"
                  render={({ field }) => (
                    <FormItem style={{ marginBottom: 0 }}>
                      <FormControl>
                        <SignleDatePicker
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </Box>
            <Button
              disabled={isCreateEventLoading}
              variant="add"
              className="button"
            >
              {isCreateEventLoading ? <SpinLoader /> : '다음으로'}
            </Button>
          </form>
        </Form>
      </CreateSurveyPageContent>
    </CreateSurveyPageWrapper>
  );
};
