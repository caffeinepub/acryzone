import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { useSubmitInquiry } from "../hooks/useQueries";

const PRODUCTS = [
  "Premium Acrylic UV Print Frames",
  "Islamic Wall Art Frames",
  "Custom Photo Frames",
  "3D Acrylic Frames",
  "Home Decor Acrylic Frames",
];

export function InquiryForm() {
  const { mutate, isPending, isSuccess, isError } = useSubmitInquiry();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    productInterest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(form);
  };

  if (isSuccess) {
    return (
      <div
        data-ocid="inquiry.success_state"
        className="flex flex-col items-center justify-center py-16 gap-6 text-center"
      >
        <CheckCircle2 className="w-16 h-16 gold-text" />
        <h3 className="text-2xl font-display gold-text">Inquiry Sent!</h3>
        <p className="text-muted-foreground max-w-md">
          Thank you for reaching out. Our team will contact you within 24 hours
          to discuss your custom order.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {isError && (
        <div
          data-ocid="inquiry.error_state"
          className="flex items-center gap-3 p-4 border border-destructive/50 bg-destructive/10 rounded text-sm text-destructive"
        >
          <AlertCircle size={16} />
          Something went wrong. Please try again.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label
            htmlFor="name"
            className="text-xs tracking-widest uppercase text-muted-foreground"
          >
            Full Name
          </Label>
          <Input
            id="name"
            data-ocid="inquiry.name_input"
            value={form.name}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
            required
            placeholder="Your full name"
            className="bg-secondary border-border focus:border-gold focus-visible:ring-0 focus-visible:border-gold"
          />
        </div>
        <div className="space-y-2">
          <Label
            htmlFor="email"
            className="text-xs tracking-widest uppercase text-muted-foreground"
          >
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            data-ocid="inquiry.email_input"
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            required
            placeholder="your@email.com"
            className="bg-secondary border-border focus:border-gold focus-visible:ring-0 focus-visible:border-gold"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label
            htmlFor="phone"
            className="text-xs tracking-widest uppercase text-muted-foreground"
          >
            Phone / WhatsApp
          </Label>
          <Input
            id="phone"
            data-ocid="inquiry.phone_input"
            value={form.phone}
            onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
            required
            placeholder="+1 234 567 890"
            className="bg-secondary border-border focus:border-gold focus-visible:ring-0 focus-visible:border-gold"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-xs tracking-widest uppercase text-muted-foreground">
            Product Interest
          </Label>
          <Select
            value={form.productInterest}
            onValueChange={(v) =>
              setForm((p) => ({ ...p, productInterest: v }))
            }
          >
            <SelectTrigger
              data-ocid="inquiry.product_select"
              className="bg-secondary border-border"
            >
              <SelectValue placeholder="Select a product" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              {PRODUCTS.map((p) => (
                <SelectItem key={p} value={p} className="hover:gold-text">
                  {p}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="message"
          className="text-xs tracking-widest uppercase text-muted-foreground"
        >
          Message
        </Label>
        <Textarea
          id="message"
          data-ocid="inquiry.message_textarea"
          value={form.message}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          required
          placeholder="Tell us about your project, size requirements, quantities..."
          rows={5}
          className="bg-secondary border-border focus:border-gold focus-visible:ring-0 focus-visible:border-gold resize-none"
        />
      </div>

      <button
        type="submit"
        data-ocid="inquiry.submit_button"
        disabled={isPending}
        className="w-full py-4 gold-bg text-background font-body font-semibold tracking-widest uppercase text-sm transition-opacity hover:opacity-90 disabled:opacity-60 flex items-center justify-center gap-2"
      >
        {isPending ? (
          <>
            <Loader2
              size={16}
              className="animate-spin"
              data-ocid="inquiry.loading_state"
            />
            Sending...
          </>
        ) : (
          "Send Inquiry"
        )}
      </button>
    </form>
  );
}
