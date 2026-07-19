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
      className="group block bg-white rounded-xl border border-secondary-100 p-6 hover:border-primary-500 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center group-hover:bg-primary-500 transition-colors duration-300">
          <Icon className="w-7 h-7 text-primary-500 group-hover:text-white transition-colors duration-300" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors">
            {name}
          </h3>
          {description && (
            <p className="text-sm text-secondary-500 mt-1 line-clamp-2">
              {description}
            </p>
          )}
          {count !== undefined && (
            <p className="text-xs text-secondary-400 mt-2">
              {count} firmi
            </p>
          )}
        </div>
      </div>

      {subcategories && subcategories.length > 0 && (
        <div className="mt-4 pt-4 border-t border-secondary-100">
          <div className="flex flex-wrap gap-2">
            {subcategories.slice(0, 4).map((sub) => (
              <span
                key={sub.slug}
                className="text-xs bg-secondary-50 text-secondary-600 px-2 py-1 rounded-full"
              >
                {sub.name}
              </span>
            ))}
            {subcategories.length > 4 && (
              <span className="text-xs text-primary-500 px-2 py-1">
                +{subcategories.length - 4} više
              </span>
            )}
          </div>
        </div>
      )}
    </Link>
  );
}
