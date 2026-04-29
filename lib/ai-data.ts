// lib/ai-data.ts
// Données centralisées pour la page Intelligence Artificielle

export const heroStats = [
  { label: "Images annotées", value: 1888, suffix: "" },
  { label: "Classes détectées", value: 21, suffix: "" },
  { label: "mAP@50-95", value: 91.8, suffix: "%" },
  { label: "Epochs", value: 100, suffix: "" },
];

export const problems = [
  {
    icon: "👁️",
    title: "Invisible à l'humain",
    description: "Un utilisateur peut substituer un outil, oublier de scanner, ou poser le mauvais objet. Le système manuel ne détecte rien.",
    color: "red"
  },
  {
    icon: "🔄",
    title: "Retour impossible à valider",
    description: "Comment confirmer que l'outil rendu est bien celui emprunté ? Sans vision, toute vérification repose sur la bonne foi.",
    color: "orange"
  },
  {
    icon: "🚨",
    title: "Vol non détectable",
    description: "Un tiroir ouvert sans correspondance d'emprunt = anomalie silencieuse. Le stock diverge progressivement de la réalité.",
    color: "red"
  }
];

export const pipelineSteps = [
  {
    step: "01",
    icon: "📸",
    title: "Collecte",
    subtitle: "Real-world data",
    description: "Prises de vue réelles avec la caméra Logitech finale. Outils présents, retirés, mains d'utilisateurs. Conditions d'éclairage variables du FabLab.",
    tech: ["Logitech C920", "Lighting variation", "Multi-angle"],
    color: "from-violet-500 to-indigo-500"
  },
  {
    step: "02",
    icon: "✏️",
    title: "Annotation",
    subtitle: "Polygon segmentation",
    description: "Annotation par polygones sur Roboflow — pas de bounding boxes simples. Segmentation précise pour distinguer des outils adjacents.",
    tech: ["Roboflow", "Polygon masks", "21 classes"],
    color: "from-indigo-500 to-cyan-500"
  },
  {
    step: "03",
    icon: "🔄",
    title: "Augmentation",
    subtitle: "1 888 images finales",
    description: "8 techniques d'augmentation : rotations 90°, cisaillement ±9°, variation de teinte/saturation/luminosité. Passage de ~400 à 1888 images effectives.",
    tech: ["Rotation", "Shear", "HSV shift", "Gaussian blur"],
    color: "from-cyan-500 to-teal-500"
  },
  {
    step: "04",
    icon: "🧠",
    title: "Entraînement",
    subtitle: "YOLOv8n-seg · 100 epochs",
    description: "Modèle sélectionné pour son équilibre vitesse/précision critique en embedded robotics. Comparaison de plusieurs architectures YOLO sur le même dataset.",
    tech: ["YOLOv8n-seg", "100 epochs", "IoU threshold", "GPU training"],
    color: "from-teal-500 to-emerald-500"
  },
  {
    step: "05",
    icon: "🚀",
    title: "Déploiement",
    subtitle: "Inférence embarquée",
    description: "Intégration sur Mini PC Lenovo. Pipeline : frame capturée → inférence YOLO → bilan d'outils → décision backend → action Arduino.",
    tech: ["Mini PC", "Serial → Arduino", "REST API", "<50ms latency"],
    color: "from-emerald-500 to-green-500"
  }
];

export const datasetStats = [
  { value: 1888, label: "Images totales", icon: "🖼️" },
  { value: 21, label: "Classes d'outils", icon: "🔧" },
  { value: 8, label: "Techniques augmentation", icon: "🔄" },
  { value: 1, label: "Annotation min.", icon: "✏️" },
  { value: 8, label: "Annotations max.", icon: "📊" },
];

export const classDistributionData = [
  { name: "Tournevis plat grand", count: 298 },
  { name: "Mini pince coupante", count: 187 },
  { name: "Cutteur", count: 156 },
  { name: "Tournevis américain", count: 245 },
  { name: "Clé L moyenne", count: 198 },
  { name: "Clé L petite", count: 167 },
  { name: "Mini tournevis cruciforme", count: 142 },
  { name: "Clé plate 4-5", count: 176 },
  { name: "Mini clé L", count: 134 },
  { name: "Pince universelle", count: 189 },
];

export const trainingMetrics = [
  {
    metric: "mAP@50",
    value: "95.6%",
    description: "Précision avec seuil IoU = 50%",
    color: "indigo",
    trend: "+12% vs baseline"
  },
  {
    metric: "mAP@50-95",
    value: "91.8%",
    description: "Score moyen multi-seuils",
    color: "cyan",
    trend: "Robuste en conditions réelles"
  },
  {
    metric: "Epochs",
    value: "100",
    description: "Sans surapprentissage",
    color: "teal",
    trend: "Early stopping non déclenché"
  },
  {
    metric: "Classes",
    value: "21",
    description: "Dont détection de mains",
    color: "emerald",
    trend: "Couverture complète du FabLab"
  },
];

export const decisionScenarios = [
  {
    id: "borrow-ok",
    scenario: "Emprunt correct",
    trigger: "Outil détecté = Outil sélectionné",
    fc: "FC4",
    steps: [
      "Caméra capture le tiroir ouvert",
      "YOLOv8 identifie l'outil prélevé",
      "Comparaison avec la sélection utilisateur",
      "✅ Match → Tiroir se ferme automatiquement",
      "Base de données mise à jour",
    ],
    color: "emerald",
    icon: "✅"
  },
  {
    id: "borrow-wrong",
    scenario: "Mauvais outil prélevé",
    trigger: "Outil détecté ≠ Outil sélectionné",
    fc: "FC4 + FC6",
    steps: [
      "Caméra détecte une discordance",
      "Alerte déclenchée côté interface",
      "3 options proposées à l'utilisateur :",
      "  → Corriger (reposer l'outil)",
      "  → Confirmer (mettre à jour le stock)",
      "  → Annuler (restaurer l'état initial)",
    ],
    color: "amber",
    icon: "⚠️"
  },
  {
    id: "theft-detection",
    scenario: "Détection de main suspecte",
    trigger: "Main détectée hors contexte d'emprunt validé",
    fc: "FC6",
    steps: [
      "Classe 'main' détectée dans le champ caméra",
      "Aucun emprunt actif correspondant",
      "Alerte anomalie → Admin notifié",
      "Tiroir bloqué",
      "Incident enregistré en base",
    ],
    color: "red",
    icon: "🚨"
  },
  {
    id: "return-validation",
    scenario: "Validation de retour",
    trigger: "Outil remis = Outil attendu",
    fc: "FC4",
    steps: [
      "Utilisateur repose l'outil dans le tiroir",
      "Caméra confirme la présence de l'outil",
      "Vérification de correspondance",
      "✅ Match → Emprunt clôturé",
      "Disponibilité mise à jour en temps réel",
    ],
    color: "cyan",
    icon: "↩️"
  }
];

export const liveStats = [
  { label: "FPS", value: "23" },
  { label: "Objets détectés", value: "4" },
  { label: "Confidence moy.", value: "93.2%" },
  { label: "Latence", value: "43ms" },
];

export const techStack = [
  {
    category: "Modèle",
    items: ["YOLOv8n-seg", "Ultralytics", "PyTorch"],
    icon: "🧠"
  },
  {
    category: "Data",
    items: ["Roboflow", "Polygon annotation", "Custom augmentation"],
    icon: "📊"
  },
  {
    category: "Déploiement",
    items: ["OpenCV", "Python FastAPI", "Serial/USB → Arduino"],
    icon: "🚀"
  },
  {
    category: "Chatbot IA",
    items: ["Ollama", "ChromaDB", "RAG Pipeline", "SSE Streaming"],
    icon: "💬"
  }
];

export const perspectives = [
  "Entraîner sur gamme élargie → 0 re-annotation à chaque modification d'outil",
  "Optimisation pour Raspberry Pi avec quantification INT8",
  "Multi-caméra pour couvrir plusieurs tiroirs simultanément",
  "Alertes prédictives : détecter l'usure des outils par analyse visuelle",
];
