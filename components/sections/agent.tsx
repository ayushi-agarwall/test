"use client"
import {
  useState
} from "react"
import {
  toast
} from "sonner"
import {
  useForm
} from "react-hook-form"
import {
  zodResolver
} from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  cn
} from "@/lib/utils"
import {
  Button
} from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Input
} from "@/components/ui/input"
import {
  PhoneInput
} from "@/components/ui/phone-input";
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger
} from "@/components/ui/multi-select"
import {
  DatetimePicker
} from "@/components/ui/datetime-picker"

const formSchema = z.object({
  name_8003588118: z.string(),
  name_8863609332: z.string(),
  name_7060500734: z.array(z.string()),
  name_3810522664: z.string(),
  name_0653818853: z.coerce.date()
});

export default function MyForm() {

  const form = useForm < z.infer < typeof formSchema >> ({
    resolver: zodResolver(formSchema),
    defaultValues: {
      "name_7060500734": ["Honda City", "Hyundai Creta"],
      "name_0653818853": new Date()
    },
  })

  function onSubmit(values: z.infer < typeof formSchema > ) {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10">
        
        <FormField
          control={form.control}
          name="name_8003588118"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input 
                placeholder="e.g., Mr. Raghav Kumar"
                
                type=""
                {...field} />
              </FormControl>
              <FormDescription>Contact Name with title (e.g., Mr., Dr) if known</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
          <FormField
            control={form.control}
            name="name_8863609332"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
              <FormLabel>Phone number</FormLabel>
                <FormControl className="w-full">
                  <PhoneInput
                    placeholder="e.g., +91 63019 79823"
                    {...field}
                    defaultCountry="IN"
                  />
                </FormControl>
              <FormDescription>Contact Number of the lead</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
            
        
           <FormField
              control={form.control}
              name="name_7060500734"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Car Models</FormLabel>
                  <FormControl>
                    <MultiSelector
                      values={field.value}
                      onValuesChange={field.onChange}
                      loop
                      className="max-w-xs"
                    >
                      <MultiSelectorTrigger>
                        <MultiSelectorInput placeholder="Select Car Models" />
                      </MultiSelectorTrigger>
                      <MultiSelectorContent>
                      <MultiSelectorList>
                        <MultiSelectorItem value={"Maruti Suzuki"}>Maruti Suzuki</MultiSelectorItem>
                        <MultiSelectorItem value={"Toyota Corolla"}>Toyota Corolla</MultiSelectorItem>
                        <MultiSelectorItem value={"Honda City"}>Honda City</MultiSelectorItem>
                        <MultiSelectorItem value={"Hyundai Creta"}>Hyundai Creta</MultiSelectorItem>
                        <MultiSelectorItem value={"Mahindra Thar"}>Mahindra Thar</MultiSelectorItem>
                        <MultiSelectorItem value={"Tata Safari"}>Tata Safari</MultiSelectorItem>
                        <MultiSelectorItem value={"Ford Figo"}>Ford Figo</MultiSelectorItem>
                        <MultiSelectorItem value={"Chevrolet Beat"}>Chevrolet Beat</MultiSelectorItem>
                      </MultiSelectorList>
                      </MultiSelectorContent>
                    </MultiSelector>
                  </FormControl>
                  <FormDescription>Select one or more car models the prospect showed interest in</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
        
        <FormField
          control={form.control}
          name="name_3810522664"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Follow-Up Call Notes</FormLabel>
              <FormControl>
                <Input 
                placeholder="e.g., Discuss pricing options next week"
                
                type=""
                {...field} />
              </FormControl>
              <FormDescription>Add any notes or context for the follow-up call, such as purpose, key points to discuss, or preferred time</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
      <FormField
      control={form.control}
      name="name_0653818853"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>Preferred Time</FormLabel>
          <DatetimePicker
            {...field}
            format={[
              ["months", "days", "years"],
              ["hours", "minutes", "am/pm"],
            ]}
          />
       <FormDescription>Select the preferred date and time for the follow-up call</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}