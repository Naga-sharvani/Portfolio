import React from 'react';

export function SkillsSection() {
  const skillGroups = [
    {
      name: 'Languages',
      items: ['Python', 'C++', 'TypeScript', 'JavaScript', 'Java', 'C'],
    },
    {
      name: 'Backend & APIs',
      items: ['FastAPI', 'Node.js', 'Express.js', 'REST APIs', 'SQLAlchemy'],
    },
    {
      name: 'Databases',
      items: ['PostgreSQL', 'MySQL', 'MongoDB'],
    },
    {
      name: 'Machine Learning & CV',
      items: ['Scikit-learn', 'YOLOv8', 'Pandas', 'NumPy', 'Matplotlib'],
    },
    {
      name: 'Frontend',
      items: ['React.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
    },
    {
      name: 'CS Fundamentals & Problem Solving',
      items: [
        'Data Structures & Algorithms',
        '200+ Solved on LeetCode',
        'OOP',
        'DBMS',
        'Operating Systems',
        'Computer Networks',
      ],
    },
    {
      name: 'Tools & Workflow',
      items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman'],
    },
  ];

  return (
    <section id="skills" className="py-12 border-t border-zinc-800/80">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-xl font-bold tracking-tight text-white mb-6">
          Skills &amp; Technologies
        </h2>

        <div className="space-y-4">
          {skillGroups.map((group) => (
            <div
              key={group.name}
              className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 text-xs sm:text-sm"
            >
              <div className="w-full sm:w-44 text-zinc-400 font-mono text-xs shrink-0">
                {group.name}
              </div>
              <div className="flex flex-wrap gap-1.5 flex-1">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800 text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
