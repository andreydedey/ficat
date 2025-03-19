import {InputRoot, InputField, InputLabel} from './Input/input'

export function Home() {
  return (
    <div className="rounded-md border-2 p-4 border-red-700">
      <form action="#" className="flex flex-col gap-3 justify-start max-w-2xl">
        <fieldset className="border-[1px] border-red-700 rounded-lg p-4">
          <legend className="p-2 ml-2 bg-red-800 rounded-lg text-white">
            Autor
          </legend>
          <InputRoot className='grid grid-'>
            <InputLabel value='Nome' htmlFor='name' />
            <InputField type='text' id='name' />
          </InputRoot>

          {/* <label
            htmlFor="name"
            className="mb-2 text-sm font-medium text-gray-900"
          >
            Nome:
          </label>
          <input
            type="text"
            id="name"
            className="col-span-3 border border-gray-300 text-gray-900
                text-sm rounded-lg outline-gray-300
                focus:outline-2 focus:outline-blue-500 w-full p-2.5"
            placeholder="Ex.: João Henrique Rabelo"
            required
          /> */}

          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Sobrenome:
          </label>
          <input
            type="text"
            id="name"
            className="col-span-3 border border-gray-300 text-gray-900
                text-sm rounded-lg outline-gray-300
                focus:outline-2 focus:outline-blue-500 block w-full p-2.5"
            placeholder="Ex.: Barbosa"
            required
          />
        </fieldset>

        <fieldset className="grid grid-cols-4 border-[1px] border-red-700 rounded-lg p-4 items-center justify-items-end gap-4">
          <legend className="p-2 ml-2 bg-red-800 rounded-lg text-white">
            Dados do Trabalho
          </legend>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Título do Trabalho:
          </label>
          <input
            type="text"
            id="name"
            className="col-span-3 border border-gray-300 text-gray-900
                text-sm rounded-lg outline-gray-300
                focus:outline-2 focus:outline-blue-500 block w-full p-2.5"
            placeholder="Ex.: Redes sociais em bibliotecas universitárias"
            required
          />
          <label
            htmlFor="name"
            className="block mb-2 text-sm text-right font-medium text-gray-900"
          >
            Subtítulo do Trabalho:
          </label>
          <input
            type="text"
            id="name"
            className="col-span-3 border border-gray-300 text-gray-900
            text-sm rounded-lg outline-gray-300
            focus:outline-2 focus:outline-blue-500 block w-full p-2.5"
            placeholder="Ex.: estudo exploratório"
            required
          />
        </fieldset>
      </form>
    </div>
  );
}
