import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

export function Onboarding() {
  return (
    <Card className="mx-auto max-w-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Before we begin</CardTitle>
        <CardDescription>
          This calculator provides estimated figures based on the data entered
          by the user, including but not limited to loan amount, interest rate,
          and term.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs className="mx-auto max-w-lg" defaultValue="import">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="import">Import Sizer</TabsTrigger>
            <TabsTrigger value="manual">Continue Manually</TabsTrigger>
          </TabsList>
          <TabsContent value="import">
            <div className="mt-4 grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="base-program">Base Program</Label>
                <Select defaultValue="option1">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select base program" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                    <SelectItem value="option3">Option 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="import-sizer">Import Sizer</Label>
                <div className="border-2 border-dashed border-gray-400 rounded-lg p-4 flex flex-col items-center justify-center h-32">
                  <UploadIcon className="w-8 h-8 text-gray-500" />
                  <p className="text-gray-500 text-sm">XLS Max size: 5MB</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-4 mt-4">
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
            </div>
          </TabsContent>
          <TabsContent value="manual">
            <div className="mt-4 grid gap-4">
              <div className="grid gap-2">
                <Label>Branding</Label>
                <div>
                  <RadioGroup
                    defaultValue="rcn"
                    className="flex items-center space-x-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="default" id="r1" />
                      <Label htmlFor="r1">RCN</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="nobrand" id="r2" />
                      <Label htmlFor="r2">No Branding</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="brokerage" id="r3" />
                      <Label htmlFor="r3">Brokerage</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cclcontact" id="r4" />
                      <Label htmlFor="r4">CCL contact</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="base-program">Base Program</Label>
                <Select defaultValue="option1">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select base program" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                    <SelectItem value="option3">Option 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="use-of-funds">Use of Funds</Label>
                <Select defaultValue="option1">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select use of funds" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                    <SelectItem value="option3">Option 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="property-type">Property Type</Label>
                <Select defaultValue="option1">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                    <SelectItem value="option3">Option 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-between gap-4 mt-4">
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

function UploadIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}
