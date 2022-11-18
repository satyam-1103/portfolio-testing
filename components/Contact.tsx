import React, { useRef } from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { PageInfo } from "../typings";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = { pageInfo: PageInfo };

export default function Contact({ pageInfo }: Props) {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit = handleSubmit((data) => {
    window.location.href = `mailto:${pageInfo?.email}?subject=${data.subject}&body=Hi, I am ${data.name}. ${data.message} (${data.email})`;
  });

  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 pb-36">
      <h3 className="absolute top-8 uppercase tracking-[20px] text-gray-500 ">
        Contact
      </h3>

      <div className="flex flex-col space-y-5 mt-40">
        <h4 className="text-2xl font-semibold text-center">
          Enough showcasing, now{" "}
          <span className="decoration-[#f7ab0a]/50 underline">
            Let us talk.
          </span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center border py-2 rounded-sm border-[#f7ab0a]/20 ">
            <PhoneIcon className="h-7 w-7 text-[#f7ab0a] animate-pulse" />
            <p className="text-md"> {pageInfo?.phone} </p>
          </div>

          <div className="flex items-center space-x-5 justify-center border py-2 rounded-sm border-[#f7ab0a]/20 ">
            <MapPinIcon className="h-7 w-7 text-[#f7ab0a] animate-pulse" />
            <p className="text-md">{pageInfo?.address}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center border py-2 rounded-sm border-[#f7ab0a]/20 ">
            <EnvelopeIcon className="h-7 w-7 text-[#f7ab0a] animate-pulse" />
            <p className="text-md">{pageInfo?.email}</p>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              type="text"
              className="contactInput"
              placeholder="Name"
            />
            <input
              {...register("email")}
              type="email"
              className="contactInput"
              placeholder="Email"
            />
          </div>
          <input
            type="text"
            className="contactInput"
            placeholder="Subject"
            {...register("subject")}
          />
          <textarea
            className="contactInput"
            placeholder="Message"
            {...register("message")}
          />
          <button
            className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
