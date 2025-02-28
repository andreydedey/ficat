import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCircleInfo,
  faQuestion,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

export function Navbar() {
  return (
    <div className="border-b border-gray-200">
      <ul className="flex flex-wrap justify-between -mb-px text-sm font-medium text-center">
        <li className="me-2">
          <a
            href="#"
            className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg"
          >
            <FontAwesomeIcon icon={faHouse} className="text-xl me-2" />
            elias
          </a>
        </li>
        <li className="me-2">
          <a
            href="#"
            className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg"
          >
            <FontAwesomeIcon icon={faCircleInfo} className="text-xl me-2" />
            Sobre
          </a>
        </li>
        <li className="me-2">
          <a
            href="#"
            className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg"
          >
            <FontAwesomeIcon icon={faQuestion} className="text-xl me-2" />
            Instruções
          </a>
        </li>
        <li className="me-2 text-blue-500">
          <a
            href="#"
            className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-blue-700 hover:border-blue-500 group"
          >
            <FontAwesomeIcon icon={faComment} className="text-xl me-2" />
            Fale Conosco
          </a>
        </li>
      </ul>
    </div>
  );
}
