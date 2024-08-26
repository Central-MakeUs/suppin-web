import step1 from '@/assets/step1.png';
import { Subtitle } from '@/components/common/Subtitle';
import {
  CreateSurveyPageContent,
  CreateSurveyPageHeader,
  CreateSurveyPageWrapper,
} from '@/components/Survey/create-survey-page1.styles';
import { createEventSchema, CreateEventType } from '@/lib/schema/event.schema';
import { useCreateEvent } from '@/services/queries/event.mutation';
import { setEvent } from '@/store/survey';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
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

export const CreateSurveyPageStep1 = () => {
  const router = useNavigate();

  const dispatch = useDispatch();

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
    dispatch(
      setEvent({
        announcementDate: values.announcementDate,
        description: values.description,
        title: values.title,
        endDate: values.eventPeriod.endDate,
        startDate: values.eventPeriod.startDate,
        type: 'SURVEY',
      })
    );

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
                  render={({ field }) => {
                    const startDate = new Date();

                    return (
                      <FormItem style={{ marginBottom: 0, width: '100%' }}>
                        <FormControl>
                          <SignleDatePicker
                            value={field.value}
                            onChange={field.onChange}
                            minDate={startDate}
                          />
                        </FormControl>
                        <FormMessage />
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
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
              <Label style={{ marginTop: '1rem' }}>당첨자 발표일</Label>
              <div className="date-container">
                <FormField
                  control={form.control}
                  name="announcementDate"
                  render={({ field }) => {
                    const endDate = form.getValues('eventPeriod.endDate')
                      ? new Date(form.getValues('eventPeriod.endDate'))
                      : undefined;

                    return (
                      <FormItem style={{ marginBottom: 0, width: '100%' }}>
                        <FormControl>
                          <SignleDatePicker
                            value={field.value}
                            onChange={field.onChange}
                            minDate={endDate}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
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
