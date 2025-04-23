import {
  faCircleInfo,
  faComment,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import { Instructions } from "./Instructions";

export function Navbar() {
  return (
    <div className="border-t-2 border-red-700 mb-2">
      <div className="flex -mb-px text-sm font-medium text-center text-red-800">
        <Link to="/" className="p-4 flex-1 rounded-lg hover:bg-slate-200">
          <FontAwesomeIcon icon={faHouse} className="text-xl me-2" />
          Página Inicial
        </Link>
        <Link to="/about" className="flex-1 p-4 rounded-lg hover:bg-slate-200">
          <FontAwesomeIcon icon={faCircleInfo} className="text-xl me-2" />
          Sobre
        </Link>
        {/* <Link to="#" className="flex-1 p-4 rounded-lg hover:bg-slate-200">
          <FontAwesomeIcon icon={faQuestion} className="text-xl me-2" />
          Instruções
        </Link> */}
        <Instructions />
        <Link to="#" className="flex-1 p-4 rounded-lg hover:bg-slate-200">
          <FontAwesomeIcon icon={faComment} className="text-xl me-2" />
          Fale Conosco
        </Link>
      </div>
    </div>
  );
}
