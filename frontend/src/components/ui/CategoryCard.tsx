import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  name: string;
  slug: string;
  icon: LucideIcon;
  count?: number;
  description?: string;
  subcategories?: { name: string; slug: string }[];
}

export function CategoryCard({
  name,
  slug,
  icon: Icon,
  count,
  description,
  subcategories,
}: CategoryCardProps) {
  return (
    <Link
      href={`/kategorije/${slug}`}
      className="group block rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:border-emerald-500/30 hover:bg-white/[0.04]"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-colors duration-300 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10">
          <Icon className="h-7 w-7 text-emerald-400 transition-colors duration-300" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-white transition-colors group-hover:text-emerald-400">
            {name}
          </h3>
          {description && (
            <p className="mt-1 line-clamp-2 text-sm text-foreground/50">
              {description}
            </p>
          )}
          {count !== undefined && (
            <p className="mt-2 text-xs text-foreground/50">
              {count} firmi
            </p>
          )}
        </div>
      </div>

      {subcategories && subcategories.length > 0 && (
        <div className="mt-4 border-t border-white/5 pt-4">
          <div className="flex flex-wrap gap-2">
            {subcategories.slice(0, 4).map((sub) => (
              <span
                key={sub.slug}
                className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-foreground/60"
              >
                {sub.name}
              </span>
            ))}
            {subcategories.length > 4 && (
              <span className="px-2 py-1 text-xs text-emerald-400">
                +{subcategories.length - 4} više
              </span>
            )}
          </div>
        </div>
      )}
    </Link>
  );
}
