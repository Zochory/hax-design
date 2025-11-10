import { RegistryBrowser } from "@/components/registry-browser"

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight lowercase">haxdesign</h1>
        <p className="text-muted-foreground">
          A custom shadcn registry exposing the morphing navigation sidebar block.
        </p>
      </header>

      <main>
        <RegistryBrowser />
      </main>
    </div>
  )
}
