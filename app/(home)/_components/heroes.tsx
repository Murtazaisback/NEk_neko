import Image from "next/image";


export const Heroes =()=>{
    return(
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="flex items-center">
                <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
                    <Image src="/documents.png" fill className="object-contain dark:hidden" alt="docs"/>
                    <Image src="/documents-dark.png" fill className="object-contain dark:block hidden" alt="docs"/>
                </div>
                <div className="relative w-[400px] h-[400px] hidden md:block">
                    <Image src="/reading.png" fill className="object-contain dark:hidden" alt="reading"/>
                    <Image src="/reading-dark.png" fill className="object-contain hidden dark:block" alt="reading"/>
                </div>

            </div>
        </div>
    )
}