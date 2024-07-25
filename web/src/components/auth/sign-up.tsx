import { Form } from '@/components/common/form';
import { signupSchema, SignupType } from '@/lib/schema/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export function SignUp() {
  const form = useForm<SignupType>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: '',
      password: '',
      email: '',
      name: '',
      passwordConfirm: '',
      phone: '',
      type: 'unselected',
    },
  });

  return (
    <Form {...form}>
      <form></form>
    </Form>
  );
}
