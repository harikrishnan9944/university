import React from "react";
import { Trash2 } from "lucide-react";

function Delete_btn() {
  return (
    <button
      type="button"
      className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition shadow"
    >
      <Trash2 size={18} />
    </button>
  );
}

export default Delete_btn;
