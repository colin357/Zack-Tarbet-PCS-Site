/**
 * Renders a JSON-LD <script> for structured data (schema.org).
 *
 * Server-rendered into the HTML so crawlers and answer engines read it on the
 * first request. Accepts a single schema object or an array of them.
 */
export default function JsonLd({ data }: { data: object | object[] }) {
  const json = JSON.stringify(data);
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inline; escape the closing-tag
      // sequence so a string value can never break out of the script element.
      dangerouslySetInnerHTML={{ __html: json.replace(/</g, "\\u003c") }}
    />
  );
}
