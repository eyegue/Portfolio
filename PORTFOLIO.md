# Personnaliser le portfolio

## Coordonnées et CV

Dans `src/data/portfolio.js`, compléter `profile.email`, `profile.github` et `profile.linkedin`. Les liens sont désactivés tant que les valeurs sont vides. Le contact ouvre la messagerie via `mailto:` ; aucun envoi serveur n’est simulé.

Déposer le PDF dans `public/cv/eulalia-cristina-eyegue.pdf`, puis définir `profile.cv` sur `/cv/eulalia-cristina-eyegue.pdf`. Le bouton de téléchargement apparaîtra automatiquement.

Compléter l’objet `experience` : entreprise, missions et technologies. La période est mai–août 2026.

## Projets

Les cinq projets sont dans `src/data/projects.js`. Renseigner `github` et `demo` pour afficher les liens réels.

Les deux aperçus existants dans `src/assets/` sont conservés. Vérifier qu’ils correspondent aux versions à présenter. Déposer les nouvelles captures dans `public/projects/`, puis renseigner par exemple `image: '/projects/jobtrack.webp'`. Les illustrations CSS sont affichées en l’absence d’image et identifiées comme illustrations.

## Structure et commandes

- `src/app.jsx` : composition de la page.
- `src/components/` : navigation, accueil, projets, autres sections et apparitions au défilement.
- `src/data/` : contenus à personnaliser.
- `src/app.css` : styles par section et responsive.
- `src/index.css` : styles globaux, polices et accessibilité.

`npm run dev` : serveur local. `npm run build` : compilation de production. `npm run lint` : analyse du code.

Aucune dépendance ajoutée. Les polices Google Fonts possèdent un repli sans-serif. Les animations respectent la préférence de réduction des mouvements.
