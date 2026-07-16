import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Capability } from "@/lib/site-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ServiceCard({ service, index = 0 }: { service: Capability; index?: number }) {
  const Icon = service.icon;

  return (
    <div style={{ transitionDelay: `${index * 25}ms` }}>
      <Card className="group h-full hover:-translate-y-1 hover:border-amber/40">
        <CardHeader>
          <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-green/20 bg-green/10 text-green transition group-hover:border-amber/40 group-hover:bg-amber/10 group-hover:text-amber">
            <Icon className="h-5 w-5" />
          </div>
          <CardTitle>{service.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-7 text-body">{service.description}</p>
          <ul className="mt-6 grid gap-2">
            {service.points.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-6 text-body">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                {point}
              </li>
            ))}
          </ul>
          <Link href={service.href} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-green">
            Explore capability
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
