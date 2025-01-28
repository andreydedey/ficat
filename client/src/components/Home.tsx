export function Home() {
  return (
    <div className="border-2 border-red-500 p-4 rounded-md">
      <form action="#" className="max-w-sm mx-auto">
        <h2>Dados do Autor</h2>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Nome
          </label>
          <input
            type="text"
            id="name"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
      </form>
    </div>
  );
}
