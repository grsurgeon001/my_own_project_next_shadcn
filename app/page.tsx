import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/toggle";

export default function Home() {
  return (
    <div>
      <ModeToggle />
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      <Button>Click me</Button>
    </div>
  );
}
