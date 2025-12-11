import React, { useState, useEffect } from 'react';
import { projects, socialLinks } from '../data/portfolioData';
const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);
const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);
const ProjectCard = ({ project, aosDelay }) => (
  <div 
    data-aos="fade-up"
    data-aos-delay={aosDelay}
    className={`relative rounded-2xl p-[1px] group transition-all duration-500 ${
      project.isFlagship 
        ? 'bg-gradient-to-br from-red-500/50 via-white/10 to-red-500/30 hover:from-red-500 hover:via-red-400/30 hover:to-red-500/60' 
        : 'bg-white/10 hover:bg-white/20'
    }`}
  >
    <div className={`rounded-2xl p-6 md:p-8 h-full backdrop-blur-md transition-all duration-500 ${
      project.isFlagship 
        ? 'bg-[#0f0f0f]/95 group-hover:bg-[#0f0f0f]/90' 
        : 'bg-[#111111]/90 group-hover:bg-[#111111]/80'
    }`}>
      {project.badge && (
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20 mb-4">
          {project.badge}
        </span>
      )}
      <div className="flex items-baseline gap-4 mb-4">
        <span className="text-5xl font-black text-white/10 font-serif italic">{project.number}</span>
        <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight capitalize">{project.title}</h3>
      </div>
      <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6 max-w-2xl font-medium">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-8">
        {project.techTags.map((tag) => (
          <span 
            key={tag}
            className="px-3 py-1 text-xs font-bold text-white/70 bg-white/5 rounded-full border border-white/10 hover:bg-red-500/20 hover:border-red-500/30 hover:text-red-300 transition-all duration-300 cursor-default"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        {project.links.github && (
          <a 
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold hover:bg-white hover:text-black transition-all duration-300 group/btn"
          >
            <GitHubIcon />
            GitHub
          </a>
        )}
        {project.links.demo !== undefined && (
          <a 
            href={project.links.demo || '#'}
            target={project.links.demo ? "_blank" : undefined}
            rel={project.links.demo ? "noopener noreferrer" : undefined}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              project.links.demo 
                ? 'bg-[#ff2a2a] text-white hover:bg-red-600 hover:shadow-[0_0_20px_rgba(255,42,42,0.4)]' 
                : 'bg-white/5 text-white/40 border border-white/10 cursor-not-allowed'
            }`}
          >
            <ExternalLinkIcon />
            {project.links.demo ? 'Live Demo' : 'Demo Coming Soon'}
          </a>
        )}
        {project.links.frontendDemo && (
          <a 
            href={project.links.frontendDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff2a2a] text-white text-sm font-semibold hover:bg-red-600 hover:shadow-[0_0_20px_rgba(255,42,42,0.4)] transition-all duration-300"
          >
            <ExternalLinkIcon />
            Frontend Demo
          </a>
        )}
        {project.links.backendApi && (
          <a 
            href={project.links.backendApi}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold hover:bg-white/20 transition-all duration-300"
          >
            <ExternalLinkIcon />
            Backend API
          </a>
        )}
      </div>
    </div>
  </div>
);
const Projects = () => {
  const [repoProjects, setRepoProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/PashamDhanushReddy/repos?sort=updated&per_page=100');
        if (!response.ok) {
          throw new Error('Failed to fetch from GitHub');
        }
        const data = await response.json();
        const originalRepos = data.filter(repo => !repo.fork && repo.name !== 'PashamDhanushReddy');
        const mergedProjects = originalRepos.map((repo, index) => {
          const localConfig = projects.find(p => {
            const githubLinkMatch = p.links?.github && p.links.github.toLowerCase().endsWith(repo.name.toLowerCase());
            const titleMatch = p.title.toLowerCase().replace(/ /g, '-') === repo.name.toLowerCase();
            return githubLinkMatch || titleMatch;
          });
          return {
            id: repo.name,
            number: String(index + 1).padStart(2, '0'),
            badge: localConfig?.badge || (repo.topics?.length > 0 ? repo.topics[0] : "Project"),
            title: localConfig?.title || repo.name.replace(/[-_]/g, ' '),
            description: localConfig?.description || repo.description || "A project by Pasham Dhanush Reddy.",
            techTags: localConfig?.techTags || [repo.language, ...(repo.topics || [])].filter(Boolean),
            links: {
              github: repo.html_url,
              demo: localConfig && localConfig.links.demo !== undefined 
                ? localConfig.links.demo 
                : (repo.homepage || undefined),
              frontendDemo: localConfig?.links?.frontendDemo,
              backendApi: localConfig?.links?.backendApi,
            },
            isFlagship: localConfig ? localConfig.isFlagship : (repo.stargazers_count > 0),
          };
        });
        const sortedProjects = mergedProjects.sort((a, b) => {
          if (a.isFlagship && !b.isFlagship) return -1;
          if (!a.isFlagship && b.isFlagship) return 1;
          return 0;
        });
        const finalizedProjects = sortedProjects.map((p, i) => ({
          ...p,
          number: String(i + 1).padStart(2, '0')
        }));
        setRepoProjects(finalizedProjects);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching repos:", error);
        setRepoProjects(projects);
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);
  return (
    <section id="projects" className="bg-[#0a0a0a] pt-16 md:pt-24 pb-24 md:pb-32 px-4 sm:px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" className="mb-12 md:mb-20">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 md:mb-8 shadow-sm bg-white/5 backdrop-blur-sm">
            Featured Projects
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            Work that speaks <br className="hidden md:block" />for itself
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-lg font-medium leading-relaxed">
            A selection of projects that showcase my expertise in full-stack development and modern architecture, automatically updated from GitHub.
          </p>
        </div>
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500"></div>
          </div>
        ) : (
          <div className="flex flex-col gap-6 md:gap-8">
            {repoProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                aosDelay={String((index + 1) * 100 > 1000 ? 100 : (index + 1) * 100)} 
              />
            ))}
          </div>
        )}
        <div data-aos="fade-up" data-aos-delay="500" className="mt-16 flex justify-center">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white font-bold text-lg hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-500 group"
          >
            <GitHubIcon />
            Explore All My Repositories
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Projects;
