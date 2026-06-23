# Actualización app Mundial 2026

Esta versión conserva la estructura actual del repositorio Next.js:

- `app/`
- `lib/`
- `public/`
- `package.json`
- `vercel.json`

## Cambios incluidos

1. Corrección de cruces de terceros lugares en eliminatoria directa.
   - Con la combinación actual de terceros clasificados `A/C/D/E/F/G/H/K`, se aplica la opción FIFA 283.
   - El cruce correcto queda: `1A -> 3H`, por lo tanto México aparece contra Cabo Verde.
   - Ecuador queda asignado contra Estados Unidos: `1D -> 3E`.

2. Marcadores precargados.
   - Se agregaron los marcadores concluidos hasta Argentina vs Austria.
   - El partido Noruega vs Senegal no se precarga porque no estaba confirmado como concluido en la versión usada.

3. Fase de grupos en menús colapsables.
   - Ronda 1
   - Ronda 2
   - Ronda 3

## Cómo subir a GitHub

1. Descomprime este ZIP.
2. En GitHub, entra al repositorio `mundial-2026-app-v2`.
3. Sube/reemplaza estas carpetas y archivos:
   - `app`
   - `lib`
   - `public`
   - `README.md`
   - `next-env.d.ts`
   - `next.config.mjs`
   - `package.json`
   - `tsconfig.json`
   - `vercel.json`
4. En el mensaje de commit puedes escribir:
   - `Corregir cruces FIFA y organizar grupos por rondas colapsables`
5. Espera el redeploy automático en Vercel.

## Recomendación

No mezcles este ZIP con el ZIP anterior de Vite/React. Este sí corresponde a la estructura actual de tu repositorio.
