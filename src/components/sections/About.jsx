export const About = () =>{

    
    return(
        <section 
           id="about" 
           className="min-h-screen flex items-center justify-center py-20"
           >
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-center"> 
                {""}
                About Me 
                </h2>

                <div className=" rounded-xl p-8 border-white/10  hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6"> 
                        Passionate developer with experience in building scalable web applications and creating innovative solutions
                    </p>

                    <div className="grid grid-cols-1 mt-8">
                    <div className="flex justify-center">

                    <div className="p-6 max-w-md w-full rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-center hover:-translate-y-1 transition-all">

                    <h3 className="text-xl font-bold mb-4">Education 🎓</h3>

                    <ul className="space-y-4">
                    <li>
                        <strong className="block text-lg">MS in Computer Science</strong>
                        <span className="block text-gray-400 mt-1">
                             SRH University Heidelberg, Germany (2023–2025)
                        </span>
                    </li>

        
                    <li>
                       <span className="block font-semibold mb-2">Skills Acquired:</span>

                        <div className="flex flex-col items-center gap-1 text-sm text-gray-300">
                         <span>Modern Javascript Frameworks (React, Vue)</span>
                         <span>Advanced Programming (Java)</span>
                         <span>Software Development Best Practices</span>
                        <span>Database Design and Management (MySQL, MongoDB)</span>
                        </div>
                    </li>

                    <li>
                        <strong className="block text-lg">BE in Computer Science</strong>
                        <span className="block text-gray-400 mt-1">
                             Visvesvaraya Technological University (2018–2022)
                        </span>
                    </li>

                    <li>
                       <span className="block font-semibold mb-2">Skills Acquired:</span>

                        <div className="flex flex-col items-center gap-1 text-sm text-gray-300">
                         <span>Data Structures and Algorithms</span>
                         <span>Object Oriented Programming</span>
                         <span>Database Management System</span>
                        <span>Software Engineering Principles</span>
                        </div>
                    </li>

                    </ul>

    </div>

  </div>
</div>
                </div>
            </div>
           </section>

    ) 
}