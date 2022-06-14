import { Component, createSignal, For } from "solid-js";
import { tw } from "twind";

const App: Component = () => {
  const options = ["white", "red"];
  const [selected, setSelected] = createSignal(options[0]);

  return (
    <div
      class={tw`h-screen flex items-center justify-center bg-${selected()}-200`}
    >
      <select
        value={selected()}
        onChange={(evt) => setSelected(evt.currentTarget.value)}
      >
        <For each={options}>
          {(option) => <option value={option}>{option}</option>}
        </For>
      </select>
    </div>
  );
};

export default App;
