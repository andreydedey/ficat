import { useState } from "react";
import { AuthorsFieldset } from "./AuthorsFieldset";
import { KeywordsFieldset } from "./KeywordsFieldset";
import { WorkDataFieldset } from "./WorkDataFieldset";

export function Home() {
  const [numberAutors, setNumberAutors] = useState(1);

  const handleAddAutor = () => {
    setNumberAutors((prev) => prev + 1);
  };

  const handleExcludeAutor = () => {
    setNumberAutors((prev) => prev - 1);
  };

  return (
    <div className="rounded-md border-2 p-4 border-red-700">
      <form action="#" className="flex flex-col gap-3 justify-start max-w-2xl">
        <AuthorsFieldset
          numberAutors={numberAutors}
          handleAddAutor={handleAddAutor}
          handleExcludeAutor={handleExcludeAutor}
        />
        <WorkDataFieldset />
        <KeywordsFieldset />
        <button
          type="submit"
          className="self-center p-2.5 mt-3 text-sm font-medium rounded-lg border-2 border-red-800 bg-white 
            text-red-800 hover:text-white hover:bg-red-800 duration-300 cursor-pointer"
        >
          Gerar Ficha Catalográfica
        </button>
      </form>
    </div>
  );
}
