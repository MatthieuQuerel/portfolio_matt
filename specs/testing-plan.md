# Plan d'action : Tests Unitaires et Intégration Continue

Ce document détaille la stratégie de mise en place des tests unitaires pour le portfolio, ainsi que leur intégration dans le workflow de déploiement (Docker + GitHub Actions).

## 1. Choix Technologiques
* **Framework de test :** [Vitest](https://vitest.dev/) (plus rapide que Jest, excellente intégration ESM avec Next.js).
* **Bibliothèque de rendu :** [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) (@testing-library/react).
* **Validation DOM :** [@testing-library/jest-dom](https://github.com/testing-library/jest-dom).
* **Environnement :** [happy-dom](https://github.com/capricorn86/happy-dom) (plus léger et compatible ESM que jsdom).

## 2. Étapes d'implémentation

### Étape A : Installation des dépendances
Installer les outils nécessaires en tant que dépendances de développement :
```bash
npm install -D vitest @vitejs/plugin-react happy-dom @testing-library/react @testing-library/jest-dom @testing-library/dom vitest-canvas-mock
```

### Étape B : Configuration
1. Créer un fichier `vitest.config.mts` à la racine pour configurer l'environnement de test et le support de React.
2. Créer un fichier `src/test/setup.tsx` pour importer les matchers de `jest-dom` et mocker les bibliothèques d'animation (Framer Motion).
3. Ajouter des scripts dans `package.json` :
   - `"test": "vitest"`
   - `"test:run": "vitest run"` (pour la CI)

### Étape C : Rédaction des tests
Les tests seront placés dans des fichiers `.test.tsx` à côté des composants ou dans un dossier `__tests__`.
*   **Home Page :** Vérifier que le composant principal s'affiche.
*   **Composants (Hero, TechStack, etc.) :** Vérifier la présence des titres clés, des textes importants et des liens.

### Étape D : Intégration Docker
Le `Dockerfile` sera modifié pour exécuter les tests lors de l'étape de construction (build) afin d'éviter de déployer une version cassée.

### Étape E : GitHub Actions
Ajouter une étape `run test` dans le fichier `.github/workflows/deploy.yml` avant l'étape de déploiement sur le VPS.

## 3. Structure des tests initiaux
* `src/app/page.test.tsx` : Test d'intégration de la page d'accueil.
* `src/components/__tests__/Hero.test.tsx` : Test unitaire du composant Hero.
* `src/components/__tests__/Services.test.tsx` : Test unitaire du composant Services.
...etc.

## 4. Maintenance
Les tests devront être mis à jour à chaque modification majeure des composants visuels ou de la logique métier (bien qu'actuellement le projet soit principalement statique).
