"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Icônes SVG
const LinkedInIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
);

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
);

const cellColors: { [key: string]: string } = {
  "Mécanique": "text-orange-600 bg-orange-50 border-orange-200",
  "Électrique": "text-yellow-600 bg-yellow-50 border-yellow-200",
  "Informatique": "text-blue-600 bg-blue-50 border-blue-200",
  "AI": "text-purple-600 bg-purple-50 border-purple-200",
  "Marketing": "text-pink-600 bg-pink-50 border-pink-200",
  "Fabrication": "text-emerald-600 bg-emerald-50 border-emerald-200",
  "Spéciale": "text-slate-400 bg-slate-50 border-slate-200",
};

const team = [
  { id: 1, name: "Amina ALALGUI", cell: "Mécanique", role: "Chef de projet", tech: "SolidWorks", img: "/team/Amina.png", li: "#", gh: "#" },
  { id: 2, name: "Jelyne Laura WAFO WENDZI", cell: "Électrique", role: "Responsable Matériel", tech: "Arduino Mega", img: "/team/laura.png", li: "#", gh: "#" },
  { id: 3, name: "Douae EL GHAZAL", cell: "Informatique", role: "Responsable Santé & Sécurité", tech: "Database", img: "/team/douae.png", li: "#", gh: "#" },
  { id: 4, name: "Rim EL-OUARDANI", cell: "AI", role: "Responsable Data", tech: "YOLOv8", img: "/team/rim.png", li: "#", gh: "#" },
  { id: 5, name: "Halima SEMLALI", cell: "Mécanique", role: "Cellule Mécanique", tech: "MDF 10mm", img: "/team/halima.png", li: "#", gh: "#" },
  { id: 6, name: "Youssef LAABADI", cell: "Fabrication", role: "Cellule Fabrication", tech: "CNC Machining", img: "/team/youssef.png", li: "#", gh: "#" },
  { id: 7, name: "Doha EL FERKOUSS", cell: "Informatique", role: "Cellule Informatique", tech: "API Design", img: "/team/doha.png", li: "#", gh: "#" },
  { id: 8, name: "Oualid NASYR", cell: "Informatique", role: "Cellule Informatique", tech: "Embedded C++", img: "/team/oualid.png", li: "#", gh: "#" },
  { id: 9, name: "Walid MAIOUTE", cell: "AI", role: "Cellule AI", tech: "Deep Learning", img: "/team/walid.png", li: "#", gh: "#" },
  { id: 10, name: "Jihane JRA", cell: "AI", role: "Cellule AI", tech: "UI/UX", img: "/team/jihane.png", li: "#", gh: "#" },
  { id: 11, name: "Fatima Zahra MALAININE", cell: "Marketing", role: "Cellule Marketing", tech: "Strategy", img: "/team/fatima.png", li: "#", gh: "#" },
  { id: 12, name: "Hafsa EL ARROUCHI", cell: "Marketing", role: "Cellule Marketing", tech: "Planning", img: "/team/hafsa.png", li: "#", gh: "#" },
  { id: 13, name: "Ismail OUIAZZANE", cell: "Spéciale", role: "Même note que tout le monde", tech: "Expert", img: "/team/ismail.png", li: "#", gh: "#" },
];

export default function EquipePage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const getActiveColor = (cell: string) => {
    const colorMap: { [key: string]: string } = {
      "Mécanique": "bg-orange-600",
      "Électrique": "bg-yellow-500",
      "Informatique": "bg-blue-600",
      "AI": "bg-purple-600",
      "Marketing": "bg-pink-600",
      "Fabrication": "bg-emerald-600",
      "Spéciale": "bg-slate-500",
    };
    return colorMap[cell] || "bg-[#087eaa]";
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Background Vidéo */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="h-full w-full object-cover">
          <source src="/background-3d.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/90 backdrop-blur-[1px]" />
      </div>

      {/* LIGNES DE FOND DYNAMIQUES (CROSSHAIR) */}
      <div className="fixed inset-0 pointer-events-none z-10 opacity-30">
        <div className={`absolute top-0 left-1/2 w-[1px] h-full transition-colors duration-500 ${hoveredId ? getActiveColor(team.find(m => m.id === hoveredId)?.cell || "") : 'bg-slate-200'}`} />
        <div className={`absolute top-1/2 left-0 w-full h-[1px] transition-colors duration-500 ${hoveredId ? getActiveColor(team.find(m => m.id === hoveredId)?.cell || "") : 'bg-slate-200'}`} />
      </div>

      <div className="relative z-20 max-w-[1400px] mx-auto pt-16 pb-20 px-6 text-center">
        <header className="flex flex-col items-center mb-16">
          <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            <Image src="/logo-toolguard_arriere.png" alt="Logo ToolGuard" width={220} height={70} className="mx-auto mb-6 h-auto w-auto" />
            <h1 className="text-5xl font-black text-slate-900 uppercase tracking-tighter italic">
              L&apos;Ingénierie Derrière <span className="text-[#087eaa]">ToolGuard</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-slate-600 font-medium leading-relaxed italic">
              13 élèves ingénieurs, convergence de différentes expertises prêts à entreprendre. 
              Portés par un leadership collaboratif, résolument tournés vers l&apos;innovation.
            </p>
            <p className="mt-4 text-[#087eaa] font-black uppercase tracking-[0.3em] text-[11px]">
              Team ToolGuard • Promotion 2027 • EMINES
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-16">
          {team.map((member) => {
            const isHovered = hoveredId === member.id;
            const activeColor = getActiveColor(member.cell);

            return (
              <motion.div 
                key={member.id}
                onMouseEnter={() => setHoveredId(member.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative flex flex-col items-center"
              >
                {/* La Carte Capsule */}
                <motion.div 
                  className={`relative w-full max-w-[230px] pt-10 pb-8 px-4 rounded-[110px] border-2 transition-all duration-500 flex flex-col items-center
                    ${isHovered ? `${activeColor} border-transparent shadow-2xl scale-105 z-30` : 'bg-white/80 border-slate-100 shadow-sm z-20'}`}
                >
                  {/* BADGE ÉTIQUETTE NOIRE INCLINÉE (Visible au survol) */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute top-4 right-[-5px] bg-black text-white text-[8px] font-black uppercase px-2 py-1 rounded rotate-12 shadow-xl z-50"
                      >
                        {member.tech}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Image Circulaire */}
                  <div className={`relative w-28 h-28 mb-6 rounded-full overflow-hidden border-4 transition-all duration-500 shadow-lg
                    ${isHovered ? 'border-white/40 scale-110' : 'border-white'}`}>
                    <Image 
                      src={member.img} 
                      alt={member.name} 
                      fill 
                      sizes="112px"
                      className={`object-cover transition-all duration-700 ${isHovered ? 'grayscale-0 scale-105' : 'grayscale'}`} 
                    />
                  </div>

                  {/* Infos */}
                  <div className="text-center w-full px-2">
                    <span className={`text-[8px] font-black uppercase px-3 py-1 rounded-full border mb-4 inline-block
                      ${isHovered ? 'bg-white/20 border-white/20 text-white' : cellColors[member.cell]}`}>
                      {member.cell === "Spéciale" ? "Cellule Delta" : `Cellule ${member.cell}`}
                    </span>
                    <h3 className={`text-[14px] font-black leading-tight mb-1 transition-colors ${isHovered ? 'text-white' : 'text-slate-900'}`}>
                      {member.name}
                    </h3>
                    <p className={`text-[9px] font-bold uppercase tracking-wider ${isHovered ? 'text-white/70' : 'text-slate-400'}`}>
                      {member.role}
                    </p>
                  </div>

                  {/* Liens Sociaux */}
                  <div className={`flex gap-4 mt-6 pt-4 border-t w-full justify-center transition-colors ${isHovered ? 'border-white/10 text-white' : 'border-slate-50 text-slate-300'}`}>
                    <a href={member.li} target="_blank" rel="noopener noreferrer" className="hover:scale-150 transition-transform"><LinkedInIcon /></a>
                    <a href={member.gh} target="_blank" rel="noopener noreferrer" className="hover:scale-150 transition-transform"><GithubIcon /></a>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}