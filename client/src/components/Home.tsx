export function Home() {
  return (
    <div className="p-4 rounded-md">
      <form action="#" className="max-w-sm mx-auto">
        <h2>Dados do Autor</h2>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Nome
        </label>
        <input
          type="text"
          id="name"
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 
            text-sm rounded-lg outline-gray-300
            focus:outline-2 focus:outline-blue-500 block w-full p-2.5"
          placeholder="Ex.: João Henrique Rabelo"
          required
        />

        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Sobrenome
        </label>
        <input
          type="text"
          id="name"
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 
            text-sm rounded-lg outline-gray-300
            focus:outline-2 focus:outline-blue-500 block w-full p-2.5"
          placeholder="Ex.: Barbosa"
          required
        />

        <h2>Dados do Trabalho</h2>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Título do Trabalho
        </label>
        <input
          type="text"
          id="name"
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 
            text-sm rounded-lg outline-gray-300
            focus:outline-2 focus:outline-blue-500 block w-full p-2.5"
          placeholder="Ex.: Redes sociais em bibliotecas universitárias"
          required
        />

        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Subtítulo do Trabalho
        </label>
        <input
          type="text"
          id="name"
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 
            text-sm rounded-lg outline-gray-300
            focus:outline-2 focus:outline-blue-500 block w-full p-2.5"
          placeholder="Ex.: estudo exploratório"
          required
        />

        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Nome do Orientador
        </label>
        <input
          type="text"
          id="name"
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 
            text-sm rounded-lg outline-gray-300
            focus:outline-2 focus:outline-blue-500 block w-full p-2.5"
          placeholder="Ex.: Paulo Victor Lobato"
          required
        />

        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Sobrenome do Orientador
        </label>
        <input
          type="text"
          id="name"
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 
            text-sm rounded-lg outline-gray-300
            focus:outline-2 focus:outline-blue-500 block w-full p-2.5"
          placeholder="Ex.: Sarmento"
          required
        />

        <div className="flex items-center mt-3">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100
            border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2"
          />
          <label
            htmlFor="default-checkbox"
            className="ms-2 text-sm font-medium text-gray-900"
          >
            Orientadora
          </label>
        </div>

        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Titulação do Coorientador
        </label>
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
          focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option selected>- Selecione -</option>
          <option value="graduado">Graduado</option>
          <option value="especialista">Especialista</option>
          <option value="mestre">Mestre</option>
          <option value="doutor">Doutor</option>
        </select>

        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Nome do Coorientador
        </label>
        <input
          type="text"
          id="name"
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 
            text-sm rounded-lg outline-gray-300
            focus:outline-2 focus:outline-blue-500 block w-full p-2.5"
          placeholder="Ex.: Bruno Santos Sousa"
          required
        />

        <div className="flex items-center mt-3">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100
            border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2"
          />
          <label
            htmlFor="default-checkbox"
            className="ms-2 text-sm font-medium text-gray-900"
          >
            Coorientadora
          </label>
        </div>

        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Titulação do Coorientador
        </label>
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
          focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option selected>- Selecione -</option>
          <option value="graduado">Graduado</option>
          <option value="especialista">Especialista</option>
          <option value="mestre">Mestre</option>
          <option value="doutor">Doutor</option>
        </select>

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

        <div className="flex">
          <div className="flex items-center me-4">
            <input
              id="inline-radio"
              type="radio"
              value=""
              name="inline-radio-group"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
            />
            <label
              htmlFor="inline-radio"
              className="ms-2 text-sm font-medium text-gray-900"
            >
              Tese
            </label>

            <input
              id="inline-radio"
              type="radio"
              value=""
              name="inline-radio-group"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
            />
            <label
              htmlFor="inline-radio"
              className="ms-2 text-sm font-medium text-gray-900"
            >
              Dissertação
            </label>

            <input
              id="inline-radio"
              type="radio"
              value=""
              name="inline-radio-group"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
            />
            <label
              htmlFor="inline-radio"
              className="ms-2 text-sm font-medium text-gray-900"
            >
              TC (Especialização)
            </label>

            <input
              id="inline-radio"
              type="radio"
              value=""
              name="inline-radio-group"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
            />
            <label
              htmlFor="inline-radio"
              className="ms-2 text-sm font-medium text-gray-900"
            >
              TC (Graduação)
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}
