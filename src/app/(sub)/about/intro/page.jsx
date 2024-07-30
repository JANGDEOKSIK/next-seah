import PrefetchElement from "@/app/_lib/prefetch";
import List from "./_components/List";

export default function IntroPage() {
  return (
    <div id="intro">
      <PrefetchElement
        url={"/lists"}
        keyValue={["intro", "lists"]}
      >
        <List />
      </PrefetchElement>
    </div>
  );
}
