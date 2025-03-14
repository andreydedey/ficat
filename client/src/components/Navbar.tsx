import {
  faCircleInfo,
  faComment,
  faHouse,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Navbar() {
  return (
    <div className="border-t-2 border-red-700 mb-2">
      <div className="flex -mb-px text-sm font-medium text-center text-red-800">
        <a href="#" className="p-4 flex-1 rounded-lg hover:bg-slate-200">
          <FontAwesomeIcon icon={faHouse} className="text-xl me-2" />
          elias
        </a>
        <a href="#" className="flex-1 p-4 rounded-lg hover:bg-slate-200">
          <FontAwesomeIcon icon={faCircleInfo} className="text-xl me-2" />
          elias
        </a>
        <a href="#" className="flex-1 p-4 rounded-lg hover:bg-slate-200">
          <FontAwesomeIcon icon={faQuestion} className="text-xl me-2" />
          elias
        </a>
        <a href="#" className="flex-1 p-4 rounded-lg hover:bg-slate-200">
          <FontAwesomeIcon icon={faComment} className="text-xl me-2" />
          elias
        </a>
      </div>
    </div>
  );
}
