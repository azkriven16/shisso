import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function Undefined({ anime }: { anime: string }) {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <h2 className="text-2xl font-bold mb-2">Oops! Something went wrong.</h2>
        <p className="text-muted-foreground">
          It's not you, it's us. An error occurred while trying to load this
          page.
        </p>
        <Button onClick={() => router.back()} className="mt-5">
          Try again
        </Button>
      </div>
    </div>
  );
}
