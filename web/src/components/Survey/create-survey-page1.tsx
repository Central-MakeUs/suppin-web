import step1 from '@/assets/step1.png';
import { PreviewButton } from '@/components/common/preview-button';
import { Subtitle } from '@/components/common/Subtitle';
import { createEventSchema, CreateEventType } from '@/lib/schema/event.schema';
import { formatDate } from '@/lib/timeUtils';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Box } from '../common/box';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../common/form';
import { Input } from '../common/input';
import { Textarea } from '../common/textarea';
import { RangeDatePicker } from '../myevent/range-date-picker';
import { SingleDatePicker } from '../myevent/single-date-picker';
import {
  CreateSurveyPageContent,
  CreateSurveyPageHeader,
  CreateSurveyPageWrapper,
} from './create-survey-page.styles';

export const CreateSurveyPageStep1: React.FC = () => {
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

  return (
    <CreateSurveyPageWrapper>
      <Subtitle title="설문 생성하기" />
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
          <form>
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
              <FormField
                name="eventPeriod"
                control={form.control}
                render={({ field }) => (
                  <RangeDatePicker
                    startDate={field.value.startDate}
                    endDate={field.value.endDate}
                    onChange={(startDate, endDate) =>
                      field.onChange({
                        startDate: formatDate(startDate),
                        endDate: formatDate(endDate),
                      })
                    }
                    placeholderStart="시작 날짜 선택"
                    placeholderEnd="종료 날짜 선택"
                  />
                )}
              />
              <FormField
                name="announcementDate"
                control={form.control}
                render={({ field }) => (
                  <SingleDatePicker
                    selected={field.value}
                    onChange={date => field.onChange(formatDate(date))}
                    placeholder="날짜 선택"
                  />
                )}
              />
            </Box>
          </form>
        </Form>
      </CreateSurveyPageContent>
    </CreateSurveyPageWrapper>
  );
};
