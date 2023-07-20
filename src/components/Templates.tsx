import { VNode } from "preact";
import { useSnapshot } from "valtio";

import { statusStore } from "@/store/statusStore";
import { gridStore, resetGridStore } from "@/store/gridStore";

import { Label } from "./common/Label";
import templates from "@/templates.json";
import { loadTemplate } from "@/lib/loadTemplate";

export function Templates(): VNode {
  const store = useSnapshot(gridStore);

  function selectTemplate(e: Event): void {
    const templateName = (e.target as HTMLSelectElement).value;

    if (templateName === "custom") {
      resetGridStore();
      return;
    }
    if (templateName === "random") {
      statusStore.status = "Random is not yet implemented.";
      return;
    }

    for (const t of templates) {
      if (t.name === templateName) {
        loadTemplate(t);
        break;
      }
    }
  }

  return (
    <Label text="Templates">
      <select
        onChange={selectTemplate}
        value={store.template}
        class="bg-slate-200 p-1 rounded-md hover:bg-slate-100 focus:bg-slate-100">
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
