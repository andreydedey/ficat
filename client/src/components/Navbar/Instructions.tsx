import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import inserir_pdf from "../../assets/pdf/Inserir.pdf";
import preencher_pdf from "../../assets/pdf/Preencher.pdf";
import produto_pdf from "../../assets/pdf/Produto.pdf";

export function Instructions() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-4 flex-1 rounded-lg hover:bg-slate-200 relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        type="button"
      >
        <FontAwesomeIcon icon={faQuestion} className="text-xl me-2" />
        Instruções
      </button>

      {isOpen && (
        <div
          id="dropdown"
          className="z-10 absolute mt-3 w-full bg-red-900 rounded-lg"
        >
          <ul
            className="text-sm divide-y-2 divide-white text-red-50"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href={preencher_pdf}
                target="_blank"
                className="block px-4 py-2 rounded-lg hover:bg-red-700 hover:text-white"
              >
                Como preencher o formulário
              </a>
            </li>
            <li>
              <a
                href={inserir_pdf}
                target="_blank"
                className="block px-4 py-2 hover:bg-red-700 hover:text-white"
              >
                Como inserir a ficha em seu trabalho
              </a>
            </li>
            <li>
              <a
                href={produto_pdf}
                target="_blank"
                className="block px-4 py-2 rounded-lg hover:bg-red-700 hover:text-white"
              >
                Como solicitar ficha com produto
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
