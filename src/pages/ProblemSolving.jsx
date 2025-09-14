import SectionTitle from "../components/SectionTitle";
import React from "react";


export default function ProblemSolving() {
  return (
    <section
      id="problemsolving"
      className="py-20 px-6 bg-[#0a0f1c] text-center"
    >
      <SectionTitle title="Problem Solving" />
      <p className="text-[#cfcfcf] max-w-2xl mx-auto">
        Solved <span className="text-[#00f5d4]">500+</span> problems on
        LeetCode, contributed solutions on GFG, and regularly participate in
        coding contests on HackerRank and Codeforces.
      </p>
      <div className="flex justify-center gap-6 mt-8">
        <a
          href="https://leetcode.com/"
          target="_blank"
          className="text-[#00f5d4] hover:underline"
        >
          LeetCode
        </a>
        <a
          href="https://www.geeksforgeeks.org/"
          target="_blank"
          className="text-[#6c63ff] hover:underline"
        >
          GfG
        </a>
        <a
          href="https://www.hackerrank.com/"
          target="_blank"
          className="text-[#ff00ff] hover:underline"
        >
          HackerRank
        </a>
      </div>
    </section>
  );
}
