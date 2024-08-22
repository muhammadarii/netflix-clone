import React from "react";
import { TrendingCard } from "./TrendingCard";

export default function TrendingNow() {
  return (
    <div className="container mx-auto">
      <h1 className="text-white text-2xl font-bold m-4">Trending Now</h1>
      <div className="flex flex-col gap-2">
        <TrendingCard />
      </div>
    </div>
  );
}
