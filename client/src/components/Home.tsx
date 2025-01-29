export function Home() {
  return (
    <div className="rounded-md border-2 p-4">
      <form
        action="#"
        className="grid grid-cols-2 justify-start gap-6 max-w-xl"
      >
        <div className="grid grid-cols-4 items-center justify-items-end gap-4 col-span-2">
          <label
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
          />
        </div>

        <div className="grid grid-cols-4 justify-items-end gap-4 col-span-2 items-center">
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
        </div>

        <div className="grid grid-cols-4 justify-items-end gap-4 items-center col-span-2">
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
        </div>
        <div className="grid grid-cols-4 justify-items-end gap-4 items-center col-span-2">
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
        </div>
        <div className="grid grid-cols-2 items-center">
          <h2>Trabalho BOM DEXAR INLINE</h2>
          <div className="flex flex-col gap-2">
            <div className="flex gap-4">
              <input
                id="inline-radio"
                type="radio"
                value=""
                name="inline-radio-group"
                className="h-4 w-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              />
              <label
                htmlFor="inline-radio"
                className="text-sm font-medium text-gray-900"
              >
                Tese
              </label>
            </div>
            <div className="flex gap-4">
              <input
                id="inline-radio"
                type="radio"
                value=""
                name="inline-radio-group"
                className="h-4 w-4  text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              />
              <label
                htmlFor="inline-radio"
                className="text-sm font-medium text-gray-900"
              >
                Dissertação
              </label>
            </div>
            <div className="flex gap-4">
              <input
                id="inline-radio"
                type="radio"
                value=""
                name="inline-radio-group"
                className="h-4 w-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              />
              <label
                htmlFor="inline-radio"
                className="text-sm font-medium text-gray-900"
              >
                TC (Especialização)
              </label>
            </div>
            <div className="flex gap-4">
              <input
                id="inline-radio"
                type="radio"
                value=""
                name="inline-radio-group"
                className="h-4 w-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              />
              <label
                htmlFor="inline-radio"
                className="text-sm font-medium text-gray-900"
              >
                TC (Graduação)
              </label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 items-center justify-items-end gap-4 col-span-2">
          <label
            htmlFor="name"
            className="mb-2 text-sm font-medium text-gray-900"
          >
            Programa:
          </label>
          <input
            type="text"
            id="name"
            className="col-span-3 border border-gray-300 text-gray-900
              text-sm rounded-lg outline-gray-300
              focus:outline-2 focus:outline-blue-500 w-full p-2.5"
            placeholder="Ex.: João Henrique Rabelo"
            required
          />
        </div>

        <div className="grid grid-cols-4 items-center justify-items-end gap-4 col-span-2">
          <label
            htmlFor="name"
            className="mb-2 text-sm text-right font-medium text-gray-900"
          >
            Nome do Orientador:
          </label>
          <input
            type="text"
            id="name"
            className="col-span-3 border border-gray-300 text-gray-900
              text-sm rounded-lg outline-gray-300
              focus:outline-2 focus:outline-blue-500 w-full p-2.5"
            placeholder="Ex.: João Henrique Rabelo"
            required
          />
        </div>

        <div className="grid grid-cols-4 justify-items-end gap-4 col-span-2 items-center">
          <label
            htmlFor="name"
            className="block mb-2 text-sm text-right font-medium text-gray-900"
          >
            Sobrenome do Orientador:
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
        </div>

        <div className="grid grid-cols-4 items-center justify-items-end gap-4 col-span-2">
          <label
            htmlFor="name"
            className="mb-2 text-sm text-right font-medium text-gray-900"
          >
            Nome do Coorientador:
          </label>
          <input
            type="text"
            id="name"
            className="col-span-3 border border-gray-300 text-gray-900
              text-sm rounded-lg outline-gray-300
              focus:outline-2 focus:outline-blue-500 w-full p-2.5"
            placeholder="Ex.: João Henrique Rabelo"
            required
          />
        </div>

        <div className="grid grid-cols-4 justify-items-end gap-4 col-span-2 items-center">
          <label
            htmlFor="name"
            className="block mb-2 text-sm text-right font-medium text-gray-900"
          >
            Sobrenome do Coorientador:
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
        </div>

        <div className="grid grid-cols-4 items-center justify-items-end col-span-2 gap-4">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm text-right font-medium text-gray-900"
          >
            Titulação do Orientador:
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 col-span-3"
          >
            <option selected>- Selecione -</option>
            <option value="graduado">Graduado</option>
            <option value="especialista">Especialista</option>
            <option value="mestre">Mestre</option>
            <option value="doutor">Doutor</option>
          </select>
        </div>

        <div className="grid grid-cols-4 items-center justify-items-end col-span-2 gap-4">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm text-right font-medium text-gray-900"
          >
            Titulação do Coorientador:
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 col-span-3"
          >
            <option selected>- Selecione -</option>
            <option value="graduado">Graduado</option>
            <option value="especialista">Especialista</option>
            <option value="mestre">Mestre</option>
            <option value="doutor">Doutor</option>
          </select>
        </div>

        <label
          htmlFor="year"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Ano de Apresentação
        </label>
        <select
          id="year"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
          focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option selected>2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>

        <label
          htmlFor="year"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Número de Folhas
        </label>
        <input
          type="text"
          id="name"
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 
            text-sm rounded-lg outline-gray-300
            focus:outline-2 focus:outline-blue-500 block w-full p-2.5"
          placeholder="Ex.: xxi, 70"
          required
        />

        <label
          htmlFor="ilustration"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Ilustração
        </label>
        <select
          id="ilustration"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
          focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option selected>Não possui</option>
          <option value="Não possui">Não possui</option>
          <option value="Coloridas">Coloridas</option>
          <option value="Preto e branco">Preto e branco</option>
        </select>

        <label
          htmlFor="academic-unit"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Unidade Acadêmica
        </label>
        <select
          id="academic-unit"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
          focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option selected>Institutos de Ciências Exatas e Naturais</option>
          <option value="Não possui">
            Institutos de Ciências Exatas e Naturais
          </option>
          <option value="Coloridas">Coloridas</option>
          <option value="Preto e branco">Preto e branco</option>
        </select>
      </form>
    </div>
  );
}
