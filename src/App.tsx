import { Onboarding } from "@/components/widgets/onboarding";
import { useState } from "react";
import { Button } from "./components/ui/button";
import Dashboard from "./components/widgets/dashboard";

function App() {
  const [stage, setStage] = useState(1);
  return (
    <div className="bg-white grid items-center justify-center h-screen">
      {stage === 1 && <Onboarding />}
      {stage === 2 && <Dashboard />}
      <div className="flex justify-between">
        <Button onClick={() => setStage((prev) => prev - 1)}>Back</Button>
        <div>{stage}</div>
        <Button onClick={() => setStage((prev) => prev + 1)}>Next</Button>
      </div>
    </div>
  );
}

export default App;
