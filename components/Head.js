import Head from 'islandy/head';

export default function MyHead() {
  return (
    <Head>
      <link rel="stylesheet" href="/src/styles.css" />
      <link rel="preconnect" href="https://xbox-games-api.vercel.app" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="preload" as="font" href="/src/assets/bahnschrift.woff2" crossorigin="anonymous" />
      <link rel="preload" as="font" href="https://fonts.gstatic.com/s/inter/v7/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2" crossorigin="anonymous" />
      <link rel="modulepreload" href="/src/js/web-components.js" />
      <title>XStore: La tienda argenta de Xbox</title>
      <link rel="shortcut icon" href="/src/assets/favicon.png" />
      <meta name="description" content="Explora la amplia colección de títulos de videojuegos en el catálogo de juegos de Xbox. Busca los éxitos de taquilla favoritos, las ofertas y nuevos lanzamientos en precios argentinos." />
      <meta name="keywords" content="Xbox Series X, Xbox One, xbox live, ofertas con gold, juegos con gold, próximos juegos de xbox, nuevos juegos en xbox, nuevos juegos, videojuegos, catálogo de juegos de xbox, próximos juegos de xbox, nuevos juegos en xbox, nuevos juegos, videojuegos" />
      <link rel="manifest" href="/manifest.json" />
    </Head>
  );
}
