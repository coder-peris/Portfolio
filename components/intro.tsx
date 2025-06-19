import Image from "next/image";
import type { FC, ReactNode } from 'react';

const Intro: FC = (): ReactNode => {
	return (
		<section className="w-full py-8 md:py-12 lg:py-16 bg-muted/30 px-6">
			<div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-[1fr_400px] md:gap-12">
				<div className="flex flex-col justify-center space-y-4">
					<div className="space-y-8">
						<h1 className="text-4xl sm:text-5xl font-bold tracking-tighter text-center md:text-left">
							Hi, I&apos;m Peris
						</h1>
						<p className="max-w-2xl mx-auto text-muted-foreground text-xl text-center md:text-left mb-10 md:mb-0">
							A detail-oriented Full-Stack Web Developer with hands-on experience in building responsive, user-centric applications. Passionate about solving real-world problems with clean code, modern technologies, and a strong focus on performance and accessibility.						</p>
					</div>
				</div>
				<div className="flex items-center justify-center">
					<div className="relative h-[200px] w-[200px] md:h-[300px] md:w-[300px]">
						<Image
							src="/0001.jpg"
							alt="profile_photo"
							className="rounded-full object-cover"
							fill
							priority
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Intro;