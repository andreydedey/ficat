import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { InputField, InputLabel, InputRoot } from "./Input/input";
import { sendEmail } from "../api/requests";
import { useNavigate } from "react-router";

const sendEmailFormSchema = z.object({
  name: z.string().nonempty(),
  phonenumber: z.string().optional(),
  email: z.string().email().nonempty(),
  message: z.string().optional(),
});

export type sendEmailData = z.infer<typeof sendEmailFormSchema>;

export function TalktoUs() {
  const navigate = useNavigate();

  const methods = useForm<sendEmailData>({
    resolver: zodResolver(sendEmailFormSchema),
  });

  const { register, handleSubmit } = methods;

  const submitEmail = (data: sendEmailData) => {
    sendEmail(data);
    navigate("/", { state: { successMessage: "Email enviado com sucesso!" } });
  };

  return (
    <div className="rounded-md border-2 p-4 border-red-700">
      <p className="flex flex-col gap-3 mb-4">
        <span>Tem alguma dúvida, sugestão ou problema a reportar?</span>
        <span>
          Entre em contato conosco pelo formulário abaixo. Sua mensagem será
          respondida assim que possível!
        </span>
        <span>
          Em caso de problemas, lembre-se de o descrever bem na mensagem.
        </span>
      </p>

      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(submitEmail, (errors) => console.log(errors))}
        >
          <fieldset className="flex flex-col gap-4 border-[1px] border-red-700 rounded-lg p-4">
            <legend className="p-2 ml-2 bg-red-800 rounded-lg text-white">
              Fale Conosco
            </legend>
            {/* Name */}
            <InputRoot className="grid grid-cols-4 justify-items-end items-center gap-4">
              <InputLabel value="Nome:" htmlFor="name" />
              <InputField
                type="text"
                name="name"
                className="col-span-3"
                placeholder="Ex: João Henrique Rabelo"
              />
            </InputRoot>
            {/* Email */}
            <InputRoot className="grid grid-cols-4 justify-items-end items-center gap-4">
              <InputLabel value="E-mail:" htmlFor="email" />
              <InputField
                type="text"
                name="email"
                className="col-span-3"
                placeholder="Ex: example@mail.com"
              />
            </InputRoot>
            {/* Phone */}
            <InputRoot className="grid grid-cols-4 justify-items-end items-center gap-4">
              <InputLabel value="Telefone:" htmlFor="phonenumber" />
              <InputField
                type="text"
                name="phonenumber"
                className="col-span-3"
                placeholder="Ex: (11) 1234-5678"
              />
            </InputRoot>
            {/* Message */}
            <InputRoot className="grid grid-cols-4 grid-rows-3 justify-items-end items-center gap-4">
              <InputLabel value="Mensagem:" htmlFor="message" />
              <textarea
                className="bg-white border-[3px] border-gray-600 text-gray-900 text-sm rounded-lg outline-gray-300
                focus:outline-1 focus:outline-gray-800 block w-full p-1.5 col-span-3 row-span-3 h-24"
                {...register("message")}
              ></textarea>
            </InputRoot>
            {/* File Upload */}
            {/* <InputRoot className="grid grid-cols-4 justify-items-end items-center gap-4">
              <InputLabel value="Arquivo:" htmlFor="file" />
              <InputField
                name="file"
                type="file"
                className="col-span-3 w-full text-sm border rounded-lg cursor-pointer focus:outline-none bg-white
                file:py-1.5 file:px-3 file:text-white file:bg-red-800"
              />
            </InputRoot> */}

            <button
              type="submit"
              className="self-center p-2.5 mt-3 text-sm font-medium rounded-lg border-2 border-red-800 bg-white 
              text-red-800 hover:text-white hover:bg-red-800 duration-300 w-24 cursor-pointer"
            >
              Enviar
            </button>
          </fieldset>
        </form>
      </FormProvider>
    </div>
  );
}
