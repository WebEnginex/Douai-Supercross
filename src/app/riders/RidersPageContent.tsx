"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import {
  riders,
  getUniqueCountries,
  getUniqueManufacturers,
  ridersPageLabels,
} from "@/data/riders";
import { RiderCard } from "@/components/riders/RiderCard";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function RidersPageContent() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("all");
  const [manufacturer, setManufacturer] = useState("all");

  const countries = getUniqueCountries();
  const manufacturers = getUniqueManufacturers();

  const filteredRiders = useMemo(() => {
    return riders.filter((rider) => {
      const matchesSearch =
        search === "" ||
        rider.name.toLowerCase().includes(search.toLowerCase()) ||
        rider.team.toLowerCase().includes(search.toLowerCase()) ||
        rider.country.toLowerCase().includes(search.toLowerCase()) ||
        rider.manufacturer.toLowerCase().includes(search.toLowerCase());

      const matchesCountry = country === "all" || rider.country === country;
      const matchesManufacturer =
        manufacturer === "all" || rider.manufacturer === manufacturer;

      return matchesSearch && matchesCountry && matchesManufacturer;
    });
  }, [search, country, manufacturer]);

  const inputClasses =
    "w-full bg-surface border border-white/10 rounded-sm px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-brand-red/50 transition-colors";

  return (
    <div className="pt-24 md:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={ridersPageLabels.title}
          subtitle={ridersPageLabels.subtitle}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 space-y-4"
        >
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
            />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={ridersPageLabels.searchPlaceholder}
              className={`${inputClasses} pl-11`}
              aria-label={ridersPageLabels.searchPlaceholder}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <Filter
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none"
              />
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className={`${inputClasses} pl-11 appearance-none cursor-pointer`}
                aria-label={ridersPageLabels.allCountries}
              >
                <option value="all">{ridersPageLabels.allCountries}</option>
                {countries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div className="relative">
              <Filter
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none"
              />
              <select
                value={manufacturer}
                onChange={(e) => setManufacturer(e.target.value)}
                className={`${inputClasses} pl-11 appearance-none cursor-pointer`}
                aria-label={ridersPageLabels.allManufacturers}
              >
                <option value="all">{ridersPageLabels.allManufacturers}</option>
                {manufacturers.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {filteredRiders.length === 0 ? (
          <p className="text-center text-zinc-500 py-16">
            {ridersPageLabels.emptyState}
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRiders.map((rider, index) => (
              <RiderCard
                key={rider.id}
                rider={rider}
                index={index}
                showBio
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
