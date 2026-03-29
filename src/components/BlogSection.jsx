import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function BlogSection({ posts }) {
  const [active, setActive] = useState("All");
  const categories = useMemo(
    () => ["All", ...new Set(posts.map((post) => post.category))],
    [posts]
  );

  const filtered = useMemo(
    () => (active === "All" ? posts : posts.filter((post) => post.category === active)),
    [posts, active]
  );

  return (
    <>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((category, i) => (
          <motion.button
            key={category}
            onClick={() => setActive(category)}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`rounded-full px-4 py-2 text-sm transition-all duration-300 ${
              active === category
                ? "bg-amber-400 text-slate-900 shadow-lg shadow-amber-400/50"
                : "glass text-muted hover:bg-white/10"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {filtered.map((post, i) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: "spring", stiffness: 100 }}
            whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(245, 158, 11, 0.15)" }}
            className="glass group rounded-2xl p-5 overflow-hidden transition-all cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/0 to-teal-400/0 group-hover:from-amber-400/10 group-hover:to-teal-400/10 transition-all pointer-events-none" />
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-amber-600">
              {post.category}
            </p>
            <h3 className="mb-2 text-lg font-semibold group-hover:text-amber-600 transition-colors">{post.title}</h3>
            <p className="text-sm text-muted">{post.excerpt}</p>
            <div className="mt-4 flex items-center gap-2 text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
              Read more <ArrowRight size={14} />
            </div>
          </motion.article>
        ))}
      </div>
    </>
  );
}

export default BlogSection;
