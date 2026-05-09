export const Home = () => {
    return (
        <section 
          id="home" 
          className="min-h-screen flex items-center justify-center relative">
           
           <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Hi, I'm Riya</h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                I’m a full-stack developer passionate about building scalable web applications and intuitive user experiences. 
                I enjoy working across frontend and backend, turning ideas into real-world solutions using modern technologies.</p>
            <div className="flex justify-center space-x-4">
                <a 
                href="#projects" 
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] "
                >
                    View Projects
                </a>

                <a 
                href="#contact" 
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 "
                >
                    Contact Me
                </a>

            </div>
           </div>
        </section>
    );
};

