import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css/github-markdown-light.css";
// Use github-markdown-dark.css if needed

const ReadmeViewer = ({ repo = "" }) => {
  console.log("repo:", repo);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  let path = repo.split("/");

  useEffect(() => {
    const fetchReadme = async () => {
      try {
        const url = `https://raw.githubusercontent.com/${
          path[path.length - 2]
        }/${path[path.length - 1]}/${"main"}/README.md`;
        console.log(url);

        const res = await fetch(url);
        if (!res.ok) throw new Error("README not found or fetch failed.");

        const text = await res.text();
        setContent(text);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReadme();
  }, [repo]);

  if (loading) return <p>Loading README...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <article
      className="w-full h-full overflow-y-auto text-xs! md:text-sm! markdown-body text-white! bg-transparent!"
      style={{ padding: "20px" }}
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </article>
  );
};

export default ReadmeViewer;
