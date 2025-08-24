import { timeline } from "@/data/timeline";
import React from "react";

export default function TimeLine() {
  return (
    <section className="mt-16 min-h-screen">
      <h2 className=" text-yellow-400 font-semibold tracking-tight text-balance break-words text-[clamp(1.75rem,6vw,3rem)]">
        Timeline
      </h2>

      <ul className="mt-4 ">
        {timeline.map((item) => (
          <li
            key={item.id}
            className="mb-12 border-b border-t border-gray-800 p-3"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="break-words">
                <time dateTime={item.startDate}>{item.startDate}</time>
                {item.endDate && (
                  <>
                    {" "}
                    – <time dateTime={item.endDate}>{item.endDate}</time>
                  </>
                )}
                <span className="ml-2 text-sm text-gray-400">{item.type}</span>
              </div>
              <div className="text-sm text-yellow-200 mt-1 sm:mt-0 break-words">
                {item.location}
              </div>
            </div>
            <strong className="block mt-2 break-words">{item.company}</strong>
            <h3 className="text-xl font-semibold break-words">
              {item.position}
            </h3>
            <p className="text-gray-300 mb-2 leading-relaxed break-words">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
