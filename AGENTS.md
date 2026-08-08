# AGENTS.md

Sitio del **Club de Emprendedores UNAB**: landing de una sola página más una
página de detalle por evento. Copy en español, identificadores en inglés.

## Commands

```
npm run dev        # Vite dev server
npm run build      # tsc -b && vite build  -> dist/
npm run lint       # eslint .
npm run preview    # sirve dist/
```

- **No hay script `typecheck`.** Usa `npx tsc -b` (o `npm run build`).
- **No hay framework de tests ni script `test`.** No inventes uno ni agregues
  archivos de test salvo que te lo pidan.
- Orden de verificación: `npm run lint` -> `npx tsc -b` -> `npm run build`.

## Estilo

**El código va sin comentarios.** Es una preferencia explícita del dueño del
repo: nada de `//`, `/* */` ni `{/* */}` en `src/`. Si algo necesita explicación,
va en este archivo, no en el código.

## Routing: hash propio, sin dependencias

`src/router/` implementa el router. No hay react-router.

- `/#/` -> home · `/#/eventos/:slug` -> detalle · cualquier otra cosa -> 404.
- **El `#` lo ocupa el router, así que los links de sección NO pueden ser
  `href="#beneficios"`.** Para eso existe `goToSection(id)` en `hash.ts`: si el
  elemento está en el DOM hace scroll; si no (estás en la página de un evento)
  deja el id en `pendingSection`, navega a `/` y `HomePage` lo consume al
  montarse con `consumePendingSection()`. Por eso los items del navbar son
  `<button>` y no `<a>`.
- El scroll lo maneja `HomePage` para la home (puede haber sección pendiente) y
  `App.tsx` para el resto de las rutas. No agregues un tercer lugar.
- `[id] { scroll-margin-top: 6rem }` en `index.css` compensa el navbar sticky.
- Ventaja operativa: al ser hash, el sitio anda en cualquier hosting estático
  **sin reglas de rewrite**.

## Contenido

Todo el texto y los datos viven en `src/data/`, nunca dentro del JSX:
`site.ts`, `home.ts`, `board.ts`, `testimonials.ts`, `events.ts`.
Los tipos están en `src/types/content.ts`.

`events.ts` es **fuente única**: el bento de eventos pasados, la agenda y la
página de detalle leen del mismo arreglo, discriminando por `status`
(`"past" | "upcoming"`). Para publicar un evento basta agregar un objeto con
`slug` único. `featured: true` (solo uno) ocupa la celda grande del bento.

Las imágenes son opcionales: si `cover` / `photo` viene vacío se renderiza
`<ImagePlaceholder>`. Las fotos de directiva y eventos van en `/public` y se
referencian por ruta.

Las fotos de hero y "Quiénes somos" se importan desde `src/assets/` **en
`home.ts`** (`hero.image` / `about.image`), no en el componente, así que
cambiarlas es editar el import y nada más. Van en WebP: el PNG original del
equipo pesaba 1,7 MB y quedó en 98 KB.

**Fechas:** usa siempre los helpers de `src/lib/date.ts`. `new Date("2026-09-12")`
se parsea como UTC y en Chile se muestra un día antes; por eso ahí se parsea a
mano como fecha local.

## Marca

- Colores muestreados del logo real del club, no estimados:
  rojo `#b7282a`, navy `#182536`, crema `#fef7ed`. Tokens en `src/index.css`
  bajo `@theme` con el prefijo `unab-`.
- `--color-unab-red-soft` (`#dc5e60`) existe porque el rojo de marca sobre fondo
  oscuro da 2.8:1 de contraste y no sirve para texto. Úsalo en fondos oscuros.
- `src/components/brand/Logo.tsx` es el isotipo reconstruido en SVG con la
  geometría medida del original (anillo r=139 trazo 24, disco r=127, tres barras
  36x120, patas a 49°). Tiene `tone="onLight" | "onDark"`.
- `UnabWatermark.tsx` pinta `/public/unab-mark.png`: la silueta del isotipo
  oficial UNAB, extraída del logo recortando el fondo blanco por luminancia
  (el PNG original venía sin transparencia real). Es blanca y plana, así que el
  gris se controla solo con `opacity-[...]` sobre fondos oscuros.

## Toolchain gotchas

- **Tailwind v4 por plugin de Vite.** No existe `tailwind.config.js` ni config de
  PostCSS: **no los crees.** Los tokens van en `src/index.css` dentro de
  `@theme`, y las utilidades propias con `@utility`.
- **`verbatimModuleSyntax`** -> los tipos se importan con `import type`.
- **`erasableSyntaxOnly`** -> sin enums, sin `namespace`, sin parameter properties.
- **`noUnusedLocals` / `noUnusedParameters`** -> un import sin usar rompe el build.
- **`allowImportingTsExtensions`** -> los imports llevan extensión
  (`import { x } from "./hash.ts"`). Respeta ese estilo.
- ESLint usa `reactRefresh.configs.vite`: un módulo que exporta un componente no
  puede exportar además valores que no sean componentes. Por eso el router está
  partido en `hash.ts` (lógica), `useRoute.ts` (hook) y `Link.tsx` (componente).
- Referencias de proyecto TS: `tsconfig.app.json` cubre `src/`,
  `tsconfig.node.json` cubre `vite.config.ts`. Un archivo de tooling nuevo en la
  raíz hay que agregarlo a algún `include` o queda sin typecheck.

## Iconos

`public/icons.svg` es un sprite de `<symbol>`. Conviven dos convenciones:

- Los del scaffold (`bluesky`, `discord`, `github`, `x`, `social`,
  `documentation`) traen el color **hardcodeado** y no se pueden recolorear.
- Los agregados para el club (`instagram`, `linkedin`, `mail`, `arrow-right`,
  `arrow-left`, `image`, `menu`, `close`, `pin`, `clock`) usan `currentColor`.

Se usan con `<Icon name="instagram-icon" className="h-4 w-4" />`. El tamaño
**siempre** por className: el `<svg>` externo no trae ancho propio.

## Detalles que ya mordieron

- Los formularios de postulación son **links**, no iframes. Van en
  `applicationForms[].url`; sin `url` la tarjeta se pinta como "Link por
  confirmar" y no es clickeable, para no dejar links muertos.
- El carrusel de testimonios avanza solo con `requestAnimationFrame`. La lista
  se renderiza duplicada y al pasar la mitad se resta `scrollWidth / 2`, así el
  reinicio es invisible. **No leas `scrollLeft` para acumular**: Chrome lo
  redondea a enteros y sumar sub-píxeles por frame deja el scroll clavado en 0.
  Hay que llevar la posición en un ref y solo escribirla.

## Pendiente de contenido

- URLs de los dos Google Forms -> `applicationForms[].url` en `home.ts`.
- Redes y correo reales -> `social` en `site.ts` (hoy son placeholders).
- Fotos de directiva y eventos.
- El manual UNAB (pág. 8) exige la *huincha* de acreditación con el logo CHEA
  en piezas web institucionales. Este sitio es de un club estudiantil y hoy no
  la incluye; confirmar con la universidad si aplica.
