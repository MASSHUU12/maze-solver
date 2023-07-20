import { VNode } from "preact";
import { useSnapshot } from "valtio";

import { optionsStore } from "@/store/optionsStore";

import { Label } from "./common/Label";
import templates from "@/templates.json";

export function Templates(): VNode {
  const store = useSnapshot(optionsStore.options);

  function selectTemplate(e: Event): void {
    const templateName = (e.target as HTMLSelectElement).value;

    optionsStore.options.template = templateName;
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
