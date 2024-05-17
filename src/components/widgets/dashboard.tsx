/**
 * v0 by Vercel.
 * @see https://v0.dev/t/adjWmraJjWG
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import {
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
  Accordion,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { TabsTrigger, TabsList, Tabs } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { AvatarImage, Avatar } from "@/components/ui/avatar";
import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";

export default function Dashboard() {
  return (
    <div key="1" className="flex h-screen">
      <aside className="w-64 border-r p-4 space-y-4">
        <Button className="w-full" variant="secondary">
          New Scenario
        </Button>
        <Accordion collapsible type="single" defaultValue="program-info">
          <AccordionItem value="program-info">
            <AccordionTrigger className="text-lg font-medium">
              Program Information
            </AccordionTrigger>
            <AccordionContent className="mt-2 pl-4 border-l-2 border-dashed border-gray-300 space-y-2">
              <div className="flex items-center justify-center w-full h-24 border-2 border-dashed border-gray-300 rounded-lg">
                <CloudUploadIcon className="text-gray-400 w-6 h-6" />
              </div>
              <div className="space-y-1">
                <Label>Branding</Label>
                <div className="flex items-center space-x-2">
                  <RadioGroup>
                    <RadioGroupItem
                      defaultChecked
                      id="no-branding"
                      value="no-branding"
                    />
                    <Label htmlFor="no-branding">No Branding</Label>
                  </RadioGroup>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroup>
                    <RadioGroupItem id="rcn" value="rcn" />
                    <Label htmlFor="rcn">RCN</Label>
                  </RadioGroup>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroup>
                    <RadioGroupItem id="brokerage" value="brokerage" />
                    <Label htmlFor="brokerage">Brokerage</Label>
                  </RadioGroup>
                </div>
              </div>
              <div className="space-y-1">
                <Label htmlFor="base-program">
                  Select Base Program for Calculator
                </Label>
                <Select>
                  <SelectTrigger id="base-program">
                    <SelectValue placeholder="Select Base Program" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="program-1">Program 1</SelectItem>
                    <SelectItem value="program-2">Program 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1">
                <Label htmlFor="use-of-funds">Use of Funds</Label>
                <Select>
                  <SelectTrigger id="use-of-funds">
                    <SelectValue placeholder="Select Use of Funds" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="funds-1">Funds 1</SelectItem>
                    <SelectItem value="funds-2">Funds 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1">
                <Label htmlFor="property-type">Property Type</Label>
                <Select>
                  <SelectTrigger id="property-type">
                    <SelectValue placeholder="Select Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="type-1">Type 1</SelectItem>
                    <SelectItem value="type-2">Type 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="borrower-info">
            <AccordionTrigger className="text-lg font-medium">
              Borrower Info
            </AccordionTrigger>
          </AccordionItem>
          <AccordionItem value="property-background">
            <AccordionTrigger className="text-lg font-medium">
              Property Background
            </AccordionTrigger>
          </AccordionItem>
          <AccordionItem value="rehab-info">
            <AccordionTrigger className="text-lg font-medium">
              Rehab Info
            </AccordionTrigger>
          </AccordionItem>
        </Accordion>
      </aside>
      <main className="flex-1 p-4">
        <Tabs>
          <TabsList>
            <TabsTrigger value="calculator">Loan Calculator</TabsTrigger>
            <TabsTrigger value="scenario">Saved Scenario</TabsTrigger>
          </TabsList>
        </Tabs>
        <section className="mt-4 p-4 border rounded-md">
          <h2 className="text-xl font-semibold">Adjust Pricing Details</h2>
          <div className="mt-4 grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="rebate">Rebate</Label>
              <Select>
                <SelectTrigger id="rebate">
                  <SelectValue placeholder="0.75%" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0.5%">0.5%</SelectItem>
                  <SelectItem value="1%">1%</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="pre-payment-penalty">Pre-payment Penalty</Label>
              <Select>
                <SelectTrigger id="pre-payment-penalty">
                  <SelectValue placeholder="60 months" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="12">12 months</SelectItem>
                  <SelectItem value="24">24 months</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="amortization">Amortization</Label>
              <Select>
                <SelectTrigger id="amortization">
                  <SelectValue placeholder="Fixed Rate Mortgage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="arm">ARM</SelectItem>
                  <SelectItem value="interest-only">Interest Only</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="broker-points">Broker points</Label>
              <Input id="broker-points" placeholder="$10,000" />
            </div>
            <div>
              <Label htmlFor="cl-points">CL points</Label>
              <Input id="cl-points" placeholder="20%" />
            </div>
            <div>
              <Label htmlFor="interest-only">Interest Only</Label>
              <Select>
                <SelectTrigger id="interest-only">
                  <SelectValue placeholder="5 year IO" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3-year">3 year IO</SelectItem>
                  <SelectItem value="10-year">10 year IO</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <Button>Calculate</Button>
          </div>
        </section>
      </main>
      <aside className="w-64 border-l p-4">
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          </Avatar>
          <div>
            <div>Welcome Matt</div>
            <Button size="sm" variant="outline">
              Save Pricing
            </Button>
          </div>
        </div>
      </aside>
    </div>
  );
}

function CloudUploadIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
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
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M12 12v9" />
      <path d="m16 16-4-4-4 4" />
    </svg>
  );
}
