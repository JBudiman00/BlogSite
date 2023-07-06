export default function About () {
    return(
        <div className="flex justify-center text-[#E7DED0]">
            <div className="w-2/3">
                <div className="h-6"></div>
                <div className="flex flex-row justify-around">
                    <div className="flex flex-col items-center w-1/3">
                        <img src="nathanprofile.jpg" className="w-64 h-64 object-contain"/>
                        <div className="h-6"></div>
                        <div className="bg-[#9F825B] rounded-lg p-2">
                            <p className="text-3xl text-center m-4">Nathan Budiman</p>
                            <p className="text-md text-center">
                                Nathan Budiman is a rising senior at Purdue University studying Industrial engineering
                                with minors in Statistics and Management. In his free time, he likes to play pickup basketball,
                                Cook and goof around with friends. He's done the complete full stack development for this blog website from scratch. 
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-1/3">
                        <img src="chloeprofile.png" className="w-64 h-64 object-contain"/>
                        <div className="h-6"></div>
                        <div className="bg-[#9F825B] rounded-lg p-2">
                            <p className="text-3xl text-center m-4">Chloe Lin</p>
                            <p className="text-md text-center">
                                Chloe Lin is a rising sophomore at Purdue University studying Computer Science. 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="h-12"></div>
                <div className="bg-[#9F825B] rounded-lg p-2">
                    <p className="text-3xl text-center m-4">About this website</p>
                                <p className="text-md text-center">
                                    This website was designed using a Next.jS typescript framework for the frontend, express.js typescript backend
                                    and a MySQL database with Prisma as an ORM. Next.JS was an ideal frameworrk for this website because the functionality
                                    is rather basic and it comes pre-configured with packages that make programming a much simpler task. As for the backend,
                                    express.js utilizes javascript, a language the programmer is comfortable with, and provides ample documentation as an open source language.
                                    Both frontend and backend were written in typescript, as using declarative languages leads to better coding practices and prevents
                                    errors from occuring. Prisma was chosen from a set of available ORMs because it had the biggest community support and the most clear
                                    documentation (Looking at you Sequelize). Finally, MySQL is a language that the programmer has used from his time at university 
                                    and is easily configurable.  
                                </p>
                    </div>
                <div className="h-6"></div>
            </div>
        </div>
    );
}