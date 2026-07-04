import React, { useEffect } from "react";

const SEO = ({ title, description, canonical, schema }) => {
  useEffect(() => {
    const previousTitle = document.title;
    if (title) {
      document.title = `${title} | Zaahi Designs`;
    } else {
      document.title = "Zaahi Designs | Elegance Woven In Tradition";
    }

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      "content",
      description ||
        "Discover premium ethnic wear and designer traditional clothing at Zaahi Designs. Explore our hand-crafted kurti, sarees, lehengas, and gowns."
    );

    // Update canonical link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    const currentCanonicalUrl = canonical || window.location.href;
    linkCanonical.setAttribute("href", currentCanonicalUrl);

    // Update OG Url
    let metaOgUrl = document.querySelector('meta[property="og:url"]');
    if (!metaOgUrl) {
      metaOgUrl = document.createElement("meta");
      metaOgUrl.setAttribute("property", "og:url");
      document.head.appendChild(metaOgUrl);
    }
    metaOgUrl.setAttribute("content", currentCanonicalUrl);

    // Update OG Title
    let metaOgTitle = document.querySelector('meta[property="og:title"]');
    if (!metaOgTitle) {
      metaOgTitle = document.createElement("meta");
      metaOgTitle.setAttribute("property", "og:title");
      document.head.appendChild(metaOgTitle);
    }
    metaOgTitle.setAttribute("content", title ? `${title} | Zaahi Designs` : "Zaahi Designs");

    // Update OG Description
    let metaOgDesc = document.querySelector('meta[property="og:description"]');
    if (!metaOgDesc) {
      metaOgDesc = document.createElement("meta");
      metaOgDesc.setAttribute("property", "og:description");
      document.head.appendChild(metaOgDesc);
    }
    metaOgDesc.setAttribute(
      "content",
      description || "Discover premium ethnic wear and designer traditional clothing at Zaahi Designs."
    );

    // Update schema script
    let scriptSchema = document.getElementById("json-ld-schema");
    if (schema) {
      if (!scriptSchema) {
        scriptSchema = document.createElement("script");
        scriptSchema.setAttribute("type", "application/ld+json");
        scriptSchema.setAttribute("id", "json-ld-schema");
        document.head.appendChild(scriptSchema);
      }
      scriptSchema.textContent = JSON.stringify(schema);
    } else {
      if (scriptSchema) {
        scriptSchema.remove();
      }
    }

    return () => {
      document.title = previousTitle;
    };
  }, [title, description, canonical, schema]);

  return null;
};

export default SEO;
