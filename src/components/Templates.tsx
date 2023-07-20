import { VNode } from "preact";

import { Label } from "./common/Label";
import templates from "@/templates.json";
import { statusStore } from "@/store/statusStore";

export function Templates(): VNode {
  type TemplateInfo = {
    name: string;
    start: string;
    end: string;
    walls: string[];
  };

  function selectTemplate(e: Event) {
    const templateName = (e.target as HTMLSelectElement).value;

    if (templateName === "custom") return;
    if (templateName === "random") {
      statusStore.status = "Random is not yet implemented.";
      return;
    }

    for (const t of templates) {
      if (t.name === templateName) {
        console.log(t);
        break;
      }
    }
  }

  return (
    <Label text="Templates">
      <select onChange={selectTemplate} class="bg-slate-200 p-1 rounded-md hover:bg-slate-100 focus:bg-slate-100">
        <option value="custom" selected>
          Custom
        </option>
        <option value="random">Random</option>
        {templates.map(template => {
          return <option value={template.name}>{template.name}</option>;
        })}
      </select>
    </Label>
  );
}
