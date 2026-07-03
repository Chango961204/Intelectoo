import { Helmet } from "react-helmet-async"

const SITE_URL = import.meta.env.VITE_SITE_URL ?? "https://intelectomx.com.mx"
const DEFAULT_IMAGE = `${SITE_URL}/circle.png`

export default function Seo({ title, description, pathname = "/", image = DEFAULT_IMAGE, schema }) {
  const url = `${SITE_URL}${pathname}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Intelecto MX" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  )
}
