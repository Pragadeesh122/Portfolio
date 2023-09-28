import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { getUsers } from '../services/getUsers';

function Contact() {
  const { register, handleSubmit, reset } = useForm();

  const { mutate, isLoading } = useMutation({
    mutationFn: (user) => getUsers({ user }),
    onSuccess: () => {
      toast.success('Your response has been submitted!');
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    mutate(data);

    console.log(data);
  }

  return (
    <form
      id="contact"
      className="flex flex-col items-center justify-center  gap-8 bg-yellow-700 py-[60px] pr-[150px] text-base text-black shadow-sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-1  pl-[150px] ">
        <h1 className="pb-[40px] text-xl font-bold">Get In Touch!</h1>
      </div>
      <div className="grid grid-cols-1 justify-start gap-11">
        <div className="flex gap-11">
          <div className="grid grid-cols-2 items-center gap-5 ">
            <label className="justify-self-end" htmlFor="firstName">
              First Name :
            </label>
            <input
              type="text"
              required
              className="rounded border-[1px] border-black py-2 pl-[20px] pr-[180px]"
              placeholder="FirstName"
              id="firstName"
              {...register('firstName')}
            />
          </div>
          <div className="grid grid-cols-2 items-center gap-5 ">
            <label className="justify-self-end" htmlFor="lastName">
              Last Name :
            </label>
            <input
              type="text"
              required
              className="rounded border-[1px] border-black py-2 pl-[20px] pr-[180px]"
              placeholder="LastName"
              id="lastName"
              {...register('lastName')}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 items-center gap-5 justify-self-start ">
          <label className="justify-self-end" htmlFor="email">
            Email :
          </label>
          <input
            type="email"
            required
            className="rounded border-[1px] border-black py-2 pl-[20px] pr-[180px]"
            placeholder="Email"
            id="email"
            {...register('email')}
          />
        </div>
        <div className="grid grid-cols-2 items-center gap-5 justify-self-start ">
          <label className="justify-self-end" htmlFor="message">
            Message :
          </label>
          <textarea
            type="textbox"
            required
            className="ml-[-4px] rounded border-[1px] border-black py-6 pl-[20px] pr-[180px]"
            placeholder="Feedback"
            id="message"
            {...register('message')}
          />
        </div>
        <div className="justify-self-center py-4 pl-[120px]">
          <button className="rounded-xl border-[1px] border-black bg-orange-700 px-8 py-2 text-[20px]">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default Contact;
