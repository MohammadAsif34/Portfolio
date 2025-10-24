import { ExternalLink } from "lucide-react";
import React from "react";

const ExperienceCard = ({ title, icon, company, date, description, list }) => {
  return (
    <>
      <div className="b g-white dark: bg-gray-900 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl p-6 bord er border-gray-200 dark:border-gray-800 flex items-start gap-4">
        <div className="b g-gray-100 dark: bg-gray-800 p-3 rounded-xl">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold t ext-gray-800 dark: t ext-gray-100">
            {title}
          </h3>
          <p className="text-sm text-gray-500 dark:t ext-gray-400 mb-1">
            {company} • {date}
          </p>
          <p className="text-gray-400 dark:t ext-gray-300 text-sm leading-relaxed">
            {description}
          </p>
          {list && (
            <ul className="list-disc grid gap-y-2 py-4">
              {list?.map((li, idx) => (
                <li key={idx}>
                  <h3>{li?.name}</h3>
                  <p className="text-xs text-gray-500">
                    {li?.issue_by} • {li?.issuer}
                    {li.link && (
                      <>
                        {" "}
                        •
                        <a href="">
                          {"Link"}
                          <ExternalLink
                            className="ml-1 inline-block"
                            size={11}
                          />
                        </a>
                      </>
                    )}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default ExperienceCard;
