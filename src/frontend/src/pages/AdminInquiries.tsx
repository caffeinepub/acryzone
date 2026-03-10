import { Inbox, Loader2 } from "lucide-react";
import { useListInquiries } from "../hooks/useQueries";

function formatDate(timestamp: bigint) {
  const ms = Number(timestamp) / 1_000_000;
  return new Date(ms).toLocaleString();
}

export function AdminInquiriesPage() {
  const { data: inquiries, isLoading } = useListInquiries();

  return (
    <main className="pt-20 min-h-screen">
      <section className="py-16 container mx-auto px-6">
        <div className="mb-10">
          <p className="text-xs tracking-[0.3em] uppercase gold-text mb-3 font-body">
            Admin
          </p>
          <h1 className="text-4xl md:text-5xl font-display font-bold">
            Order <span className="gold-text">Inquiries</span>
          </h1>
          <p className="text-muted-foreground mt-3 text-sm">
            All customer inquiries submitted through the website.
          </p>
        </div>

        <div className="gold-divider mb-10" />

        {isLoading ? (
          <div
            data-ocid="inquiries.loading_state"
            className="flex items-center justify-center py-24 gap-3 text-muted-foreground"
          >
            <Loader2 className="animate-spin" size={20} />
            <span>Loading inquiries...</span>
          </div>
        ) : !inquiries || inquiries.length === 0 ? (
          <div
            data-ocid="inquiries.empty_state"
            className="flex flex-col items-center justify-center py-24 gap-4 text-muted-foreground"
          >
            <Inbox size={40} className="gold-text opacity-50" />
            <p className="text-sm tracking-wide">No inquiries yet.</p>
          </div>
        ) : (
          <div data-ocid="inquiries.list" className="space-y-6">
            {[...inquiries].reverse().map((inq, i) => (
              <div
                key={Number(inq.timestamp)}
                data-ocid={`inquiries.item.${i + 1}`}
                className="border border-border bg-card p-6 space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="font-display text-lg">{inq.name}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {formatDate(inq.timestamp)}
                    </p>
                  </div>
                  <span className="text-xs gold-text border gold-border px-3 py-1 self-start sm:self-auto">
                    {inq.productInterest || "General"}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-xs tracking-widest uppercase text-muted-foreground">
                      Email
                    </span>
                    <p className="mt-0.5">{inq.email}</p>
                  </div>
                  <div>
                    <span className="text-xs tracking-widest uppercase text-muted-foreground">
                      Phone / WhatsApp
                    </span>
                    <p className="mt-0.5">{inq.phone}</p>
                  </div>
                </div>

                {inq.message && (
                  <div className="text-sm">
                    <span className="text-xs tracking-widest uppercase text-muted-foreground">
                      Message
                    </span>
                    <p className="mt-1 text-foreground leading-relaxed">
                      {inq.message}
                    </p>
                  </div>
                )}

                <div className="flex gap-3 pt-2">
                  <a
                    href={`https://wa.me/${inq.phone.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid={`inquiries.whatsapp_button.${i + 1}`}
                    className="text-xs px-4 py-2 gold-bg text-background font-semibold tracking-widest uppercase hover:opacity-90 transition-opacity"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={`mailto:${inq.email}`}
                    data-ocid={`inquiries.email_button.${i + 1}`}
                    className="text-xs px-4 py-2 border gold-border gold-text font-semibold tracking-widest uppercase hover:opacity-70 transition-opacity"
                  >
                    Email
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
