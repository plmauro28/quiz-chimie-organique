# Quiz Chimie Organique - Spécification

## 1. Project Overview
- **Nom**: Quiz Chimie Organique
- **Type**: Application web éducative de quiz
- **Fonction**: Tester les connaissances des familles chimiques en chimie organique
- **Langue**: Français 100%

## 2. UI/UX Specification

### Layout Structure
- **Header**: Logo + titre + stats rapides
- **Main**: Zone de quiz centrale (carte + molécule + réponses)
- **Sidebar**: Paramètres et paramètres
- **Footer**: Credits

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Visual Design

#### Color Palette
- **Primary**: #6366f1 (Indigo)
- **Secondary**: #8b5cf6 (Purple)
- **Accent**: #f472b6 (Pink)
- **Success**: #22c55e (Green)
- **Error**: #ef4444 (Red)
- **Background**: #0f172a à #1e293b (Gradient sombre)
- **Text Primary**: #f8fafc
- **Text Secondary**: #94a3b8

#### Typography
- **Font**: Outfit (Google Fonts)
- **Headings**: 700
- **Body**: 400-500

#### Effects
- Glassmorphism cards
- Animations smooth
- Glow effects sur timer

### Components
1. **MoleculeDisplay**: Affiche la structure/formule
2. **QuizCard**: Carte principale du quiz
3. **Timer**: Chronomètre avec barre de progression
4. **ScoreBoard**: Score + combo + streak
5. **AnswerButton**: Boutons de réponse avec états
6. **StatsPanel**: Statistiques détaillées
7. **SettingsModal**: Modal de configuration
8. **ModeSelector**: Sélection du mode de jeu

## 3. Functionality Specification

### Modes de Jeu
1. **Chronométré**: 15s/30s/60s par question
2. **Libre**: Sans limite de temps
3. **Campagne**: Niveaux par famille (10 niveaux)
4. **Survie**: Streaks croissants, une erreur = game over

### Types de Questions
1. Formule → Famille
2. Structure → Famille  
3. Nom molécule → Famille

### Familles Chimiques (10)
1. Alcane
2. Alcène
3. Alcool
4. Aldéhyde
5. Cétone
6. Acide carboxylique
7. Ester
8. Amine
9. Amide
10. Éther

### Données Molécules
- 5-10 exemples par famille
- Noms complets français
- Formule développée
- Formule semi-développée
- Formule squelettique

### Gamification
- Score: base 100pts + bonus temps
- Combo: x2, x3, x4, x5 (max)
- Badges: "Rapide", "Parfait", "Maître [famille]"
- High scores (localStorage)
- Stats: accuracy par famille, temps moyen

### Settings
- Timer duration
- Familles activées/désactivées
- Type d'affichage molécule
- Afficher groupes fonctionnels

## 4. Acceptance Criteria
- [ ] L'app démarre sans erreurs
- [ ] Le quiz fonctionne avec tous les modes
- [ ] Le timer fonctionne correctement
- [ ] Le score et combo fonctionnent
- [ ] Les stats sont sauvegardées
- [ ] Le design est responsive
- [ ] Les animations sont fluides
