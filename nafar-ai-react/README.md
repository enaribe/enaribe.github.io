# Nafar AI - Site Web React

Ce projet est une version React.js du site web de Nafar AI, une application éducative qui utilise l'IA pour transformer la façon d'apprendre.

## Fonctionnalités

- **Interface moderne et responsive** : Design adaptatif pour tous les appareils
- **Menu interactif** : Navigation par onglets dans la section "Comment utiliser Nafar"
- **Animations au scroll** : Effets visuels lors du défilement
- **Newsletter** : Système d'inscription à la newsletter
- **Page de politique de confidentialité** : Intégrée au projet

## Technologies utilisées

- React.js 18
- TypeScript
- CSS3 avec animations
- Google Fonts (Nunito)

## Installation et lancement

1. **Naviguer dans le dossier du projet** :
   ```bash
   cd nafar-ai-react
   ```

2. **Installer les dépendances** :
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement** :
   ```bash
   npm start
   ```

4. **Ouvrir le navigateur** : Le site sera disponible à l'adresse http://localhost:3000

## Structure du projet

```
nafar-ai-react/
├── public/
│   ├── images/           # Toutes les images du site
│   │   ├── privacy-policy.html # Page de politique de confidentialité
│   │   └── index.html
│   ├── src/
│   │   ├── components/       # Composants React
│   │   │   ├── Header.tsx
│   │   │   ├── Banner.tsx
│   │   │   ├── ApprSection.tsx
│   │   │   ├── OptionsSection.tsx
│   │   │   ├── VisionSection.tsx
│   │   │   ├── DownloadSection.tsx
│   │   │   ├── Newsletter.tsx
│   │   │   └── Footer.tsx
│   │   ├── App.tsx          # Composant principal
│   │   ├── index.css        # Styles globaux
│   │   └── index.tsx        # Point d'entrée
│   └── package.json
```

## Sections du site

1. **Header** : Navigation avec logo et liens
2. **Banner** : Section hero avec présentation
3. **Apprentissage** : 3 cartes interactives (Apprendre, S'exercer, S'évaluer)
4. **Options** : Menu avec onglets pour expliquer l'utilisation
5. **Vision** : Section à propos de Nafar AI
6. **Téléchargement** : Liens vers les stores
7. **Newsletter** : Inscription aux actualités
8. **Footer** : Liens et réseaux sociaux

## Scripts disponibles

- `npm start` : Lance le serveur de développement
- `npm build` : Créé une version optimisée pour la production
- `npm test` : Lance les tests
- `npm eject` : Éjecte la configuration (irréversible)

## Personnalisation

Les styles sont dans `src/index.css` et suivent la charte graphique de Nafar AI :
- Couleur principale : #704ED9 (violet)
- Couleur secondaire : #192C4D (bleu foncé)
- Police : Nunito

## Contact

Pour toute question concernant le projet : hello@nafarai.com
